var output= document.querySelector("#output");
var btn = document.querySelector('#btn');
var h1 = document.querySelector("#h1");
btn.addEventListener('click', btnClick);



function btnClick(e){
    e.preventDefault();
    btn.style.backgroundColor='rgba(0, 0, 0,0.2)';
    btn.style.color='rgb(43, 200, 248)';
    btn.innerHTML="clicked";
    output.innerHTML="<h2> Oluborode Akintunde Paul</h2>";
    output.style.fontFamily='monospace';
    h1.textContent="Full Name";
    h1.style.fontFamily='monospace';
console.log(output);
}