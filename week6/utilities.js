function qs(selector){
    return document.querySelector(selector)
}

function getFromLs(key){
    let getItem = localStorage.getItem(key);
    getItem = JSON.parse(getItem);
    return getItem;
}


function saveToLs(key, data){
    localStorage.setItem(key, JSON.stringify(data));
}

function setClick(selector, callback){
    qs(selector).addEventListener("touchend", (event) => {
        event.preventDefult();
        callback();
    });
    qs(selector).addEventListener("click", callback);
}
