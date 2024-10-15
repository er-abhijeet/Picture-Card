/*let coins=document.querySelectorAll(".coin-container");
let i=1;
coins.forEach((coin)=>{
    console.log()
    coin.addEventListener("mouseover",()=>{
        let pin=document.querySelector(`#p${i}`);
        if(pin)pin.classList.add("active")
    })
    i+=1;
})

i=1;
coins.forEach((coin)=>{
    coin.addEventListener("mouseout",()=>{
        let pin=document.querySelector(`#p${i}`);
        if(pin)pin.classList.remove("active")
    })
    i+=1;
})*/

let coins = document.querySelectorAll(".coin-container");
let cards = document.querySelectorAll(".card");
coins.forEach((coin, index) => {
    let i = index + 1; // Start pin ID from 1

    coin.addEventListener("mouseover", () => {
        let pin = document.querySelector(`#p${i}`); // Assuming IDs are like 'pin1', 'pin2', etc.
        let card= document.querySelector(`#cr${i}`);
        if (pin) {
            pin.classList.add("active");
            card.classList.add("active");
        }
    });

    coin.addEventListener("mouseout", () => {
        let pin = document.querySelector(`#p${i}`);
        let card= document.querySelector(`#cr${i}`);
        if (pin) {
            pin.classList.remove("active");
            card.classList.remove("active");
        }
    });
});

