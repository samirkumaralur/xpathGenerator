chrome.contextMenus.create({
	title:'Get_Sentiment',
	contexts:['selection'],
	onclick:function(info,tab){
		chrome.tabs.sendMessage(tab.id, info.selectionText);
	}
});
