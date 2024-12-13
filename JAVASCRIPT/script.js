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

