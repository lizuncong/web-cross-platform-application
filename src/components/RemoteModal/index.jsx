// @ts-nocheck

import { memo, useRef, useMemo, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { stringify } from 'qs';
import { copyStyles } from './util';
import './index.less';

const vPadding = 20;
const hPadding = 20;
// 本组件只用于electron端多开窗口时使用
// winOptions同electron new Browserwindow传入的选项一致
// 由于window.open第三个参数在浏览器的支持并不是很好，因此这里取个巧，用第二个参数传递窗口的配置项，
// 然后在electron端拦截
const WindowPortal = ({
  children,
  closeAfterBlur = true,
  onBlur,
  route,
  onClose,
  visible,
  winOptions,
  name,
}) => {
  const windowInstance = useRef(null);
  const winOptionRef = useRef(null);
  const containerEl = useMemo(() => {
    if (visible) {
      return document.createElement('div');
    }
  }, [visible]);
  winOptionRef.current = winOptions;
  useEffect(() => {
    if (!visible) {
      windowInstance.current && windowInstance.current.close();
      windowInstance.current = null;
      return;
    }
    // 默认选项
    const defaultBrowserWindowOptions = {
      transparent: true,
      backgroundColor: '#00000000',
      width: 400,
      height: 400,
      frame: false,
      // x: 0,
      // y: 0,
      // movable: true,
      resizable: false,
    };

    const browserwinOptions = {
      ...defaultBrowserWindowOptions,
      ...winOptionRef.current,
      id111: 'remote',
      name,
    }
    browserwinOptions.__portalType = 'modal'; // 和主进程约定的协议，用于拦截窗口的创建
    browserwinOptions.width = browserwinOptions.width + vPadding * 2; // 为了实现阴影
    browserwinOptions.height = browserwinOptions.height + hPadding * 2; // 为了实现阴影
    const { x, width, y, height } = browserwinOptions;
    // 如果没有传递x和y，则打开时默认居中
    const left = x === undefined ? window.screen.width / 2 - width / 2 : x - hPadding;
    let top = y === undefined ? window.screen.height / 2 - height / 2 : y - vPadding;
    browserwinOptions.x = left; // 为了实现阴影
    browserwinOptions.y = top; // 为了实现阴影
    windowInstance.current = window.open(
      route,
      stringify(browserwinOptions),
      `left=${left},top=${top},width=${width},height=${height}`,
    );
    if (!windowInstance.current) return;
    // containerEl?.setAttribute('class', 'ele-modal-wrap');
    // windowInstance.current.document.body.appendChild(containerEl);
    // windowInstance.current.document.head.innerHTML = '';
    // copyStyles(document, windowInstance.current.document);
  }, [name, visible, containerEl]);

  useEffect(() => {

    if (!windowInstance.current) return;

    const onBlurInner = (e) => {

      // 默认失焦关闭
      if (closeAfterBlur && windowInstance.current) {
        windowInstance.current.close();
        windowInstance.current = null;
        onClose && onClose();
      }
      if (onBlur) {
        onBlur();
      }
    };
    const onBeforeunload = () => {
      console.log('子窗口before unlaod....-==')
      onClose();
    };
    windowInstance.current.addEventListener('blur', onBlurInner);
    windowInstance.current.addEventListener('load', () => {
      windowInstance.current.addEventListener('beforeunload', onBeforeunload);
    });

    return () => {
      if (!windowInstance.current) return;
      windowInstance.current.removeEventListener('blur', onBlurInner);
      windowInstance.current.removeEventListener('beforeunload', onBeforeunload);
    };
  }, [visible, onBlur, onClose, closeAfterBlur]);
  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      console.log('父窗口before unlaod....-==')
      windowInstance.current && windowInstance.current.close();
      windowInstance.current = null;
    });
    return () => {
      windowInstance.current && windowInstance.current.close();
      windowInstance.current = null;
    };
  }, []);
  if (!visible) return null;
  return null;
  // return ReactDOM.createPortal(children, containerEl);
};

export default memo(WindowPortal);
