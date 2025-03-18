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
}

const init = async () => {
    await fetchData();
    render();
}

init();