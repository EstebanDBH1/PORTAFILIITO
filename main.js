let tl = gsap.timeline({paused: true});
const navBtn = document.querySelector(".menu-toggle-btn");
navBtn.onclick = function (e) {
  navBtn.classList.toggle("active");
  tl.reversed(!tl.reversed());
};

tl.to(".nav__responsive", {
  y: 0,
  opacity: 1,
  duration: 0.4,
  ease: "power3.easeInOut",
  stagger: 0.03
})

tl.to(".logo a, .place span",{
  color: "#fff",
  ease: Power2.inOut,
  duration: 0.2
})

tl.from(".container__responsive ul li a", {
  y: "-100%",
  ease: "Power3.easeinOut",
  stagger: 0.1,
  duration: 0.5
})

tl.from(".footer__social a", {
  opacity: 0,
  ease: "power3.easeInOut",
  duration: 0.5,
  stagger: 0.1
}).reverse();