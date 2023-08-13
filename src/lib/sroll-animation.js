import gsap from "gsap";
//method for camera position update and re-rendering
export const scrollAnimation = (position, target, onUpdate) => {
  const tl = gsap.timeline();

  //starting animation
  //on gsap timeline two functions being executed
  //first is the position of the camera being animated.
  //Method receives a trigger and a properties that will change.
  //Scroll will start an animation (trigger), start and end position of animation. Scrub is animation delay
  //Animation is heavy for browser so it is not rendered unless triggered.
  tl.to(position, {
    x: -3.38,
    y: -10.74,
    z: -5.93,
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
      x: 1.52,
      y: 0.77,
      z: -1.08,
      scrollTrigger: {
        trigger: ".ssound-section",
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
    });
};
