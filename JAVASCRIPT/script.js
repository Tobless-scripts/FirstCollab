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


document.addEventListener('DOMContentLoaded', () => {
    choose.classList.add('visible2')
    choose.classList.remove('invisible2')
})

const open1Elements = document.querySelectorAll('.open1');
const open2Elements = document.querySelectorAll('.open2');
const open3Elements = document.querySelectorAll('.open3');
const open4Elements = document.querySelectorAll('.open4');
const choose = document.querySelector('.choose');
const choose2 = document.querySelector('.choose2');
const choose3 = document.querySelector('.choose3');
const choose4 = document.querySelector('.choose4');

const chooseElements = [choose, choose2, choose3, choose4];
const openElements = [open1Elements, open2Elements, open3Elements, open4Elements];

// Function to initialize default state
function initializeDefaultState() {
    // Make the first 'choose' section visible and the first 'open' element normal
    chooseElements[0].classList.add('visible2');
    chooseElements[0].classList.remove('invisible2');
    openElements[0].forEach(openElement => openElement.classList.add('normal')); // Add 'normal' to all open1 items
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize default state when the page loads
    initializeDefaultState();

    // Loop through each open group and add event listeners
    openElements.forEach((openElementGroup, index) => {
        openElementGroup.forEach(openElement => {
            openElement.addEventListener('click', () => {
                // Hide all 'choose' elements first
                chooseElements.forEach((chooseElement, i) => {
                    if (i === index) {
                        // Show the corresponding 'choose' element
                        chooseElement.classList.add('visible2');
                        chooseElement.classList.remove('invisible2');
                        openElements[0].forEach(openElement => openElement.classList.remove('normal')); // Add 'normal' to all open1 items
                    } else {
                        // Hide the other 'choose' elements
                        chooseElement.classList.add('invisible2');
                        chooseElement.classList.remove('visible2');
                    }
                });

                // Remove the 'normal' class from all items in the group
                openElementGroup.forEach(item => item.classList.remove('normal'));
                // Add the 'normal' class to the clicked item
                openElement.classList.add('normal');
            });
        });
    });
});
