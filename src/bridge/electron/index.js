const { BrowserWindow } = window.require("@electron/remote")
export const goToNewPage = () => {
    console.log('goToNewPageElectron')
    const win = new BrowserWindow({
        width: 200,
        height: 200
    })
    win.loadURL('http://localhost:3000/dashboard')
}



