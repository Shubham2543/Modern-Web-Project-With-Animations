Shery.mouseFollower();

Shery.makeMagnet(".magnet");

Shery.hoverWithMediaCircle(".hvr" , {images: ["https://plus.unsplash.com/premium_photo-1681426604528-ae470ae9314d?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , "https://plus.unsplash.com/premium_photo-1665657351648-e63266282d57?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , "https://images.unsplash.com/photo-1674214857700-b5a833693513?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]});

gsap.to(".fleftelm" , {
    y:"-300%",
    ease:Power1,
    scrollTrigger:{
        trigger:"#fimages",
        pin:true,
        start:"top top",
        end:"bottom bottom",
        endTrigger:".last",
        scrub:1,
    }
})

let sections = document.querySelectorAll(".fleftelm");
Shery.imageEffect(".images", {
    style: 5,
    config:{onMouse:{value:1}},
    slideStyle: (setScroll) => {
        sections.forEach(function(section , index) {
            ScrollTrigger.create({
                trigger:section,
                start:"top top" ,
                scrub:2,
                onUpdate: function(prog) {
                    setScroll(prog.progress + index);
                }
            })
        })
    },
});

gsap.from("#nav" , {
    opacity:0,
    y:"-200px",
    duration:2,
    delay:.3,
    stagger:1,
})