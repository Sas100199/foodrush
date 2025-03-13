
document.addEventListener('DOMContentLoaded', () => {

    const loadmess = [
        "Loading your delicious meal... 🍔🍕",
        "Just a moment! Your feast is on its way. 🚀",
        "Fetching fresh flavors for you... 🍜",
        "Cooking up something special! 🍳🔥",
        "Good food takes time... but not too much! ⏳🍽️",
        "Packing your order with love and care... 🎁",
        "Our chefs are preparing your meal fresh and hot! 👨‍🍳🔥",
        "Your order is being wrapped up and ready to go! 🛍️",
        "Almost there! Your food will arrive soon. 🏍️💨",
        "Stay hungry! Your meal is on the way. 🍽️"
    ];

    var loader = document.querySelector(".loader");
    var lm = document.querySelector(".loadmess");
    lm.textContent = loadmess[Math.floor(Math.random() * loadmess.length)]
    setTimeout(() => {
        loader.style.transition = "visibility 0.5s ease, opacity 0.5s ease";
        loader.style.visibility = "hidden";
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500); // Wait for transition to complete before hiding
    }, 800);


})

var signupform = document.querySelector("#signu");
var signinform = document.querySelector("#signi");
let signupcross = document.querySelector("#signui")
let signincross = document.querySelector("#signii")




//  Gsap 
var tl = gsap.timeline();

let carti = document.querySelector("#carti")
let cartclose = document.querySelector("#cci");
carti.addEventListener("click", () => {

    gsap.to(".cartcontent", {
        opacity: 1,
        duration: 0.2,
        transform: "translateX(0%)",
        visibility: "visible",
        x: 20,
        ease: "power1.out",
        // stagger: 0.2
    })

})

cartclose.addEventListener("click", () => {
    gsap.to(".cartcontent", {
        opacity: 0,
        duration: 0.1,
        transform: "translateX(100%)",
        // visibility:"hidden",
        x: -20,
        ease: "power1.out",
        // stagger: 0.2
    })
})
