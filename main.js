
// Open and close menu bar for mobile and tablet view
let open = document.querySelector(".fa-bars");
      let close = document.querySelector(".fa-times");

      let navbar = document.querySelector(".nav-links");

      open.addEventListener("click", () => {
        navbar.style.left = "40%";
        navbar.style.transition = "0.5s ease-in";
    });
    close.addEventListener("click", () => {
        navbar.style.left = "0%";
        navbar.style.transition = "0.3s ease-out";
      });

// change nav links color
// let changeColor = document.querySelector("nav")
//       window.addEventListener("scroll", () => {
//         if(window.scrollY >= 3){
//             changeColor.classList.add(".changed")
//         } else{
//             changeColor.classList.remove(".changed")
//         }
//       })

    let comingSoon = document.querySelector(".coming-soon")
    let coming = document.getElementById("coming")

    comingSoon.addEventListener("click", function () {
        coming.innerText = "Coming soon!";
    })