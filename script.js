console.log("Script is running successfully");


function handleShowMore(buttons, values, textElement, imageElement) {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (values.style.display === "block") {
                imageElement.style.transform = "rotate(0deg)";
                values.style.display = "none";
                values.style.overflow = "hidden";
                values.style.opacity = "0";
                values.style.height = "0";
                textElement.innerHTML = "Show More";
            } else {
                imageElement.style.transform = "rotate(180deg)";
                values.style.display = "block";
                values.style.overflow = "visible";
                values.style.opacity = "100%";
                values.style.height = "auto";
                textElement.innerHTML = "Show Less";
            }
        });
    });
}

// Usage for the first set of elements
const showMoreButtons = document.querySelectorAll(".show-more");
const showMoreValues = document.querySelector(".show-more-items");
const showMoreText = document.querySelector(".Show-more-text");
const showMoreImage = document.querySelector(".show-more .menu-image img");

handleShowMore(showMoreButtons, showMoreValues, showMoreText, showMoreImage);

// Usage for the second set of elements
const showMoreButtons2 = document.querySelectorAll(".show-more-2");
const showMoreValues2 = document.querySelector(".show-more-items-2");
const showMoreText2 = document.querySelector(".Show-more-text-2");
const showMoreImage2 = document.querySelector(".show-more-2 .menu-image img");

handleShowMore(showMoreButtons2, showMoreValues2, showMoreText2, showMoreImage2);


// COODE FOR LEFT MENU SCROLL Y AXIS
const scrollContainer = document.querySelectorAll('.left-main');
for (const item of scrollContainer) {
    item.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        item.scrollTop += evt.deltaY;
    });
}


// Code ofr for Hamburger 
const hamburger = document.querySelector(".hamburger");
const leftMenuDecreases = document.querySelector(".left-main");
const RightMainIncreases = document.querySelector(".right-main");
const ShowMoreOff = document.querySelector(".show-more")
const ShowMoreOff2 = document.querySelector(".show-more-2")

hamburger.addEventListener('click', () => {
    leftMenuDecreases.classList.toggle("left-menu-decreased")
    RightMainIncreases.classList.toggle("RightMainIncreases")
    ShowMoreOff.classList.toggle("ShowMoreOff")
    ShowMoreOff2.classList.toggle("ShowMoreOff2")
})