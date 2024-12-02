let plusIcon = document.getElementsByClassName("icon-open");
let itemDiv = document.getElementsByClassName("accordion-languages");

for (let i = 0; i < itemDiv.length; i++) {
    itemDiv[i].addEventListener("click", () => {
        const toggle = itemDiv[i].classList.toggle("active");
        if (toggle) {
            plusIcon[i].classList.add("rotate");
        }
        else {
            plusIcon[i].classList.remove("rotate");
        }
    })
}
