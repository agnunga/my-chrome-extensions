// chrome.browserAction.onClicked.addListener(function(activeTab){
//   var newURL = "http://www.radio.or.ke/ramogi-nairobi/";
//   chrome.windows.create({ url: newURL });
// });
chrome.browserAction.onClicked.addListener(function() {
   chrome.windows.create({'url': 'https://web.whatsapp.com/', 'type': 'popup', 'width': 650, 'height': 640}, function(window) {
   });
});
