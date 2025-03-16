/* GIARDINO VIRTUALE
Obiettivo:
- Cliccando in un'area, comparirà un fiore in quella posizione.
- Ogni fiore sarà generato con una posizione casuale vicino al punto del click.
- Cliccando su un fiore, questo sparirà.
- Un pulsante permetterà di sparpagliare i fiori.

1. Riconoscere il click nell'area giardino
1.a Quando l'utente clicca nell'area verde (.garden), dobbiamo rilevare le coordinate del click
1.b Verificare che il click non avvenga su un fiore già esistente
2. Creare un nuovo fiore
2.a Generare un nuovo elemento (img) che rappresenta il fiore
2.b Posizionarlo vicino al punto del click con una leggera variazione casuale
2.c Aggiungere il fiore nel DOM
3. Gestire la rimozione del fiore
3.a Se l'utente clicca su un fiore, il fiore deve sparire
4. Sparpagliare i fiori
4.a Quando si clicca il pulsante "Sparpaglia i fiori", tutti i fiori già presenti devono spostarsi casualmente all'interno dell'area */

const $garden = document.querySelector("#garden");
const $scatterBtn = document.querySelector("#scatter");

// Funzione per creare un fiore
function createFlower(x,y) {
    const flower = document.createElement("img");
    flower.src = "https://purepng.com/public/uploads/large/purepng.com-blossom-flowerflowerpinkblossom-flowerobjects-911524569353g8kpf.png"
    flower.classList.add("flower");

    // Posiziona il fiore vicino al click con una leggera variazione
    const offsetX = Math.random() * 40 - 20 // Da -20px a +20px
    const offsetY = Math.random() * 40 - 20;

    flower.style.position = "absolute";
    flower.style.left = `${x + offsetX}px`;
    flower.style.top = `${y + offsetY}px`;
    flower.style.width = "50px"; // Imposta una dimensione per il fiore
    flower.style.cursor = "pointer";

    // Rimuovi il fiore al click
    flower.addEventListener("click", () => {
        flower.remove();
    });

    $garden.appendChild(flower);
}

const manageListner = () => {
    // Aggiunge fiori cliccando nel giardino
    $garden.addEventListener("click", (event) => {
        if(event.target === $garden) { // Evita di aggiungere un fiore se si clicca su un altro fiore
            const x = event.clientX - garden.offsetLeft;
            const y = event.clientY - garden.offsetTop;
            createFlower(x, y);
        }
    });

    // Sparpaglia i fiori
    $scatterBtn.addEventListener("click", () => {
        const flowers = document.querySelectorAll(".flower");
        flowers.forEach(flower => {
            const newX = Math.max(0, Math.random() * ($garden.clientWidth - 50));
            const newY = Math.max(0, Math.random() * ($garden.clientHeight - 50));
            flower.style.left = `${newX}px`;
            flower.style.top = `${newY}px`;
            flower.style.transform = `rotate(${Math.random() * 360}deg)`;
        })
    })
}

manageListner();