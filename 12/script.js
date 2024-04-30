const toDoItems = document.getElementsByClassName('to-do-items')[0];
const input = document.getElementById('input');
const trashIcon = document.getElementById('trash');

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter")
        addItem();

})

function addItem() {
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var checkIcon = document.createElement("i");
    var trashIcon = document.createElement("i");

    divParent.className = "items";
    divParent.innerHTML = '<div>' + input.value + '</div>';

    checkIcon.className = "fas fa-check-square"
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener("click", function () {
        checkIcon.style.color = "white";
    })

    divChild.appendChild(checkIcon);

    trashIcon.className = "fas fa-trash";
    trashIcon.style.color = "darkgrey";
    trashIcon.addEventListener("click", function () {
        //trashIcon.style.color = "red" (colocar timer pra clicar em vermelho antes de excluir)
        divParent.remove();
    })

    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);

    item.appendChild(text);
    item.appendChild(div);

    document.querySelector("#to_do_list").appendChild(item);
    document.querySelector("#input").value = "";

    input.value = ''
}