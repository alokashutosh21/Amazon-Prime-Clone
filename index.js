let register = document.getElementById("register")
let sign = document.querySelector(".sign")
let show = document.querySelector("show")
let icon = document.getElementById("icon")
let user = document.getElementById("user")
let right = document.getElementById("right")
let logo = document.querySelector(".logo")
let cross = document.querySelector(".fa-times")

register.addEventListener("click",()=>{
    console.log("click")
        // sign.style.display == "block"
    // if (sign.style.display == "none") {
    // }
    sign.classList.add("show")
})
icon.addEventListener("click",()=>{
    sign.classList.remove("show")
})
user.addEventListener("click",()=>{
     right.style.display = "inline";
    logo.style.display = "none"
    cross.style.display = "block"
    user.classList.replace("fa-user","fa-times")
    
})
cross.addEventListener("click",()=>{
    cross.style.display = "none"
    right.style.display = "none";
    logo.style.display = "block"
    user.classList.replace("fa-times","fa-user")
})