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