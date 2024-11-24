import { Modal } from 'antd';

const CustomModal = ({ visible, children, onClose, winOptions }: any) => {
  return (
    <Modal
      title={null}
      width={winOptions.width + 48}
      open={visible}
      closable={false}
      maskClosable={false}
      footer={null}
      onCancel={onClose}
    >
      <div style={{ height: `${winOptions.height + 48}px` }}>{children}</div>
    </Modal>
  );
};

export default CustomModal;
