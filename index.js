const inputBox = document.getElementById("tests");
const list = document.getElementById("list");

function addTask() {
    if (inputBox.value === '') {
        alert("Write something before clicking add!!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        li.addEventListener("click", removeTask);
        list.appendChild(li);
        inputBox.value = '';
        saveData();
    }
}

function removeTask(event) {
    event.target.style.display = 'none';
    saveData();
}

function saveData() {
    localStorage.setItem("data", list.innerHTML);
}

function showTask() {
    if (localStorage.getItem("data")) {
        list.innerHTML = localStorage.getItem("data");
        let items = list.getElementsByTagName("li");
        for (let item of items) {
            item.addEventListener("click", removeTask);
        }
    }
}
showTask()
