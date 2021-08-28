export default class Page {
    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /path/to/page.html)
     */
    open({ fullPath, endpoint }: { fullPath: string; endpoint: string }): void {
        if (fullPath) {
            browser.url(fullPath)
        } else if (endpoint) {
            browser.url(`${browser.config.baseUrl}/${endpoint}`)
        } else {
            browser.url(`${browser.config.baseUrl}`)
        }
        browser.maximizeWindow()
        browser.setTimeout({ implicit: 30000 })
    }
}
