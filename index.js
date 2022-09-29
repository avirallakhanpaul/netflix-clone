// Accordian FAQ Section
const accordianBtns = document.querySelectorAll(".accordian");
const panels = document.querySelectorAll(".panel");
const expandIcons = document.querySelectorAll(".accordian>i");

// Submit Button
const submitButtons = document.querySelectorAll(".email-form > a");

accordianBtns.forEach(function (e, index) {
    e.addEventListener("click", function () {

        // Closing all already open panels
        panels.forEach(function (e, i) {
            expandIcons[i].style.transform = "rotate(0deg)";
            if (i != index) {
                e.style.display = "none";
            }
        });

        // Opening the selected panel
        const panel = this.nextElementSibling;

        if (panel.style.display == "block") {
            // Rotating the expand icon back to 0deg
            expandIcons[index].style.transform = "rotate(0deg)";
            panel.style.display = "none";
        } else {
            // Rotating the expand icon to 45deg to look like "close" button
            expandIcons[index].style.transform = "rotate(45deg)";
            panel.style.display = "block";
        }
    });
});

// SM Screen Media Query
const smMediaQuery = window.matchMedia("(max-width: 992px)");

const handleSmallScreenChange = (e) => {

    // Removing btn-xl class from button for SM screens
    if (e.matches) {
        console.log("Screen size b/w 768 and 992px");
        submitButtons.forEach((ele, index) => {
            ele.classList.remove("btn-xl");
            ele.classList.add("btn-rounded");
        });
    } else {
        submitButtons.forEach((ele, index) => {
            ele.classList.add("btn-xl");
            ele.classList.remove("btn-rounded");
        });
    }
}

smMediaQuery.addEventListener("change", () => handleSmallScreenChange(smMediaQuery));

// Calling mediaQuery EventListener for the first time
handleSmallScreenChange(smMediaQuery);