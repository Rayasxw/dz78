const btns=document.querySelectorAll("button");

btns.forEach(btn=> {
btn.onclick=(e)=> {
    document.body.style.backgroundColor=e.target.innerHTML
}
})