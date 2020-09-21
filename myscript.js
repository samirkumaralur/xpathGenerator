document.addEventListener('click', function(){
	console.log(document.URL);
});

chrome.runtime.onMessage.addListener(function(message,sender, sendResponse){
	//alert(message)
	$.ajax({url:"http://127.0.0.1:5000/get_message",
		type:"POST",
		data:{
			messageSent: JSON.stringify(message)
		},
		success:function(result){console.log(result)}
	});
});