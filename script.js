const hamburger = document.querySelector('nav svg');

hamburger.addEventListener('click', () => {
    if(hamburger.classList.contains('active')) {
        gsap.to('.links', {x: "100%"});
        gsap.to('.line', {stroke: "white"});
        gsap.set('body', {overflow: 'auto'});
        gsap.set('body', {overflowX: 'hidden'})

    }else {
       gsap.to('.links', {x: '0%'});
       gsap.to('.line', {stroke: "black"})
       gsap.fromTo('.links a', {opacity: 0, y: 0}, {opacity: 1, y:20, delay: 0.25, 
       stagger: 0.25});
       gsap.set('body', {overflow: 'hidden'})
    }
    hamburger.classList.toggle("active");
});

const video = gsap.utils.toArray(".video");
gsap.set(video, { opacity: 0 });

video.forEach(video => {
    ScrollTrigger.create({
        trigger: video,
        start: 'top center',
        end: "bottom center",
       
        onEnter: () => {
            gsap.to(video, { opacity: 1});
            video.play();
        },
        onEnterBack: () => video.play(),
        onLeave: () => video.pause(),
        onLeaveBack: () => video.pause(),
    });
})