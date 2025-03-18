const API_URL = "https://jsonplaceholder.typicode.com/todos";

const $cardData = document.querySelector("#card-data");

const state = {
    data: null,
}

const fetchData = async () => {
    try {
        const response = await fetch(API_URL);
        
        if (response.ok) {
            state.data = await response.json();
        } else {
            throw new Error("Internal Server Error");
        }
    } catch (error) {
        console.log(error);
    }
}

const render = () => {
    const HTML = state.data.map((item) => {
        return `
        <div class="card ${item.completed ? 'completed' : 'not-completed'}">
            <p><strong>User ID:</strong> ${item.userId}</p>
            <p><strong>ID:</strong> ${item.id}</p>
            <h2>${item.title}</h2>
            <p><strong>Status:</strong> ${item.completed ? 'Completed' : 'Not Completed'}</p>
        </div>
        `;
    }).join("");

    $cardData.innerHTML = HTML;
}

const init = async () => {
    await fetchData();
    render();
}

init();