/* TO DO LIST 
1. Campo input per scrivere una nuova attività
2. Pulsante "Aggiungi"
3. Lista dinamica con:
    a. Checkbox per segnare l’attività come fatta
    b. Pulsante per eliminare la singola attività
4. Salvataggio delle attività in localStorage:
    a. Salvarer i task ogni volta che vengono aggiunti o rimossi
    b. Caricarli automaticamente all'avvio della pagina */

const $taskInput = document.getElementById("taskInput");
const $addTaskBtn = document.querySelector("#addTaskBtn");
const $taskBody = document.querySelector("#taskBody");
const $taskHead = document.getElementById("taskHead");

let tasks = [];
let currentFilter = "all";

// Funzioni per salvataggio/caricamento
const saveTasks = () => {
    localStorage.setItem("task", JSON.stringify(tasks));
};

const loadTasks = () => {
    const saved = localStorage.getItem("task");
    if (saved) {
        tasks = JSON.parse(saved);
        tasks.forEach(task => {
            renderTask(task);
        });
        applyFilter();
    }
};

// Funzione che mostra o nasconde l’intestazione
const updateHeaderVisibility = () => {
    const hasTasks = $taskBody.children.length > 0;
    $taskHead.style.display = hasTasks ? "table-header-group" : "none";
};
updateHeaderVisibility(); // Nasconde l'intestazione all'avvio se non ci sono task

// Funzione che renderizza una riga
const renderTask = (task) => {
    const $row = document.createElement("tr");
    $row.setAttribute("draggable", "true");
    $row.classList.add("draggable-row");
    $row.dataset.index = tasks.indexOf(task);

    // Colonna icona drag
    const $dragCell = document.createElement("td");
    $dragCell.classList.add("drag-handle");
    $dragCell.textContent = "☰";
    $dragCell.title = "Trascina per spostare";

    // Colonna checkbox
    const $checkCell = document.createElement("td");
    const $checkbox = document.createElement("input");
    $checkbox.type = "checkbox";
    $checkbox.checked = task.done;

    // Colonna testo attività
    const $textCell = document.createElement("td");
    $textCell.textContent = task.text;
    if (task.done) $textCell.classList.add("completed");

    $checkbox.addEventListener("change", () => {
        task.done = $checkbox.checked;
        $textCell.classList.toggle("completed");
        saveTasks();
    });
    $checkCell.appendChild($checkbox);

    // Colonna azioni
    const $actionCell = document.createElement("td");
    const $deleteBtn = document.createElement("button");
    $deleteBtn.textContent = "🗑️";
    $deleteBtn.addEventListener("click", () => {
        const conferma = confirm("Sei sicuro di voler eliminare questa attività?");
        if (!conferma) return;

        $row.remove();
        tasks = tasks.filter(t => t !== task); // rimuovi dal modello
        saveTasks();
        updateHeaderVisibility();
    });
    $actionCell.appendChild($deleteBtn);

    // Componi riga
    $row.appendChild($dragCell);
    $row.appendChild($checkCell);
    $row.appendChild($textCell);
    $row.appendChild($actionCell);
    $taskBody.appendChild($row);

    updateHeaderVisibility();
};

// Funzione che aggiunge un task
const addTask = () => {
    const text = $taskInput.value.trim(); // .trim() → rimuove gli spazi all’inizio e alla fine della stringa.
    if (text === "") return; // Verifica se la variabile text è una stringa vuota (""). Se sì, la funzione si interrompe subito con return, cioè non aggiunge nulla alla lista

    const newTask = { text, done: false };
    tasks.push(newTask);
    saveTasks();
    renderTask(newTask);

    $taskInput.value = "";
};

// Listener per il pulsante "Aggiungi"
$addTaskBtn.addEventListener("click", () => {
    addTask();
});

// Listner per i filtri
document.querySelectorAll("#filters button").forEach((btn) => {
    btn.addEventListener("click", () => {
        // cambia stato filtro
        currentFilter = btn.dataset.filter;

        // aggiorna stile attivo
        document.querySelectorAll("#filters button").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // applica il filtro
        applyFilter();
    });
});

// Imposta "Tutte" come attivo al primo avvio
document.querySelector('#filters button[data-filter="all"]')?.classList.add("active");

// Funzione per applicare il filtro
const applyFilter = () => {
    const rows = $taskBody.querySelectorAll("tr");

    rows.forEach((row) => {
        const checkbox = row.querySelector("input[type='checkbox']");
        const isDone = checkbox.checked;

        const show =
            currentFilter === "all" ||
            (currentFilter === "active" && !isDone) ||
            (currentFilter === "completed" && isDone);

        row.style.display = show ? "" : "none";
    });
};

// Gestione eventi drag & drop
let draggedRow = null;

$taskBody.addEventListener("dragstart", (e) => {
    draggedRow = e.target;
    draggedRow.classList.add("dragging");
});

$taskBody.addEventListener("dragover", (e) => {
    e.preventDefault();
    const targetRow = e.target.closest("tr");
    if (!targetRow || targetRow === draggedRow) return;

    const bounding = targetRow.getBoundingClientRect();
    const offset = e.clientY - bounding.top;
    const after = offset > bounding.height / 2;

    if (after) {
        targetRow.after(draggedRow);
    } else {
        targetRow.before(draggedRow);
    }
});

$taskBody.addEventListener("dragend", () => {
    draggedRow.classList.remove("dragging");
    draggedRow = null;
    updateTaskOrder(); // 🔁 salva nuovo ordine
});

// Funzione per aggiornare lo stato e salvare
const updateTaskOrder = () => {
    const newOrder = [];
    const rows = $taskBody.querySelectorAll("tr");
    rows.forEach(row => {
        const text = row.querySelector("td:nth-child(2)").textContent;
        const checkbox = row.querySelector("input[type='checkbox']");
        newOrder.push({ text, done: checkbox.checked });
    });
    tasks = newOrder;
    saveTasks();
};

loadTasks();