// chrome.browserAction.onClicked.addListener(function(activeTab){
//   var newURL = "http://www.radio.or.ke/ramogi-nairobi/";
//   chrome.windows.create({ url: newURL });
// });
chrome.browserAction.onClicked.addListener(function() {
   chrome.windows.create({'url': 'http://www.radio.or.ke/ramogi-nairobi/', 'type': 'popup', 'width': 350, 'height': 450}, function(window) {
   });
});
