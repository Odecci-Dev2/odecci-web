// * Get the root element
const root = document.documentElement;

// * Access the custom property value
const root__Left = getComputedStyle(root).getPropertyValue('--odc-pos-x');
const root__Top = getComputedStyle(root).getPropertyValue('--odc-pos-y');

// * Custom Cursor
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

window.addEventListener('mousemove', (e) => {
    const positionX = e.clientX
    const positionY = e.clientY
    
    let rootX = root.style.setProperty('--odc-pos-x', `${positionX}px`)
    let rootY = root.style.setProperty('--odc-pos-y', `${positionY}px`)
    
    // * Cursor Dot
    cursorDot.style.left = rootX
    cursorDot.style.top = rootY

    cursorOutline.animate({
        top: [cursorOutline.style.top, positionY + 'px'],
        left: [cursorOutline.style.left, positionX + 'px'],
    }, {duration: 500, fill: "forwards"} )
})

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



// * Slider Button
const slider = document.querySelectorAll('[odc-slider]')
let sliderSelected = null;

slider.forEach(slides => {
    const sliderImage = slides.querySelector('.odc-slide-img');
    const sliderButton = slides.querySelector('.odc-slider-btn');

    

    sliderButton.addEventListener('click', () => {
        if (sliderSelected) {
            sliderSelected.sliderButton.classList.remove('selected')
            sliderSelected.sliderImage.classList.remove('selected')
        }
    
        if (sliderSelected !== sliderButton) {
            sliderButton.classList.add('selected')
            sliderImage.classList.add('selected')
            // * Listen for mousemove events on the card
            sliderButton.addEventListener('mousemove', () => {
                cursorDot.classList.add('active')
                cursorOutline.classList.add('active')
            })
            sliderButton.addEventListener('mouseleave', () => {
                cursorDot.classList.remove('active')
                cursorOutline.classList.remove('active')
            })
            sliderButton.addEventListener('mouseenter', () => {
                cursorDot.classList.add('active')
                cursorOutline.classList.add('active')
            })
            // * Listen for mousemove events on the document to handle cursor inside the card
            document.addEventListener('mousemove', (e) => {
                // * Check if the mouse is inside the card
                if (e.target === sliderButton || sliderButton.contains(e.target)) {
                    cursorDot.classList.add('active')
                    cursorOutline.classList.add('active')
                }
            });
            sliderSelected = { sliderButton, sliderImage }
        } else {
            sliderSelected = null
        }
    })
    
})

// * Remove Empty Span
function removeEmptySpanElements() {
    const spanElements = document.querySelectorAll('span')

    spanElements.forEach((span) => {
    // * Check if the span has no text content and no child nodes
    if (span.textContent.trim() === '' && span.children.length === 0) {
        // * Remove the empty span element
        span.remove()
    }
    });
}
removeEmptySpanElements()

// * Input Value Listener
const input = document.querySelectorAll('.odc-input')

input.forEach(item => {
    item.addEventListener('input', () => {
        if (item.value.trim() !== '') {
            item.classList.add('has-value');
        } else {
            item.classList.remove('has-value');
        }
    })
})


// *** Road Map Section

const stickySections = document.querySelectorAll('.odc__sticky')

window.addEventListener('scroll', () => {
    for (const section of stickySections) {
            transform(section)
    }
})

function transform(element) {
    const offsetTop = element.parentElement.offsetTop
    // console.log('ScrollY = ', window.scrollY);
    // console.log('offsetTop = ', offsetTop);
    // console.log('window.innerHeight = ', window.innerHeight);
    const scrollSection = element.querySelector('.odc__scroll__section')
    let percentage = ((window.scrollY - (offsetTop + 728)) / window.innerHeight) * 100
    console.log('Total: ' + percentage);
    percentage = percentage < 0 ? 0 : percentage > 200 ? 200 : percentage 
    scrollSection.style.transform = `translateX(${-(percentage)}vw`
}


const btnStayHovered = document.querySelectorAll('[data-btn-stay-hovered]')
const mapWrapper = document.querySelectorAll('[data-map-wrapper]')

btnStayHovered.forEach(btn => {

    btn.addEventListener('click', () => {

        let toggleThis = btn.closest('[data-map-wrapper]')
        toggleThis.classList.add('open')

        if (btn.matches("[data-btn-stay-hovered='false']")) {

            btn.innerHTML = 'Close'
            btn.setAttribute('data-btn-stay-hovered' , 'true')

        }

        if (btn.matches("[data-btn-stay-hovered='true']")) {

            btn.addEventListener('click', () => {

                btn.innerHTML = 'Stay Open'
                toggleThis.classList.remove('open')
                btn.setAttribute('data-btn-stay-hovered' , 'false')
                
            })

        }

    })

})