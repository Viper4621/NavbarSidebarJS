//classlist = show/gets all classes
//contains - check classlist for specific class
//add = add class
//remove = remove class
//toggle = toggle class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  //   console.log(links.classList.contains("links"));
  //   if (links.classList.contains("show-links")) {
  //     links.classList.remove("show-links");
  //   } else {
  //     links.classList.add("show-links");
  //   }
  links.classList.toggle("show-links");
});
