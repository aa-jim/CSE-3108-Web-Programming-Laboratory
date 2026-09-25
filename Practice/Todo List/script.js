const input = document.getElementById("taskText");
const addBtn = document.getElementById("addBtn");
const listContainer = document.getElementById("taskList");

function addTask() {
    const taskValue = input.value.trim();

    if (taskValue === "") {
        alert("Please write something first!");
        return;
    }

    const newLi = document.createElement("li");
    newLi.innerHTML = `
        <span>${taskValue}</span>
        <button class="delete-btn">?</button>
    `;

    listContainer.appendChild(newLi);
    input.value = "";
    input.focus();

    // Toggle completion status
    newLi.querySelector("span").onclick = function() {
        this.classList.toggle("checked");
    };

    // Delete task
    newLi.querySelector(".delete-btn").onclick = function() {
        newLi.remove();
    };
}

addBtn.addEventListener("click", addTask);

input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});
