chrome.contextMenus.create({
  title: "Get_XPath",
  contexts: [
    "page",
    "link",
    "editable",
    "image",
    "video",
    "audio",
    "selection",
  ],
  onclick: function (info, tab) {
    chrome.tabs.sendMessage(tab.id, "GetXpath");
  },
});
