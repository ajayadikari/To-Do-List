const formEl = document.querySelector("form");
const inputEL = document.querySelector("input");
formEl.addEventListener("submit", (event)=>{
    event.preventDefault();
    addTask();
})
function addTask(){
    const ulEL = document.querySelector("ul");
    const liEl = document.createElement("li");
    const pEl = document.createElement("p");
    pEl.innerHTML = `${inputEL.value}`;
    pEl.classList.add("font");
    liEl.appendChild(pEl);
    const ele = document.createElement("div");
    const ele1 = document.createElement("div");
    const ele2 = document.createElement("div");
    ele1.innerHTML = `<i class="fa-solid fa-square-check"></i>`
    ele2.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    ele1.classList.add("checkBox");
    ele2.classList.add("trash");
    ele1.addEventListener("click", ()=>{
        ele1.classList.toggle("checked");
        pEl.classList.toggle("checked");
    })
    ele.appendChild(ele1);
    ele.appendChild(ele2);
    ele.classList.add("ops");
    // ele.style.display = "flex";
    liEl.append(ele);
    ele2.addEventListener("click", ()=>{
        liEl.remove();
    })
    // liEl.append(ele2);
    ulEL.appendChild(liEl);
    inputEL.value = "";
}