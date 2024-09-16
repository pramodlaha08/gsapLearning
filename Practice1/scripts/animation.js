let tl = gsap.timeline();

gsap.to('.box1', {
    x: 1000,
    duration: 3,
    delay: 1,
    rotate: 360,
    backgroundColor: "blue"
})

gsap.from('.box2', {
    x: 1000,
    duration: 3,
    delay: 1,
    rotate: 360,
    backgroundColor: 'blue'
});

tl.to(".box3", {
    x: 1200,
    rotate: 360,
    scale: 0.5,
    duration: 2,
    delay: 1,
    backgroundColor: 'crimson'
});

tl.to(".box4", {
    x: 1200,
    rotate: 360,
    scale: 0.5,
    duration: 2,
    backgroundColor: 'crimson'
});