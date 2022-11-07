// Presentation page animation section
// const sections = document.querySelectorAll(".section");
// const rootElement = document.querySelectorAll("main");
// const observer = new IntersectionObserver(function(entries, observer) {
//     entries.forEach(entry => {
//         entry.target.classList.add("show", entry.isIntersecting)
//     })
// }, {
//     threshold: 0.5,
// });
// sections.forEach(section => {
//     observer.observe(section);
// })


gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.4,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.image-wrapper',
    scrub: true
  }
})
.to('.image-wrapper', {
  stagger: .1,
  y: -400,
  opacity: 1,
  scrub: true
})