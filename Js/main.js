const box = document.querySelector(".box");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");




box1.addEventListener("click", () => {
     box1.classList.toggle("active");
     box2.classList.remove("active");
     box3.classList.remove("active");
     box4.classList.remove("active");
     box5.classList.remove("active");
})

box2.addEventListener("click", () => {
     box2.classList.toggle("active");
     box1.classList.remove("active");
     box3.classList.remove("active");
     box4.classList.remove("active");
     box5.classList.remove("active");
})

box3.addEventListener("click", () => {
     box3.classList.toggle("active");
     box1.classList.remove("active");
     box2.classList.remove("active");
     box4.classList.remove("active");
     box5.classList.remove("active");
})

box4.addEventListener("click", () => {
     box4.classList.toggle("active");
     box1.classList.remove("active");
     box2.classList.remove("active");
     box3.classList.remove("active");
     box5.classList.remove("active");
})

box5.addEventListener("click", () => {
     box5.classList.toggle("active");
     box1.classList.remove("active");
     box2.classList.remove("active");
     box3.classList.remove("active");
     box4.classList.remove("active");
})