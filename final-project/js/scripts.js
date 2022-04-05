// let selection = document.querySelector('select')
// let link = document.getElementById('submit');

// selection.addEventListener('change', () => {
//     link.innerHTML = `` ;
// })

// box select sites

let link1 = "تـأكـيـد"

function Medicine() {
    document.getElementById('submit').innerHTML = `
    <a href="./Medicine.html" target="_blank"
    style="color: white">
    ${link1}
    </a>`
}
function Engineering() {
    document.getElementById('submit').innerHTML = `
    <a href="./Engineering.html" target="_blank"
    style="color: white">
    ${link1}
    </a>`
}
function teaching() {
    document.getElementById('submit').innerHTML = `
    <a href="./teaching.html" target="_blank"
    style="color: white">
    ${link1}
    </a>`
}
function commerce() {
    document.getElementById('submit').innerHTML = `
    <a href="./commerce.html" target="_blank"
    style="color: white">
    ${link1}
    </a>`
}
function programming() {
    document.getElementById('submit').innerHTML = `
    <a href="./programming.html" target="_blank"
    style="color: white">
    ${link1}
    </a>`
}

// rate text

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


// log in

function removesign() {
    let email = document.getElementById("remove").value;
    localStorage.setItem("email", email);

    document.getElementById("remove").value= '';
};

// log in - contact page

function contactsign() {
    let Email = document.getElementById("email1").value;
    let Password = document.getElementById("password1").value;
    localStorage.setItem("Email",Email);
    localStorage.setItem("Password",Password);

    document.getElementById("email1").value= '';
    document.getElementById("password1").value= '';
}

function dataremove() {
    document.getElementById("name").value= '';
    document.getElementById("age").value= '';
    document.getElementById("ordered-country").value= '';
    document.getElementById("currently-country").value= '';
}