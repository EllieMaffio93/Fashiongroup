
        //just grabbing what I need to make this work
        const intro = document.querySelector('.intro');
        const video = document.querySelector('video');
        const text = document.querySelector('h1');
        const text2 = document.querySelector('h2');
        const text3 = document.querySelector('p');
        const trigger = document.querySelector('.trigger');
        
        //INITIATING SCROLL MAGIC
        //creating a controller to which attach things to it and make the animation work
        
        const controller = new ScrollMagic.Controller();
    
        var timeline = new TimelineMax()
        .from($(".quote1, .quote2, .quote3"), 1, {y: "-200%", autoAlpha:0})
        .to(".quote1", 1, {y: "0%", autoAlpha:1})
        .to(".quote1", 1, {y: "-=50%", autoAlpha:0})
        .to(".quote2", 1, {y: "0%", autoAlpha:1})
        .to(".quote2", 1, {y: "-=50%", autoAlpha:0})
        .to(".quote3", 1, {y: "0%", autoAlpha:1});
    
        timeline.duration();
    
        var slideAnimation = new TimelineMax();
    
        slideAnimation.add(timeline, 0);
        
        
        //creating the scene of the animation, namely a container that contains all the elements to be animated
        //SCENES
        let scene = new ScrollMagic.Scene({
            duration:  10000, // duration of the video (ms)
            triggerElement: intro,
            triggerHook: 0
        })
        .addIndicators() // adding indicators to clarify what I'm doing
        .setPin(intro) //the scene will take place inside the video
        .setTween(slideAnimation)
        .addTo(controller); // adding this scene to the controller I've created before
    
       
    
    
    
        //another scene for the text
    
        /*const textAnim = TweenMax.fromTo(text , 3 , {opacity:1} , {opacity:0}); 
    
        let scene2 = new ScrollMagic.Scene({
            duration:3000,
            triggerElement: intro,
            triggerHook: 0
        })
        .addIndicators()
        .setTween(textAnim)
        .addTo(controller);
    
        //scene for the second text
    
        const textAnim2 = TweenMax.fromTo(text2 , 3 , {opacity:0} , {opacity:1});
    
        let scene3 = new ScrollMagic.Scene({
            duration:3000,
            triggerElement: intro,
            triggerHook: 0.1
        })
        .addIndicators()
        .setTween(textAnim2)
        .addTo(controller);
    
        //second text disappears
    
        const textAnim3 = TweenMax.fromTo(text2 , 4 , {opacity:1} , {opacity:0});
    
        let scene4 = new ScrollMagic.Scene({
            duration:4000,
            triggerElement: intro,
            triggerHook: 0.2
        })
        .addIndicators()
        .setTween(textAnim3)
        .addTo(controller);
    
        //third text appears
    
        const textAnim4 = TweenMax.fromTo(text3 , 7 , {opacity:0} , {opacity:1});
    
        let scene5 = new ScrollMagic.Scene({
            duration:7000,
            triggerElement: trigger,
            triggerHook: 0.3
        })
        .addIndicators()
        .setTween(textAnim4)
        .addTo(controller);*/
    
        
        
        // video animation
        let accelamount = 0;
        let scrollpos = 0;
        let delay= 0;
    
        scene.on("update" , e => {
            scrollpos = e.scrollPos/1000;
            
        });
    
        setInterval(() => {
            delay += (scrollpos - delay) * accelamount; 
            video.currentTime = scrollpos;
        }, 33.3);