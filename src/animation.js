/*
================================
Coder: Emily Yu 
Date: 02/16/2019 - 02/18/2019
Related File: banner.html, banner.css

Description: 
Objective for this exercise is to learn
how to implement GreenSock Animation Platform (GSAP).

Requirements include:
-use CSS to make a banner with an area about 
920px in width and 100px in height and 
add a background color
-have at least one animation where 
text is added onto the banner area 
-have at least one animation where 
an appropriate image is animated 
after the text is done animating

Modification I did with requirements:
-changed the banner area with a height of 200px
to have more playing ground

ANIMATION TIMELINE:
1) Background image of books will first blur before focusing
2) Two circles with text will drop onto the banner 
one after the other
3) Background changes with area covered in yellow
4) Main title appears
5) Lines flash around the title area (repeated twice) and 
moves down to form another text area with a background color of black
6) Subtitle shows up
7) Taglines for the banner appear in the black area
8) The last tagline bumps up into the black area
9) A bee flies in and flaps its wings (repeated indefinitely)

Notes and future implementations:
1) For the line sequences that repeat, I tried using 
yoyo and repeat properties/methods. Did not work as how I expected.
I suspect because the two sequences do not act entirely the same. Need to further investigate. 
2) For the lines, since they go from one state to another, I tried using fromTo() instead,
but the lines came out with a glitch effect and was not what I wanted. 
Maybe it's because the CSS is different for the from state or 
because the from and to states have different durations.
3) For tweens that immediately animate after the previous one, 
implementing a TimelineMax instead of TweenLite might be worthwhile,
therefore a future version of this should have a TimelineMax(). 
====================================
*/


/*Timeline step 1 - 2: book image blur + circle with text dropping onto banner*/
TweenLite.from("#books", 0.5, {filter: "blur(3px)"});
TweenLite.from("#circleOne", 2.5, {opacity: 0, scale: 0.1, ease: Elastic.easeOut.config(1, 0.3), delay: 0.6});
TweenLite.from("#lineOne", 0.5, {opacity: 0, ease: Circ.easeOut, delay: 0.8});
TweenLite.from("#circleTwo", 2.5, {opacity: 0, scale: 0.1, ease: Elastic.easeOut.config(1, 0.3), delay: 2.1})
TweenLite.from("#lineTwo", 0.5, {opacity: 0, ease: Circ.easeOut, delay: 2.3});

/*Timeline step 3 - 4: yellow background covers book image layer with title appearing*/
TweenLite.from("#background", 0.5, {left: -920, delay: 4});
TweenLite.from("#name", 1.2, {opacity: 0, ease: Elastic.easeOut.config(1, 0.3), delay: 4.5});

/*Timeline step 5: lines flash around title area
referenced this article for the effect: https://greensock.com/forums/topic/16508-animating-a-border-advice-needed/

To successfully animate on the same subject twice, need to add immdiateRender: false since a tween records the start and end value from the first time it tweened.
referenced this article: https://greensock.com/immediateRender*/
/*lines start drawing around the area, starting from left, bottom, right, to top. 
Opacity is set to 0 for the lines to disappear*/
TweenLite.to("#left", 0.3, {height: 100, background: "black", immediateRender: false, ease: Power1.easeOut, delay: 4.7});
TweenLite.to("#left", 0.1, {opacity: 0, immediateRender: false, ease: Power1.easeOut, delay: 5});
TweenLite.to("#bottom", 0.3, {width: 760, background: "black", immediateRender: false, ease: Power1.easeOut, delay: 5});
TweenLite.to("#bottom", 0.1, {opacity: 0, immediateRender: false, ease: Power1.easeOut, delay: 5.3});
TweenLite.to("#right", 0.3, {height: 100, background: "black", immediateRender: false, ease: Power1.easeOut, delay: 5.3});
TweenLite.to("#right", 0.1, {opacity: 0, immediateRender: false, ease: Power1.easeOut, delay: 5.6});
TweenLite.to("#top", 0.3, {width: 760, background: "black", immediateRender: false, ease: Power1.easeOut, delay: 5.6});
TweenLite.to("#top", 0.1, {opacity: 0, immediateRender: false, ease: Power1.easeOut, delay: 5.9});
/*lines wrap around the area and don't disappear this time*/
TweenLite.to("#left", 0.3, {opacity: 1, height: 100, background: "black", immediateRender: false, ease: Power1.easeOut, delay: 5.9});
TweenLite.to("#bottom", 0.3, {opacity: 1, width: 760, background: "black", immediateRender: false, ease: Power1.easeOut, delay: 6});
TweenLite.to("#right", 0.3, {opacity: 1, height: 100, background: "black", immediateRender: false, ease: Power1.easeOut, delay: 6.1});
TweenLite.to("#top", 0.3, {opacity: 1, width: 760, background: "black", immediateRender: false, ease: Power1.easeOut, delay: 6.2});


/*Timeline step 5: lines move down and the area is filled in black to show the taglines*/
TweenLite.to(["#right", "#bottom"], 0.3, {bottom: -80, immediateRender: false, ease: Power1.easeOut, delay: 6.3});
TweenLite.to(["#left", "#top"], 0.3, {top: 80, immediateRender: false, ease: Power1.easeOut, delay: 6.3});
TweenLite.to(["#left", "#right", "#top", "#bottom"], 0.3, {opacity: 0,ease: Power1.easeOut, delay: 6.6});
TweenLite.from("#wrapper", 0.3, {opacity: 0, ease: Power1.easeOut, delay: 6.6});

/*Timeline step 6: subtitle shows up*/
TweenLite.from("#subname", 1.2, {opacity: 0, ease: Elastic.easeOut.config(1, 0.3), delay: 6.9});

/*Timeline step 7 - 8: taglines appear in the black area*/
TweenLite.from("#tagOne", 1.2, {opacity: 0, left: -920, ease: Back.easeOut.config(1.7), delay: 7.4});
TweenLite.from("#tagTwo", 1.2, {opacity: 0, right: -920, ease: Back.easeOut.config(1.7), delay: 8.6});
TweenLite.to(["#tagOne", "#tagTwo"], 0.3, {opacity: 0, y: -100, ease: Back.easeOut.config(1.7), delay: 10.5});
TweenLite.to("#tagThree", 0.5, {opacity: 1, y: -50, ease: Back.easeOut.config(1.7), delay: 10.5});

/*Timeline step 9: bee flies in*/
TweenLite.from(["#noWings","#leftWing","#rightWing"], 1.3, {x: -250, y: 200, rotation: 90, ease: Power1.easeOut, delay: 10.8});

/*Timeline step 9: bee flaps wings*/
/*from -- flap; to -- fold back wings; repeat: -1 -- repeat indefinitely (use TweenMax for repeat method)*/
TweenMax.fromTo("#leftWing", 0.5, {rotation: 90, y: 11, x: -19, immediateRender: false, ease: Power1.easeOut, repeat: -1, repeatDelay: 0.5, delay: 12.5},{rotation: 60, y: 0, x: 0, immediateRender: false, ease: Power1.easeOut, repeat: -1, repeatDelay: 0.5, delay: 13.1});
TweenMax.fromTo("#rightWing", 0.5, {rotation: 30, y: -11, x: 7, immediateRender: false, ease: Power1.easeOut, repeat: -1, repeatDelay: 0.5, delay: 12.5},{rotation: 60, y: 0, x: 0, immediateRender: false, ease: Power1.easeOut, repeat: -1, repeatDelay: 0.5, delay: 13.1});

