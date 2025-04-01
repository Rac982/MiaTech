/**
 * Creiamo un sistema carrello dove sulla sinistra abbiamo un elnco di prodotti
 * sotto forma di card, max 3 card per riga, il box prende i 2/3 dello spazio.
 * A destra troviamo il box del carrello che deve contenere l'elenco dei prodotti nel carrello,
 * relativa quantità e prezzo (prezzo unitario x qnt).
 * In basso ci deve essere il totale di tutto il carrello.
 * 
 * 1. [x] Strutturiamo l'HTML (box che contiene le card, box che contiene il carrello >> da gestire dinamicamente).
 * 2. [x] Selezionare gli elementi HTML con cui interagire in pagina.
 * 3. [x] Settare lo state: cart (arrey che contiene i prodotti), opzionale cart info (che sarà un oggetto).
 * 4. [x] Render dei prodotti nel loro box (NB. per ogni card ci deve essere il bottone "aggiungi al carrello" >>
 *      serve l'id del protto).
 * 5. [x] Funzione che renderizza i prodotti nel carrello.
 * 6. Funzione che aggiunge il prodotto al carrello (questa funzione accetta come parametro l'id del prodotto).
 *      NB. Fare un check per verificare se il prodotto è già presente nel carrello, se c'è aumentiamo di uno la
 *      quantità, altrimenti lo aggiungiamo ex novo.
 *      NB. L'oggetto che rappresenta il prodotto nel carrello deve avere le stesse chiavi del prodotto + una:
 *      la chiave "qnt" con valore di default 1.
 * 7. Manage degli eventi: in risposta al click sul bottone "aggiungi al carrello" dovrà essere eseguita la 
 *      funzione al punto 6 e contestualmente la funzione al punto 5.
 * 8. [x] Funzione di init per eseguire le funzioni in ordine corretto.
 * 9. [x] Eseguo la funzione di init per avviare l'algoritmo.
 */

import { products } from "./data.mjs";

const $productData = document.querySelector("#product-card");
const $productDataCart = document.querySelector("#product-card-cart")
const $clearCartBtn = document.querySelector("#clear-cart");
const $totalPrice = document.querySelector("#total-price")
const $sortItems = document.querySelector("#sort");


const state = {
    items: [],
    cart: [],
    cartInfo: {
        totalPrice: 0,
    },
    sorting: {
        by: "price",
        mode: "DESC",
    },
};

const sortItems = () => {
    state.items.sort((a, b) => {
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

const addProductToCart = (btn) => {
    const id = Number(btn.dataset.id);
    const product = state.items.find((item) => item.id === id);

    const cartItem = state.cart.find((item) => item.id === id);

    if (cartItem) {
        cartItem.qnt += 1;
    } else {
        state.cart.push({
            ...product,
            qnt: 1,
        });
    }

    updateTotal();
    renderProductCart();
    hideClearCartBtn();
};

const clearCart = (event) => {
    if (state.cart.length >= 1) {
        state.cart = [];
        renderProductCart();
        updateTotal();
        hideClearCartBtn();
    };
};

const hideClearCartBtn = () => {
    if (state.cart.length === 0) {
        $clearCartBtn.style.display = "none";
    } else {
        $clearCartBtn.style.display = "flex";
    };
};

const updateTotal = () => {
    state.cartInfo.totalPrice = state.cart.reduce((sum, item) => {
        return sum + item.price * item.qnt;
    }, 0).toFixed(2);
};

const renderProduct = () => {
    sortItems();
    const HTML = state.items.map((item) => {
        return `
        <div class="product-data">
            <img src="${item.photo}" class="product-card_img">
            <h3 class="product-card_title">${item.title}</h3>
            <p class="product-card_description">${item.description}</p>
            <div class="product-card-bottom">
                <p class="product-card_price">${item.price.toFixed(2)} €</p>
                <button data-id="${item.id}" class="add-cart-btn" aria-label="Aggiungi al carrello">
                    <svg class="cart-svg" id="fi_4297127" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m19.091 19h-8.994c-1.297 0-2.447-.851-2.798-2.07l-3.04-10.301c-.108-.373-.467-.629-.877-.629h-2.382c-.553 0-1-.448-1-1s.447-1 1-1h2.382c1.297 0 2.446.851 2.797 2.07l.569 1.93h15.295c.624 0 1.216.297 1.583.795.364.494.469 1.112.288 1.696l-2.063 6.548c-.404 1.182-1.511 1.961-2.76 1.961zm2.953-9h.01z"></path><path d="m11 24c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-2.001v.001z"></path><path d="m18 24c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-2.001v.001z"></path></svg>
                </button>
            </div>
        </div>
        `;
    }).join("");

    $productData.innerHTML = HTML;
};

const renderProductCart = () => {
    if (state.cart.length === 0) {
        $productDataCart.innerHTML = `<p>Il tuo carrello è ancora vuoto.</p>`;
        $totalPrice.textContent = "Totale: 0.00 €";
        return;
    };

    const HTML = state.cart.map((item) => {
        return `
        <div class="product-data-cart">
            <img src="${item.photo}" class="product-card-cart_img">
            <div  class="product-card-cart-left">
                <h3 class="product-card-cart_title">${item.title}</h3>
                <p class="product-card-cart_description">${item.description}</p>
            </div>
            <div class="product-card-cart-right">
                <p class="product-card-cart_price">${item.price} €</p>
                <p class="product-card-cart_qnt">${item.qnt}</p>
            </div>
        </div>
        `;
    }).join("");

    $productDataCart.innerHTML = HTML;
    $totalPrice.textContent = `Totale: ${state.cartInfo.totalPrice} €`;
};

const manageListeners = () => {
/*     const $addCartBtn = Array.from(document.querySelectorAll(".add-cart-btn"));

    $addCartBtn.forEach((element) => {
        element.addEventListener("click", (event) => {

            addProductToCart(event);
            renderProductCart();
        });
    });
 */
    document.addEventListener("click", (event) => {
        if (event.target.closest(".add-cart-btn")) {
            addProductToCart(event.target.closest(".add-cart-btn"));
            renderProductCart();
        } 
    });

    $clearCartBtn.addEventListener("click", (event) => {
        clearCart();
        renderProductCart();
    });

    $sortItems.addEventListener("change", (event) => {
        const [by, mode] = event.target.value.split("-"); // id-ASC -> ["id", "ASC"]
        state.sorting.by = by;
        state.sorting.mode = mode;
        renderProduct();
      });
};

const init = async () => {
    state.items = products;

    renderProduct();
    renderProductCart();
    hideClearCartBtn();
    manageListeners();
};

init();