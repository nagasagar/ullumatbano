var storage = chrome.storage.local;
console.log(storage);
var getUUID = function(message, sender, sendResponse) {
    if (message.method == "getUUID"){
		//sendResponse({status: localStorage['uuid']});
		storage.get('uuid',function(items){
			console.log('item?');
			console.log(items);
			if (items) {
				if (items.uuid){
					console.log('mc: mothership here, have message YaY');
					sendResponse({status: items.uuid});
				}
				else {
					console.log('mc: mothership here, no message sob');
					sendResponse({status: items.uuid});
				}
			}
			else {
					console.log('mc: mothership here, no items message boohoo!');
					sendResponse({status: items});

				}	
		});
		}
	else if (message.method == "setUUID"){
		try {
		console.log('mc: setting mothership birthname '+message.key.length);
		}
		catch (err){
		console.log('mc: something wrong in setting mothership name'+err.message);
		}
		storage.set({'uuid': message.key}, function() {
		});
	//sendResponse({status: localasStorage['uuid']});
	}
    else {
      sendResponse({}); // snub them.
    }
    return true;
};
// Listen for the content script to send a message to the background page.



chrome.runtime.onMessage.addListener(getUUID);

chrome.runtime.onInstalled.addListener(function(deets){
	if(deets.reason=='install'){
		console.log('mc: hello new friend i love you already');
		chrome.tabs.create({
		   url : "http://www.kernelinsights.com/youvegotmakkhichoose"
		});
	}
});



//UA-49863451-1 | MCID

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-49863451-1']);
_gaq.push(['_trackPageview']);


(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; 
  s.parentNode.insertBefore(ga, s);
})();
