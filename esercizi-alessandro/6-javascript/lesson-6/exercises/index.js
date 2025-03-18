/**
 * Scrivere un algoritmo che ci permette di prendere i dati da una chiamata server
 * per poi renderizzarli in pagina all'interno di una tabella
 * 
 * 1. [x] Strutturare l'HTML di base -> tabel > thead + tbody (qui renderizziamo i dati)
 * 2. [x] Selezioniamo l'HTML con cui andremo a lavorare
 * 3. [x] Gestire la base dati (state) per salvare il risultato della request
 * 4. [x] Funzione che permette di ottenere i dati dal server e li salva nello state
 * 5. [?] Funzione che formatta i dati (se necessario?)
 * 6. [x] Funzione che renderizza i dati nella tabella (separare la funzione di generazione HTML?)
 * 7. [x] Funzione che mi permette di inizializzare l'algoritmo e la eseguo
 */

const API_URL = "https://jsonplaceholder.typicode.com/comments";

const $table_data = document.querySelector("#table-data");
const $prevBtn = document.querySelector("#prev");
const $pageSpan = document.querySelector("#page");
const $nextBtn = document.querySelector("#next");

const state = {
    data: null,
    cache: null,
    pagination: {
        page: 1,
        limit: 10,
        totalPages: 1,
        hasPrevPage: false,
        hasNextPage: false,
    }
}

const fetchData = async () => {
    try {
        const response = await fetch(API_URL);
        
        if (response.ok) {
            state.cache = await response.json();
        } else {
            throw new Error("Internal Server Error");
        }
    } catch (error) {
        console.log(error);
    }
}

const paginateData = () => {
    const startIndex = state.pagination.limit * (state.pagination.page - 1);
    state.pagination.totalPages = Math.ceil(state.cache.length / state.pagination.limit);
    state.data = [...state.cache].splice(startIndex, state.pagination.limit);
    state.pagination.hasPrevPage = state.pagination.page > 1;
    state.pagination.hasNextPage = state.pagination.page < state.pagination.totalPages;
}

const renderPagination = () => {
    $pageSpan.innerHTML = `${state.pagination.page} / ${state.pagination.totalPages}`;

    if (state.pagination.hasPrevPage) {
        $prevBtn.removeAttribute("disabled");
    } else {
        $prevBtn.setAttribute("disabled", true);
    }

    if (state.pagination.hasNextPage) {
        $nextBtn.removeAttribute("disabled");
    } else {
        $nextBtn.setAttribute("disabled", true);
    }
}

const render = () => {
    const HTML = state.data.map((item) => {
        return `
        <tr>
            <td>${item.postId}</td>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.body}</td>
        </tr>
        `;
    }).join("");

    $table_data.innerHTML = HTML;

    renderPagination();
}

const manageListeners = () => {
    $prevBtn.addEventListener("click", () => {
        state.pagination.page -= 1;

        paginateData();
        render();
    });
    
    $nextBtn.addEventListener("click", () => {
        state.pagination.page += 1;

        paginateData();
        render();
    });
}

const mount = async () => {
    await fetchData();
    paginateData();
    render();
    manageListeners();
}

const init = async () => {
    mount();
}

init();