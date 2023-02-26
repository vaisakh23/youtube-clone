var menuIcon = document.querySelector(".nav-left .material-icons");
var sideBar = document.getElementsByTagName("aside")[0];
var mainContainer = document.getElementsByTagName("main")[0];

menuIcon.onclick = function(){
    sideBar.classList.toggle("small-sidebar");
    mainContainer.classList.toggle("large-main");
}
