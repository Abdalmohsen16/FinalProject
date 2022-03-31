const buttons = document.querySelectorAll('h1');
buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove()
        },1000)
        })
    })

// pop up login 

document.querySelector("#show-login").addEventListener("click",function(){
    // document.querySelector(".popup").classList.add("active")
    document.getElementById("login").style.display = "block";
})

document.querySelector(".popup .close-btn").addEventListener("click",function(){
    // document.querySelector(".popup").classList.remove("active")
    document.getElementById("login").style.display = "none";
})

// Switch mode

const checkbox = 
document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

// rating

function rate1() {
    let opinion1 = "😠 الموقع سيء"
    document.getElementById("opinion").innerHTML = `<p style="color:white; font-size:20px; margin-top: 10px">${opinion1}</p>`
}
function rate2() {
    let opinion1 = "🙄 لا بأس به"
    document.getElementById("opinion").innerHTML = `<p style="color:white; font-size:20px; margin-top: 10px">${opinion1}</p>`
}
function rate3() {
    let opinion1 = "👏 جيد"
    document.getElementById("opinion").innerHTML = `<p style="color:white; font-size:20px; margin-top: 10px">${opinion1}</p>`
}
function rate4() {
    let opinion1 = "😎 رائع"
    document.getElementById("opinion").innerHTML = `<p style="color:white; font-size:20px; margin-top: 10px">${opinion1}</p>`
}
function rate5() {
    let opinion1 = "😍 ممتاز"
    document.getElementById("opinion").innerHTML = `<p style="color:white; font-size:20px; margin-top: 10px">${opinion1}</p>`
}

// scrollpath

let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - 
window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset /
    totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}