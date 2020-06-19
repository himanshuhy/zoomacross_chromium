let defzoom = 1.25


chrome.storage.local.set({defzoom}, function() {
    console.log('Value is set to ' + defzoom);
});


chrome.tabs.onCreated.addListener((tab) => {
    chrome.storage.local.get(['defzoom'], function (result) {
        chrome.tabs.getZoom(tab.id, (zfactor)=>{
            if (zfactor != result.defzoom){
                chrome.tabs.setZoom(tab.id, result.defzoom)
            }
        })
    });
})

chrome.tabs.onHighlighted.addListener((tab) => {
    chrome.storage.local.get(['defzoom'], function (result) {
        chrome.tabs.getZoom(tab.id, (zfactor)=>{
            if (zfactor != result.defzoom){
                chrome.tabs.setZoom(tab.id, result.defzoom)
            }
        })
    });
})