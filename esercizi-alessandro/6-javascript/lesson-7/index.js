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

const API_URL = "https://jsonplaceholder.typicode.com/todos";

const $tableData = document.querySelector("#table-data");
const $prevBtn = document.querySelector("#prev");
const $pageSpan = document.querySelector("#page");
const $nextBtn = document.querySelector("#next");
const $limitSelect = document.querySelector("#limit");
const $sortSelect = document.querySelector("#sort");
const $filterSelect = document.querySelector("#filter");
const $searchInput = document.querySelector("#search");
const $deleteBtn = document.querySelectorAll(".delete-row");

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
  },
  filtering: {
    by: null,
    value: "*",
  },
  searching: {
    query: null,
  },
  updateMode: {
    active: false,
    dataId: null,
  }
};

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
};

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
};

const paginateData = () => {
  let filteredData =
    state.filtering.by == null
      ? [...state.cache]
      : [...state.cache].filter(
          (item) => item[state.filtering.by] == state.filtering.value
        );

  if (state.searching.query !== null) {
    filteredData = filteredData.filter(
      (item) =>
        item.id.toString().match(new RegExp(state.searching.query, "ig")) || //insensitive, global
        item.userId.toString().match(new RegExp(state.searching.query, "ig")) ||
        item.title.toString().match(new RegExp(state.searching.query, "ig"))
    );
  }
  const startIndex = state.pagination.limit * (state.pagination.page - 1);
  state.pagination.totalPages = Math.ceil(
    filteredData.length / state.pagination.limit
  ); // 101 / 10 -> 11
  state.data = filteredData.splice(startIndex, state.pagination.limit);
  state.pagination.hasPrevPage = state.pagination.page > 1;
  state.pagination.hasNextPage =
    state.pagination.page < state.pagination.totalPages;
};

const renderSorting = () => {
  $sortSelect.value = `${state.sorting.by}-${state.sorting.mode}`;
};

const renderPagination = () => {
  $pageSpan.innerHTML = `${state.pagination.page} / ${state.pagination.totalPages}`;
  $limitSelect.value =
    state.pagination.limit == state.cache.length ? "*" : state.pagination.limit;

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
};

const render = () => {
  const HTML = state.data
    .map((item) => {
      return `
        <tr id="tr-${item.id}">
            <td>${item.id}</td>
            <td>${item.userId}</td>
            <td class="td-title">${item.title}</td>
            <td class="td-completed">${item.completed ? "completed" : "not completed"}</td>
            <td class="td-action">
                <button data-id="${item.id}" class="delete-row">Delete</button>
                <button data-id="${item.id}" class="modify-row">Modify</button>
            </td>
        </tr>
        `;
    })
    .join("");

  $tableData.innerHTML = HTML;

  renderSorting();
  renderPagination();
};

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
    state.pagination.limit =
      event.target.value !== "*"
        ? Number(event.target.value)
        : state.cache.length;
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

  $filterSelect.addEventListener("change", (event) => {
    const [by, value] =
      event.target.value == "*" ? [null, "*"] : event.target.value.split("-");

    state.filtering.by = by;
    state.filtering.value = JSON.parse(value);

    sortData();
    paginateData();
    render();
  });

  $searchInput.addEventListener("input", (event) => {
    state.searching.query =
      event.target.value == "" ? null : event.target.value;

    sortData();
    paginateData();
    render();
  });

  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-row") && confirm(`Are you sure you want delate item with id ${event.target.dataset.id}?`)){
        const id = Number(event.target.dataset.id);
        state.cache = state.cache.filter((item) => item.id != id);

        sortData();
        paginateData();
        render();
    } else if(event.target.classList.contains("modify-row")) {
        if (state.updateMode.active){
            alert(`error: update mode already active`);
            return;
        }
        const id = Number(event.target.dataset.id);
        const data = state.cache.find((item) => item.id == id);
        state.updateMode.active = true;
        state.updateMode.dataId = id;
        const $tr = document.querySelector(`#tr-${id}`);
       
        $tr.querySelector(".td-title").innerHTML = `<input type="text" value="${data.title}"/>`;
        $tr.querySelector(".td-completed").innerHTML = `<select value="${data.completed}">
        <option value="true" ${data.completed ? "selected" : ""}>Completed</option>
        <option value="false" ${!data.completed ? "selected" : ""}>Not completed</option>
        </select>`;

        const $btn = $tr.querySelector(".td-action > button.modify-row");
        $btn.classList.remove("modify-row");
        $btn.classList.add("save-row");
        $btn.innerHTML = "Save";

        $tr.querySelector(".td-action > button.delete-row").setAttribute("disabled", true);

    } else if (event.target.classList.contains("save-row")) {
        const $tr = document.querySelector(`#tr-${state.updateMode.dataId}`);
        const title = $tr.querySelector(".td-title > input") ?.value;
        const completed = JSON.parse($tr.querySelector(".td-completed > select") ?.value);

        const dataIndex = state.cache.findIndex((item) => item.id == state.updateMode.dataId);

        state.cache[dataIndex] = {
            ...state.cache[dataIndex],
            title,
            completed,
        }

        state.updateMode.active = false;
        state.updateMode.dataId = null;

        sortData();
        paginateData();
        render();
    };
  });
};

const mount = async () => {
  await fetchData();
  sortData();
  paginateData();
  render();
  manageListeners();
};

const init = async () => {
  mount();
};

init();