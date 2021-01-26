const linkName = document.querySelector(".link-name");
const nameInput = document.querySelector(".name-input");

function setName(nameChange){
    linkName.innerText = "Welcome, ";
    let nameInner = document.createElement("span");
    nameInner.innerText = nameChange;
    nameInner.setAttribute("class", "name");
    linkName.appendChild(nameInner);
    return nameInner;
}

nameInput.addEventListener("change", () => {
    setName(nameInput.value);
})