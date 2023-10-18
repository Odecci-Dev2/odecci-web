// * For scrolling animation in Banner.astro
const scrollers = document.querySelectorAll(".odc-scroller");

// * If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {

        // * Add data-animated="true" to every `.odc-scroller` on the page
        scroller.setAttribute("data-animated", true);

        // * Make an array from the elements within `.odc-scroller__inner`
        const scrollerInner = scroller.querySelector(".odc-scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // * For each item in the array, clone it
        // * add aria-hidden to it
        // * add it into the `.odc-scroller__inner`
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });

    });
}
