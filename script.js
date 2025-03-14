
var tl = gsap.timeline();

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
document.addEventListener('DOMContentLoaded', () => {

    // Set a random loading message
    let loader = document.querySelector(".loader");
    let lm = document.querySelector(".loadmess");
    lm.textContent = loadmess[Math.floor(Math.random() * loadmess.length)];

    setTimeout(() => {
        loader.style.transition = "visibility 0.5s ease, opacity 0.5s ease";
        loader.style.visibility = "hidden";
        loader.style.opacity = "0";
    }, 800);

    let logo = document.querySelector("#logo");
    let text = logo.textContent.trim().split("");
    let newText = "";

    text.forEach(letter => {
        newText += `<span class='letter'>${letter}</span>`;
    });

    logo.innerHTML = newText;

    // GSAP animation for logo letters
    gsap.from(".letter", {
        opacity: 0,
        y: -50,
        duration: 1.2,
        ease: "power1.out",
        stagger: 0.010
    });

    tl.from("nav ul li", {
        opacity: 0,
        duration: 1,
        y: -50,
        ease: "power1.out",
        stagger: 0.2
    })
        .from("#carti, #cartno", { opacity: 0, ease: "power1.out", stagger: 0.2 });


    const carti = document.querySelector("#carti");
    const cartclose = document.querySelector("#cci");
    const cartcontent = document.querySelector(".cartcontent");
    const item = document.querySelector(".item")
    const cartlist = document.querySelector("#cartlist");
    const itemname = document.querySelector(".itemname");
    const itemprice = document.querySelector(".itemprice");
    const cartno = document.querySelector("#cartno")
    const allcards = document.querySelector(".cartadd");
    const cartClose = document.querySelector("#cci");
    const cartContent = document.querySelector(".cartcontent");
    const cartList = document.querySelector("#cartlist");
    const cartNo = document.querySelector("#cartno");
    const allCards = document.querySelectorAll(".cartadd");
    
    let cart = []; // Store cart items in memory (not persistent)
    
    allCards.forEach(card => {
        card.addEventListener("click", () => {
            const name = card.getAttribute("data-name") || "Unknown Item";
            const price = card.getAttribute("data-price") || "$9.99";
    
            // Create cart item
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("item");
            itemDiv.innerHTML = `
                <span class="itemname">${name}</span>
                <span class="itemprice">${price}</span>
                <span class="remove">Remove</span>
            `;
    
            // Remove item event
            itemDiv.querySelector(".remove").addEventListener("click", () => {
                cartList.removeChild(itemDiv);
                cart = cart.filter(item => item.name !== name);
                cartNo.textContent = cart.length; // Update cart count
            });
    
            // Add to cart
            cartList.appendChild(itemDiv);
            cart.push({ name, price });
    
            // Update cart count
            cartNo.textContent = cart.length;
        });
    });
    carti.addEventListener("click", () => {
        tl.to(cartcontent, { opacity: 1, duration: 0.2, x: 20, ease: "power1.out", visibility: "visible" });
        tl.from(item, { opacity: 1, duration: 0.2, y: 20, ease: " Power1.out", visibility: "visible" });
    });

    cartclose.addEventListener("click", () => {
        gsap.to(cartcontent, { opacity: 0, duration: 0.1, x: -20, ease: "power1.out", visibility: "hidden" });
    });


    gsap.from("#c1r h1", { opacity: 0, y: 50, duration: 1, ease: "power2.out", delay: 0.5 });
    gsap.from("#c1r p", { opacity: 0, y: 30, duration: 1, ease: "power2.out", delay: 0.8 });
    gsap.from(".signbut button", { opacity: 0, y: 20, duration: 1, ease: "power2.out", delay: 1.2, stagger: 0.3 });

    // ✅ ScrollTrigger Animations
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".c2card", {
        opacity: 0, y: 50, duration: 1, stagger: 0.3, ease: "power2.out",
        scrollTrigger: { trigger: "#cont2", start: "top 80%", toggleActions: "play none none reverse" }
    });

    gsap.from(".c2cimages", {
        opacity: 0, scale: 0.9, duration: 1, stagger: 0.3, ease: "power2.out",
        scrollTrigger: { trigger: "#cont3", start: "top 75%", toggleActions: "play none none reverse" }
    });

    gsap.from(".c4h1", {
        opacity: 0, y: 30, duration: 1, ease: "power2.out",
        scrollTrigger: { trigger: "#cont4", start: "top 85%", toggleActions: "play none none reverse" }
    });

    gsap.from(".c4cimages", {
        opacity: 0, x: -50, duration: 1, stagger: 0.2, ease: "power2.out",
        scrollTrigger: { trigger: ".c4content", start: "top 80%", toggleActions: "play none none reverse" }
    });

})