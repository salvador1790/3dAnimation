const card = document.querySelector('.card');
const  container = document.querySelector('.container');

container.addEventListener('mousemove', (e) =>{
    let xAxis = (window.innerWidth / 2 - e.pageX)/20;
    let yAxis = (window.innerHeight  / 2 - e.pageY)/20;
    card.style.transform =`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

//Items
const title = document.querySelector(".title")
const sneaker = document.querySelector(".sneaker img")
const description = document.querySelector(".info  h3")
const purchase = document.querySelector(".purchase")
const sizes = document.querySelector(".sizes")

//Animate in//
container.addEventListener('mouseenter', (e) =>{
    card.style.transition = "none"

    title.style.transform = `translateZ(100px)`;
    sneaker.style.transform = `translateZ(100px)`;
    description.style.transform = `translateZ(100px)`;
    purchase.style.transform = `translateZ(100px)`;
    sizes.style.transform = `translateZ(100px)`;
})

//When Animation Ends//

container.addEventListener('mouseleave', (e) =>{
    card.style.transition = "all 0.3s ease"
})

container.addEventListener('mouseleave', (e) =>{
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
})
