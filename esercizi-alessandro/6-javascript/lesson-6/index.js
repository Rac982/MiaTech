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

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const $tableData = document.querySelector("#table-data");
const $prevBtn = document.querySelector("#prev");
const $pageSpan = document.querySelector("#page");
const $nextBtn = document.querySelector("#next");
const $limitSelect = document.querySelector("#limit");
const $sortSelect = document.querySelector("#sort");

const state = {
    data: null, // Copia di rendering
    cache: null, // Copia di cache
    pagination: {
        page: 1, // Pagina corrente
        limit: 10, // MAX Elementi per pagina
        totalPages: 1, // Totale delle pagine in base al limit e al numero di elementi
        hasPrevPage: false, // Ci sono pagine precedenti?
        hasNextPage: false, // Ci sono èagine successive?
    },
    sorting: {
        by: "id",
        mode: "DESC",
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

const sortData = () => {
    state.cache.sort((a, b) => {
        if (typeof a[state.sorting.by] === "string") {
            if (state.sorting.mode === "ASC") {
                return a[state.sorting.by].localeCompare(b[state.sorting.by]);
            } else {
                return b[state.sorting.by].localeCompare(a[state.sorting.by]);
            }
        } else {
            if (state.sorting.mode === "ASC") {
                return a[state.sorting.by] - b[state.sorting.by];
            } else {
                return b[state.sorting.by] - a[state.sorting.by];
            }
        }
    });
}

const paginateData = () => {
    const startIndex = state.pagination.limit * (state.pagination.page - 1);
    state.pagination.totalPages = Math.ceil(state.cache.length / state.pagination.limit); // 101 / 10 -> 11
    state.data = [...state.cache].splice(startIndex, state.pagination.limit);
    state.pagination.hasPrevPage = state.pagination.page > 1;
    state.pagination.hasNextPage = state.pagination.page < state.pagination.totalPages;
}

const renderSorting = () => {
    $sortSelect.value = `${state.sorting.by}-${state.sorting.mode}`;
}

const renderPagination = () => {
    $pageSpan.innerHTML = `${state.pagination.page} / ${state.pagination.totalPages}`;
    $limitSelect.value = state.pagination.limit == state.cache.length ? "*" : state.pagination.limit;

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
            <td>${item.id}</td>
            <td>${item.userId}</td>
            <td>${item.title}</td>
            <td>${item.body}</td>
        </tr>
        `;
    }).join("");

    $tableData.innerHTML = HTML;

    renderSorting();
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

    $limitSelect.addEventListener("change", (event) => {
        state.pagination.limit = event.target.value !== "*" ? Number(event.target.value) : state.cache.length;
        state.pagination.page = 1;

        paginateData();
        render();
    });

    $sortSelect.addEventListener("change", (event) => {
        const [by, mode] = event.target.value.split("-"); // id-ASC -> ["id", "ASC"]
        state.sorting.by = by;
        state.sorting.mode = mode;

        sortData();
        paginateData();
        render();
    });
}

const mount = async () => {
    await fetchData();
    sortData();
    paginateData();
    render();
    manageListeners();
}

const init = async () => {
    mount();
}

init();