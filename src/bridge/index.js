export default function bridge() {
    // 根据不同的平台动态加载不同的脚本，注意尽量做到各平台暴露出来的接口命名、出入参一致
    return new Promise((resolve, reject) => {
        // TODO: 暂时用window.require判断electron和web端，后续需要看下是否有更可靠的判断方法
        if (!window.require) {
            import(/* webpackChunkName: "web" */ './web').then(res => {
                console.log('动态import.web...', res)
                resolve(res)
            })
        } else {
            import(/* webpackChunkName: "electron" */ './electron').then(res => {
                console.log('动态import.electron...', res)
                resolve(res)
            })
        }
    })
}
