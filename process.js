//select all products
//log all products

const main = document.querySelector("#main");
//console.log(main);

const divParent = document.querySelector(".container");
//console.log(divParent);

const divChild = divParent.firstElementChild;
//console.log(divChild);

const h2 = divChild.firstElementChild;
//console.log(h2);

const grid = h2.nextElementSibling;
// console.log(grid);

const products = grid.children;
// console.log(products);

//get cart
const cart = main.firstElementChild.lastElementChild;
const next = cart.firstElementChild;
const dev = next.firstElementChild.nextElementSibling;


console.log(dev); 

//Step 2. Convert HTML Collection to Array

const productsArray = Array.from(products);
// console.log(productsArray);


productsArray.forEach((p) => {
    const img = p.firstElementChild;
    const h3 = img.nextElementSibling;
    const select = h3.nextElementSibling;
    const button = select.nextElementSibling;

    button.addEventListener("click", () => {
        const h5 = document.createElement("h5");

        let text = h3.innerText;

        if (select.value && select.value !== "") {
            text += " - " + select.value;
        }

        h5.innerText = text;
        dev.appendChild(h5);
    });
});
