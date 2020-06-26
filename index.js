let zoomOption = document.getElementById("zoomlevel")

zoomOption.addEventListener('change', () => {
    let newZoom = Number(zoomOption.value);

    chrome.storage.local.set({defzoom:newZoom}, function() {
    });
})