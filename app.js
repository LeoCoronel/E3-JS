const pizzas = [
    {
        id: 1,
        nombre: "Muzzarella",
        ingredientes: ["muzzarella", "salsa"],
        precio: 800
    },
    {
        id: 2,
        nombre: "Jamón y Morrón",
        ingredientes: ["muzzarella", "jamón", "morrón", "salsa"],
        precio: 300
    },
    {
        id: 3,
        nombre: "fugazzeta",
        ingredientes: ["muzzarella", "cebolla"],
        precio: 120
    },
    {
        id: 4,
        nombre: "4 quesos",
        ingredientes: ["muzzarella", "gorgonzola", "parmesano", "fotntina"],
        precio: 800
    }
]

const pizzaName = document.getElementById("name");
const pizzaPrice = document.getElementById("price");
const input = document.getElementById("pizzaId")
const errorDiv = document.getElementById("errorDiv")
const submit = document.getElementById("submit").addEventListener("click", getPizza);

function getPizza() {
    const pizza = input.value;
    if(pizzas[pizza]) {
        pizzaName.innerText = pizzas[input.value].nombre;
        pizzaPrice.innerText = `Precio: $${pizzas[input.value].precio}`;
    } else if(pizza == "") {
        showError("No has ingresado un id");
    } else {
        showError("No existe ningúna pizza con ese id");
    }
}

function showError(error) {
    const msgError = document.createElement("p");

    msgError.textContent = error;

    msgError.classList.add("error");

    errorDiv.appendChild(msgError);

    setTimeout(() => {
        msgError.remove();
    }, 2000);
}