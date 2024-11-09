document.addEventListener("DOMContentLoaded", () => {
    // Declarar as variáveis primeiro
    let productName, productPrice, productImage;

    // Função para criar novos elementos HTML para exibir o produto.
    function addProduct() {
        // Aqui é onde as variáveis recebem seus valores
        productName = document.querySelector("#nomeProduto").value;
        productPrice = document.querySelector("#precoProduto").value;
        productImage = document.querySelector("#imagemProduto").value;

        const productContainer = document.createElement("div");
        productContainer.classList.add("container");

        // Criar e adicionar os elementos HTML para o produto
        const imageElement = document.createElement("img");
        imageElement.src = productImage;
        productContainer.appendChild(imageElement);

        const nameElement = document.createElement("h2");
        nameElement.textContent = productName;
        productContainer.appendChild(nameElement);

        const priceElement = document.createElement("p");
        priceElement.textContent = `R$${productPrice}`;
        productContainer.appendChild(priceElement);

        const mainSection = document.querySelector("main section");
        mainSection.appendChild(productContainer);
    }

    // Adicionar evento ao formulário de cadastro
    const form = document.querySelector(".formularioFooter");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        addProduct(); // Chama a função para adicionar o produto
        form.reset(); // Limpa o formulário


// FUNÇAO PARA O BOTÃO DE COMPRA

document.addEventListener("DOMContentLoaded", () => {
    //Seleciona todos os botões com a "classe buy-button"
    const buyButtons = document.querySelectorAll("buy-button");
});
    });

//Adiciona evento no  botão de compra
    buyButtons.forEach(button => {
        button.addEventListener("click", () => { // Ação ao clicar no botão de comprar
            alert("Produto adicionado ao carrinho com sucesso!");
            });
        });
    });














// document.getElementById("productForm").addEventListener("submit", function (event) {
//     event.preventDefault();

//     // Obtém os valores dos campos do formulário

//     const name = document.getElementById("productName").value;
//     const price = document.getElementById(productPrice).value;
//     const imagemUrl = document.getElementById("productImage").value;

//     // Cria um novo elemnto de produto

//     const productContainer = document.createElement("div");
//     productContainer.classList.add("container");

//     const img = document.createElement("img");
//     img.src = imagemUrl;
//     img.alt = name;

//     const productName = document.createElement("p");
//     productName.textContent = name;

//     const productPrice = doxument.createElement("h2");
//     productPrice.textContent = `R$${price}`;

//     const buyButton = document.createElement("button");
//     buyButton.textContent = "COMPRAR";

    

//     // // adiciona os elementos criados ao container do produto
//     // productContainer.appendChild(img);
//     // productContainer.appendChild(productPrice);
//     // productContainer.appendChild(productName);
//     // productContainer.appendChild(buyButton);

//     // Adicona o novo á seção de produtos

//     document.getElementById("products").appendChild(productContainer);

//     //limpa os campos do formulário

//     document.getElementById(productForm).reset();

// });