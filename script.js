const bookmarkingMenu = document.querySelector("#bookmarking");
const searchingMenu = document.querySelector("#searching");
const sharingMenu = document.querySelector("#sharing");


const borderFeatures = document.querySelector(".border-menu-list");

const bookmarkingContent = document.querySelector("#bookmark-content");
const searchingContent = document.querySelector("#intelligent-content");
const sharingContent = document.querySelector("#share-content");

bookmarkingMenu.addEventListener("click", function (e) {
    e.preventDefault();
    borderFeatures.classList.add("bookmarking-border");
    borderFeatures.classList.remove("speddy-border");
    borderFeatures.classList.remove("easy-sharing-border");

    bookmarkingContent.classList.add("features-content-active");
    searchingContent.classList.remove("features-content-active");
    sharingContent.classList.remove("features-content-active");
});

searchingMenu.addEventListener("click", function (e) {
    e.preventDefault();
    borderFeatures.classList.add("speddy-border");
    borderFeatures.classList.remove("bookmarking-border");
    borderFeatures.classList.remove("easy-sharing-border");

    searchingContent.classList.add("features-content-active");
    bookmarkingContent.classList.remove("features-content-active");
    sharingContent.classList.remove("features-content-active");
});

sharingMenu.addEventListener("click", function (e) {
    e.preventDefault();
    borderFeatures.classList.add("easy-sharing-border");
    borderFeatures.classList.remove("speddy-border");
    borderFeatures.classList.remove("bookmarking-border");

    sharingContent.classList.add("features-content-active");
    bookmarkingContent.classList.remove("features-content-active");
    searchingContent.classList.remove("features-content-active");
});


const featuresContents = document.querySelectorAll(".features-content");



const email = document.querySelector(".email-content");
const contact = document.querySelector(".email-btn");


contact.addEventListener("click", function () {



    ValidateEmail(email);

});



function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)) {
        return (true)
    }
    email.setAttribute("placeholder", "Whoops,make sure it's an email");

    email.classList.add("active-input");
    email.value = "";
    setTimeout(() => {
        email.setAttribute("placeholder", "Enter your email address");
        contact.classList.toggle("active-btn");
        email.classList.remove("active-input");
    }, 1000);
    return (false)
}


const pushButtons = document.querySelectorAll(".arrow-btn");
const item = document.querySelectorAll(".question");
const itemContents = document.querySelectorAll(".answer");





for (pushButton of pushButtons) {

    pushButton.addEventListener("click", function (e) {
        console.log(pushButton);
        let push = e.target;
        let itemContent = push.parentElement.nextElementSibling;

        console.log(itemContent);
        if (itemContent.classList.contains("show")) {
            console.log("var");
            itemContent.classList.toggle("show");
        }
        else {
            console.log("yok");
            itemContents.forEach(itemContent => {
                itemContent.classList.remove("show");
            });
            itemContent.classList.add("show");
        }

    });
}


const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");

const menuList = document.querySelector(".menu-list");
const darkBgMobile = document.querySelector(".dark-bg-mobile");

hamburgerIcon.addEventListener("click", function () {
    menuList.classList.add("menu-mobile-active");
    darkBgMobile.classList.add("dark-bg-mobile-active");
});

closeIcon.addEventListener("click", function () {
    menuList.classList.remove("menu-mobile-active");
    darkBgMobile.classList.remove("dark-bg-mobile-active");
});







