function showSideBar() {
    const sidebar = document.querySelector('.container');
    sidebar.style.display = "flex";
}

function hideSideBar() {
    const sidebar = document.querySelector('.container');
    sidebar.style.display = "none";
    document.querySelector('.content').classList.remove('blurred'); 
}

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target)
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    const elements = document.querySelectorAll(".trackScroll");
    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const activeDivs = document.querySelectorAll('.transports');

    if (activeDivs.length > 0) {
        // Initially setting the custom property for the first element
        activeDivs[0].style.setProperty('--pseudo-brightness', 'brightness(0.7)');
        activeDivs[0].classList.add('transportBackground')
    }

    activeDivs.forEach(div => {
        div.addEventListener('click', () => {
            // Resetting brightness for all elements
            activeDivs.forEach(d => {
                d.style.setProperty('--pseudo-brightness', 'brightness(0.1)');
                d.classList.remove('transportBackground')
            });

            // Highlight the clicked element
            div.style.setProperty('--pseudo-brightness', 'brightness(0.7)');
            div.classList.add('transportBackground')
        });
    });
});


const transportOne = document.querySelector('.transport1Explain')
const transportTwo = document.querySelector('.transport2Explain')
const transportThree = document.querySelector('.transport3Explain')
const transportFour = document.querySelector('.transport4Explain')
const firstTransport = document.querySelector('.transport1')
const secondTransport = document.querySelector('.transport2')
const thirdTransport = document.querySelector('.transport3')
const fourthTransport = document.querySelector('.transport4')

document.addEventListener('DOMContentLoaded', () => {
    transportOne.classList.add('transportVisible')
    transportOne.classList.remove('transportInvisible')

    transportTwo.classList.add('transportInvisible')
    transportTwo.classList.remove('transportVisible')

    transportThree.classList.add('transportInvisible')
    transportThree.classList.remove('transportVisible')

    transportFour.classList.add('transportInvisible')
    transportFour.classList.remove('transportVisible')
})

firstTransport.addEventListener('click', () => {
    transportOne.classList.add('transportVisible')
    transportOne.classList.remove('transportInvisible')

    transportTwo.classList.add('transportInvisible')
    transportTwo.classList.remove('transportVisible')

    transportThree.classList.add('transportInvisible')
    transportThree.classList.remove('transportVisible')

    transportFour.classList.add('transportInvisible')
    transportFour.classList.remove('transportVisible')

})

secondTransport.addEventListener('click', () => {
    transportTwo.classList.add('transportVisible')
    transportTwo.classList.remove('transportInvisible')

    transportOne.classList.add('transportInvisible')
    transportOne.classList.remove('transportVisible')

    transportThree.classList.add('transportInvisible')
    transportThree.classList.remove('transportVisible')

    transportFour.classList.add('transportInvisible')
    transportFour.classList.remove('transportVisible')

})

thirdTransport.addEventListener('click', () => {
    transportThree.classList.add('transportVisible')
    transportThree.classList.remove('transportInvisible')

    transportTwo.classList.add('transportInvisible')
    transportTwo.classList.remove('transportVisible')

    transportOne.classList.add('transportInvisible')
    transportOne.classList.remove('transportVisible')

    transportFour.classList.add('transportInvisible')
    transportFour.classList.remove('transportVisible')

})

fourthTransport.addEventListener('click', () => {
    transportFour.classList.add('transportVisible')
    transportFour.classList.remove('transportInvisible')

    transportTwo.classList.add('transportInvisible')
    transportTwo.classList.remove('transportVisible')

    transportThree.classList.add('transportInvisible')
    transportThree.classList.remove('transportVisible')

    transportOne.classList.add('transportInvisible')
    transportOne.classList.remove('transportVisible')

})

const openElements = document.querySelector('.choose');
const allPassionate = document.querySelectorAll(".passionate");
const allOpen = document.querySelectorAll(".opener");
const urls = [
    '/media/engineer.webp',
    '/media/plane.jpeg',
    '/media/ship.jpeg',
    '/media/warehouse.jpg'
];

const why = document.querySelector(".why");

document.addEventListener('DOMContentLoaded', () => {
    // Show the first passionate item on page load
    if (allPassionate.length > 0) {
        allPassionate[0].classList.add("visible2");
        allPassionate[0].classList.remove("invisible2");
    }

    // Also make sure the first opener is marked as 'normal'
    if (allOpen.length > 0) {
        allOpen[0].classList.add("normal");
    }

    // Optionally set the background image for the first item
    why.style.backgroundImage = `url("${urls[0]}")`;
});

openElements.addEventListener('click', function (e) {
    const clicked = e.target;
    if (clicked.classList.contains("opener")) {
        // Remove 'normal' class from all openers
        allOpen.forEach((elem) => elem.classList.remove("normal"));

        // Hide all passionate elements
        allPassionate.forEach((elem) => elem.classList.add("invisible2"));
        allPassionate.forEach((elem) => elem.classList.remove("visible2"));

        // Add 'normal' to clicked opener
        clicked.classList.add("normal");

        // Get the corresponding number from the clicked opener
        const newAppend = clicked.dataset.number;

        // Set the background image based on the selected opener
        why.style.backgroundImage = `url("${urls[+newAppend - 1]}")`;

        // Show the corresponding passionate element
        const visiblePassion = document.querySelector(`.passion${newAppend}`);
        if (visiblePassion) {
            visiblePassion.classList.add("visible2");
        }
    }
});



document.addEventListener("DOMContentLoaded", () => {
    const videoTrigger = document.querySelector(".videoPlay");
    const videoContainer = document.getElementById("videoContainer");
    const video = document.getElementById("video");
    const cancelButton = document.getElementById("cancelButton");

    videoTrigger.addEventListener("click", () => {
        if (window.innerWidth < 1000) {
            video.setAttribute("potrait", "")
            videoContainer.style.display = "flex";
            video.play()
        } else {
            video.setAttribute("potrait", "")
            videoContainer.style.display = "flex";
            video.play()
        }
    });

    cancelButton.addEventListener("click", () => {  
        video.pause()
        window.location.href = "#videos"
        videoContainer.style.display = "none"
    });

    video.addEventListener("ended", () => {
        videoContainer.style.display = "none";
        window.location.href = "#videos"
    })
})    

const refreshButton = document.querySelector(".submit")
const inputs = document.querySelectorAll(".inputed")

refreshButton.addEventListener('click', () => {
    inputs.forEach(input => {
        if (input.value.trim() !== "") {
            input.value = ""
        }
    })
})




window.onscroll = function () {
    var header = document.querySelector('.fixed');
    if (window.scrollY > 30) { 
        header.classList.add('sticky'); 
    } else {
        header.classList.remove('sticky'); 
    }

    const scrollToTop = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 500  || document.documentElement.scrollTop > 500 ) {
        scrollToTop.style.display = "block"
    } else {
        scrollToTop.style.display = "none"
    }
};

let scrollToTop = () => {
    window.scrollTo( {
        top: 0,
        behavior: "smooth"
    } );
};


    // import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
    const swiper = new Swiper('.swiper', {
        slidesPerView: 3, 
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
    