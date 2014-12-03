// Copyright (c) 2014 DLH

var Safari = Application("Safari");
var Chrome = Application("Google Chrome");
Chrome.includeStandardAdditions = true;

var SafariTools = {
    currentURL: function() {
        if (Safari.documents.length == 0)
            return null;
        var frontmostWindow = Safari.windows[0];
        if (!frontmostWindow.visible())
            return null;
        return frontmostWindow.currentTab().url();
    }
};

var ChromeTools = {
    // Finds the tab with the provided URL and reloads + activates it
    //
    // Returns true if a tab exists with the provided URL.
    reloadAndActivateTabWithURL: function(url) {
        for (var window of Chrome.windows()) {
            var index = window.tabs().findIndex(function(tab) {
                return tab.url() == url;
            });
            if (index >= 0) {
                window.activeTabIndex = index + 1;
                window.activeTab.reload();
                return true;
            }
        }
        return false;
    },

    // Returns true if the frontmost tab is empty
    hasEmptyTab: function() {
        if (Chrome.windows.length == 0)
            return false;
        return Chrome.windows[0].activeTab.url() == "chrome://newtab/";
    }
};

function main() {
    var url = SafariTools.currentURL();
    if (!url)
        return;

    Chrome.activate();

    // Don't needlessly create new tabs if there's already
    // one with the url
    var didReload = ChromeTools.reloadAndActivateTabWithURL(url);
    if (didReload)
        return;

    if (ChromeTools.hasEmptyTab()) {
        Chrome.windows[0].activeTab.url = url;
        return;
    }

    Chrome.openLocation(url);
}

main();
