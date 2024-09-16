gsap.from('#page1 #circle', {
    scale: 0,
    delay: 1,
    duration: 3,
    rotate:720
})

gsap.from('#page2 #circle', {
    scale: 0,
    duration: 3,
    scrollTrigger: {
        trigger: '#page2 #circle',
        scroller: 'body',
        markers: true,
        start: 'top 60%',
        end: 'top 30%',
        // scrub:true
        scrub:4
    },
    rotate: 420
})

const allowed = {
    dress: 'white, pink, tshirt',
    photo: 'not a single photo in group',
    ifSplit: 'breakup if in mix group',
};
