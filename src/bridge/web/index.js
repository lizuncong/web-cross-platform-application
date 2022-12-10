import React from 'react';

export const MyButton = React.memo(() => {
    return (
        <button>跨平台组件</button>
    )
})

export const goToNewPage = () => {
    console.log('goToNewPageWeb')
    alert('假装页面跳转成功')
}

const noop = () => { }
export const writeFile = noop