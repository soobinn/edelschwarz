const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);
/////////////////////////////////////

//nav2

na2Tl = gsap.timeline({ default: { ease: "none" } });

$("header .btn-menu").click(function (e) {
    e.preventDefault();

    var menuWrap = $("header .menu-wrap");
    var linkWrap = menuWrap.find(".link-wrap a, .nav2-list .nav2-item a");

    if ($(this).hasClass("close")) {
        // Close the menu
        na2Tl.to(linkWrap, {
            y: 100,
        });
        na2Tl.to(menuWrap, {
            top: "100%",
        });

        $(this).removeClass("close");
    } else {
        // Open the menu
        na2Tl.to(menuWrap, {
            top: 0,
        });
        na2Tl.to(linkWrap, {
            y: 0,
        });

        $(this).addClass("close");
    }
});
//.sc-main

mainTl = gsap.timeline({
    default: { ease: "none" },
    scrollTrigger: {
        trigger: ".sc-main",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 1,
    },
});

mainTl.to(".main-bg", { opacity: 1 }, "a");
mainTl.to(".main-text", { "--opacity": 0 }, "a");
mainTl.to(".main-text", { opacity: 1 }, "a+=3");
mainTl.to(".main-bg", { opacity: 0 });

// bottle

const textWrapTl = gsap.timeline({
    default: { ease: "none" },
    scrollTrigger: {
        trigger: ".text-wrapper",
        start: "0% 100%",
        end: "100% 100%",
        scrub: 1,
        toggleClass: { targets: ".bottle-bg", className: "dark" },
    },
});

// .text-wrapper

ScrollTrigger.create({
    trigger: ".text-wrapper",
    start: "0% 100%",
    end: "100% 100%",
    toggleClass: { targets: ".text-bg", className: "fixed" },
});

const enjoyTl = gsap.timeline({
    default: { ease: "none" },
    scrollTrigger: {
        trigger: ".sc-enjoy",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 1,
    },
});
enjoyTl.to(
    ".enjoy-bgImg",
    {
        opacity: 1,
    },
    "a"
);
enjoyTl.to(
    ".enjoy-textImg",
    {
        opacity: 1,
        scale: 1,
        delay: 0.05,
    },
    "a"
);

// .sc-product

const productTl = gsap.timeline({
    default: { ease: "none" },
    scrollTrigger: {
        trigger: ".sc-product ",
        start: "0% 85%",
        end: "80% 90%",
        scrub: 1,
    },
});
productTl.to(" .sticky-bottle", {
    yPercent: 100,
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
});
productTl.to(" .sticky-bg", {
    opacity: 1,
    duration: 0.1,
});

// .sc-purset

const pursetTl = gsap.timeline({
    default: {
        ease: "none",
    },
    scrollTrigger: {
        trigger: ".sc-purest ",
        start: "0% 20%",
        end: "100% 50%",
        scrub: 1,
    },
});
pursetTl.to(".sc-purest .purset-video ", {
    opacity: 1,
    position: "fixed",
});
pursetTl.to(".sc-purest .con-text ", {
    opacity: 1,
    y: 0,
    delay: 0.1,
});
pursetTl.to(".sc-purest .purset-video ", {
    opacity: 0,
});
pursetTl.to(".sc-purest .purset-video ", {
    position: "static",
});

// text-con

gsap.to(".bottle-wrap", {
    scrollTrigger: {
        trigger: ".sc-purest",
        start: "80% 80%",
        end: "150% 100%",
        scrub: 1,
        ease: "none",
    },
    opacity: 0,
    display: "none",
});

// 반복문사용해서 쓰고싶음

$(`[data-bg]`).each(function (i, el) {
    ScrollTrigger.create({
        trigger: el,
        start: "0% 50%",
        end: "100% 50%",
        // markers: true,
        toggleClass: { targets: `#bg${i + 1}`, className: "on" },
    });
});

marqeeMotion1 = gsap.to(".sc-slide .slide", 15, {
    repeat: -1,
    xPercent: -33.33,
    ease: "none",
    paused: true,
});
marqeeMotion2 = gsap.to(".sc-slide .slide", 15, {
    repeat: -1,
    xPercent: 33.33,
    ease: "none",
    paused: true,
});

// marqeeMotion1.play();

ScrollTrigger.create({
    trigger: ".sc-slide",
    start: "0% 50%",
    end: "100% 50%",

    onUpdate: (self) => {
        if (self.direction == 1) {
            if (marqeeMotion2.isActive()) {
                marqeeMotion2
                    .reverse()
                    .eventCallback("onReverseComplete", function () {
                        marqeeMotion1.play();
                    });
            } else {
                //1번플레이
                marqeeMotion1.play();
            }
        } else {
            //올리는거
            if (marqeeMotion1.isActive()) {
                marqeeMotion1
                    .reverse()
                    .eventCallback("onReverseComplete", function () {
                        marqeeMotion2.play();
                    });
            } else {
                marqeeMotion2.play();
            }
        }
    },
});
