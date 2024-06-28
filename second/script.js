var tl = gsap.timeline()

tl.from("#nav img",{
    y: -20,
    opacity: 0,
    duration: 1,
    delay: .1
})

tl.from("#nav a",{
    y: -20,
    opacity: 0,
    duration: 1,
    stagger: 0.3
})

gsap.from("#main",{
    opacity: 0,
    duration: 1,
    delay: 3,
    y: 10 
})

gsap.to("#main #right img", {
    transform: "translateY(-10%)",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top 12%",
        end: "top -100%",
        pin: true,
        scrub: 2
    }
})

gsap.to("#main #left", {
    transform: "translateY(-5%)",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top 15%",
        end: "top -100%",
        pin: true,
        scrub: 2
    }
})