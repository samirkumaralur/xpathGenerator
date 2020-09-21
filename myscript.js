var selectedElement;
document.addEventListener("contextmenu", function (event) {
  selectedElement = event.target;
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log(xpath.getUniqueXPath(selectedElement));
});
