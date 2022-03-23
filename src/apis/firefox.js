export class Api {
  constructor() {
    this.runtime = {
      onInstalled: {
        addListener: browser.runtime.onInstalled.addListener
      }
    };

    this.tabs = {
      query: browser.tabs.query,
      create: browser.tabs.create,
      remove: browser.tabs.remove,
      update: browser.tabs.update,
      onUpdated: {
        addListener: browser.tabs.onUpdated.addListener
      }
    };
  }
}
