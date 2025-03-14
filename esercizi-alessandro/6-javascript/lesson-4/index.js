//LAVORO SULLO STATE E INTERAZIONE CON LA PAGINA (DOM)
//Bottone contatore

const $performBtn = document.querySelector("#perform");
const $counterSpan = document.querySelector("#counter");
const $resetBtn = document.querySelector("#reset");
const $operationSelect = document.querySelector("#operation");
const $numberInput = document.querySelector("#number");

const state = {
    counter: 0,
    activeOperation: $operationSelect.value,
    number: Number($numberInput.value),
};

const resetCounter = () => {
    state.counter = 0;
}

const resetNumber = () => {
    state.number = 1;
    $numberInput.value = 1;
}

const resetOperation = () => {
    state.activeOperation = "INCREMENT";
    $operationSelect.value = "INCREMENT";
}

const operations = {
    INCREMENT: () => {
        state.counter += state.number; // state.counter = atate.counter + 1
    },
    DECREMENT: () => {
        state.counter -= state.number; // state.counter = atate.counter - 1
    },
};

const renderCounter = () => {
    $counterSpan.innerHTML = state.counter;
};

const manageListners = () => {
    $operationSelect.addEventListener("change", (event) => {
        state.activeOperation = event.target.value;
    });
    $numberInput.addEventListener("input", (event) => {
        state.number = Number(event.target.value);
    })
    $performBtn.addEventListener("click", () => {
        operations[state.activeOperation]();
        renderCounter();
    });
    $resetBtn.addEventListener("click", () => {
        resetCounter();
        resetNumber();
        resetOperation();
        renderCounter();
    })
};

const mount = () => {
    renderCounter();
    manageListners();
};

const init = () => {
    mount();
};

init();