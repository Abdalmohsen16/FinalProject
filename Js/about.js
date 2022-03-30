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