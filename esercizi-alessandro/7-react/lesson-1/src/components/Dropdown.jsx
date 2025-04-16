import React, { useState } from "react";

// COMPONENT WITH useSTATE
/* Usi useState quando vuoi salvare e aggiornare un valore nel tempo, come
se fosse una variabile "viva" nel componente.
Quando lo stato cambia, il componente si ri-renderizza.
Ogni volta che chiami setIsOpen, React aggiorna isOpen e rifà il render del componente.*/

const Dropdown = ({ labelBtn, children }) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleIsOpen = () => {
        setIsOpen((isOpen) => {
            return !isOpen //fare sempre riferimento al valore precedente dello state
        })
    }

    return (
        <div>
            <button onClick={toggleIsOpen}>{labelBtn}</button>
            {
                isOpen && (
                    <>
                        <div>{children} </div>
                        <button>Hola</button>
                    </>
                )
            }

        </div>
    );
};

export default Dropdown;