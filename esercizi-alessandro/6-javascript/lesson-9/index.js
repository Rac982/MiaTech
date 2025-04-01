const customSelect = (options = { selector: "", items: [], labelName: "label", valueName: "value" }) => {
    options = { selector: "", items: [], labelName: "label", valueName: "value", ...options };

    const $select = document.querySelector(options.selector);

    if (!$select) throw new Error("HTML Element not found");
    
    const state = {
        items: options.items,
        value: $select.dataset.value ?? options.items[0][options.valueName],
    }

    const render = () => {
        const template = `
            <span class="custom-select__label">${state.value}</span>
            <div class="custom-select__dropdown">
                ${state.items.map(item => `
                    <div class="custom-select__dropdown-item" data-value="${item[options.valueName]}">
                        ${item[options.labelName]}
                    </div>    
                `).join("")}
            </div>
        `;

        $select.innerHTML = template;
    }

    const manageListeners = () => {
        document.addEventListener("click", (event) => {
            const target = event.target.closest(options.selector);
            const item = event.target.closest(".custom-select__dropdown-item");

            if (target && !item) {
                target.querySelector(".custom-select__dropdown").classList.toggle("open");
            } else if (target && item) {
                state.value = item.dataset.value;
                target.querySelector(".custom-select__label").innerHTML = state.value;
                target.querySelector(".custom-select__dropdown").classList.toggle("open");

                const event = new CustomEvent("change", { detail: state.value });

                $select.dispatchEvent(event);
            } else {
                $select.querySelector(".custom-select__dropdown").classList.remove("open");
            }
        });
    }

    return {
        init: () => {
            render();
            manageListeners();
        }
    }
}