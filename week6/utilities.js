export function qs(selector){
    return document.querySelector(selector)
}

export function getFromLs(key){}

export function saveToLs(key, data){
    localStorage.setItem(key, JSON.Stringfy(data));
}

export function setClick(selector, callback){
    qs(selector).addEventListener("touchend", (event) => {
        event.preventDefult();
        callback();
    });
    qs(selector).addEventListener("click", callback);
}
