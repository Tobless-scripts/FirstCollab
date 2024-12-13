function showSideBar() {
    const sidebar = document.querySelector('.container');
    sidebar.style.display = "flex";
}

function hideSideBar() {
    const sidebar = document.querySelector('.container');
    sidebar.style.display = "none";
    document.querySelector('.content').classList.remove('blurred'); 
}


window.onscroll = function () {
    var header = document.querySelector('.fixed');
    if (window.scrollY > 30) { 
        header.classList.add('sticky'); 
    } else {
        header.classList.remove('sticky'); 
    }

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
    }

    activeDivs.forEach(div => {
        div.addEventListener('click', () => {
            // Resetting brightness for all elements
            activeDivs.forEach(d => {
                d.style.setProperty('--pseudo-brightness', 'brightness(0.1)');
            });

            // Highlight the clicked element
            div.style.setProperty('--pseudo-brightness', 'brightness(0.7)');
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



