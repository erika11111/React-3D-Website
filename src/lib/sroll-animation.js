import gsap from "gsap";
//method for camera position update and re-rendering
export const scrollAnimation = (position, target, isMobile, onUpdate) => {
  const tl = gsap.timeline();

  //starting animation
  //on gsap timeline two functions being executed
  //first is the position of the camera being animated.
  //Method receives a trigger and a properties that will change.
  //Scroll will start an animation (trigger), start and end position of animation. Scrub is animation delay
  //Animation is heavy for browser so it is not rendered unless triggered.
  //if its not on mobile set to -3.38, if it is, then -7.0
  tl.to(position, {
    x: !isMobile ? -3.38 : -7.0,
    y: !isMobile ? -10.74 : -12.2,
    z: !isMobile ? -5.93 : -6.0,
    scrollTrigger: {
      trigger: ".sound-section",
      start: "top bottom",
      end: "top top",
      scrub: 2,
      immediateRender: false,
    },
    onUpdate,
  })
    .to(target, {
      x: !isMobile ? 1.52 : 0.7,
      y: !isMobile ? 0.77 : 1.9,
      z: !isMobile ? -1.08 : 0.7,
      scrollTrigger: {
        trigger: ".sound-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    //fade out
    .to(".jumbotron-section", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".sound-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    //fade in
    .to(".sound-section-content", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".sound-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    .to(position, {
      x: !isMobile ? 1.56 : 9.36,
      y: !isMobile ? 5.0 : 10.96,
      z: !isMobile ? 0.01 : 0.09,
      scrollTrigger: {
        trigger: ".display-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
      onUpdate,
    })
    .to(target, {
      x: !isMobile ? -0.55 : 1.62,
      y: !isMobile ? 0.32 : 0.02,
      z: !isMobile ? 0.0 : -0.06,
      scrollTrigger: {
        trigger: ".display-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    //fade in
    .to(".display-section", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".display-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    });
};
