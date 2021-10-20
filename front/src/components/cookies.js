export function findCookieValue(cookieName) {
    let value=false
    let allcookies = document.cookie;
    let pos = allcookies.indexOf(cookieName + "="); 
    if (pos !== -1) {
        let start = pos + cookieName.length + 1;
        let end = allcookies.indexOf(";", start);
        if (end === -1) {
            end = allcookies.length;
        }
        let res=decodeURIComponent(allcookies.substring(start, end));
        let indexEnd=res.search(/}/)
        let index=res.search(/{/)
         let val=res.slice(index,indexEnd+1)
            value=JSON.parse(val)
        return value} 
}
export function findCookie(cookieName){
    let allcookies = document.cookie;
    let pos = allcookies.indexOf(cookieName + "="); 
    if (pos !== -1) {
        let start = pos + cookieName.length + 1;
        let end = allcookies.indexOf(";", start);
        if (end === -1) {
            end = allcookies.length;
        }
       let value=allcookies.substring(start, end)
        return value 
    }
    
}