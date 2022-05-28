const gridContainer = document.getElementById("grid-container");

function gridGen(num1, num2){

    let num = 0;

    for (let i = 0; i < (num1 * num2); i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = `calc(100% / ${num1})`;
        cell.style.aspectRatio = `1 / 1`;
        gridContainer.append(cell);
        num = i + 1;
        cell.innerHTML = `<p>${num}</p>`;
        cell.addEventListener('click', function(){
            this.classList.add("bg-info");
        });
    }
}

const difficolta = document.getElementById('difficolta').value;

document.getElementById("genera").addEventListener('click', function(){
    if (difficolta == '1'){
        gridGen(10,10);
    } else if (difficolta == '2'){
        gridGen(9, 9);
    } else {
        gridGen(7, 7);
    }
});