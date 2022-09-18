
// Open and close menu bar for mobile and tablet view
let open = document.querySelector(".fa-bars");
      let close = document.querySelector(".fa-times");

      let navbar = document.querySelector(".nav-links");

      open.addEventListener("click", () => {
        navbar.style.left = "50%";
      });
      close.addEventListener("click", () => {
        navbar.style.left = "0%";
      });

// change nav links color
let changeColor = document.querySelector("nav")
      window.addEventListener("scroll", () => {
        if(window.scrollY >= 3){
            changeColor.classList.add(".changed")
        } else{
            changeColor.classList.remove(".changed")
        }
      })