const products = [
    {
        id: 1,
        name: "Baby Yoda",
        img:'img/baby-yoda.svg',
        price: 10.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga expedita obcaecati adipisci explicabo impedit facere est qui voluptate. Fugiat libero molestiae suscipit eaque quae nihil sequi esse numquam dolor nisi!"
    },
    {
        id: 2,
        name: "Banana",
        img:'img/banana.svg',
        price: 9.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga expedita obcaecati adipisci explicabo impedit facere est qui voluptate. Fugiat libero molestiae suscipit eaque quae nihil sequi esse numquam dolor nisi!"
    },
    {
        id: 3,
        name: "Girl",
        img:'img/girl.svg',
        price: 8.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga expedita obcaecati adipisci explicabo impedit facere est qui voluptate. Fugiat libero molestiae suscipit eaque quae nihil sequi esse numquam dolor nisi!"
    },
    {
        id: 4,
        name: "Viking",
        img:'img/viking.svg',
        price: 7.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga expedita obcaecati adipisci explicabo impedit facere est qui voluptate. Fugiat libero molestiae suscipit eaque quae nihil sequi esse numquam dolor nisi!"
    }
]

function renderProducts(products){
    const productsContainer = document.querySelector('.products');
    for (const product of products) {
        productsContainer.innerHTML +=
        `<article>
        <h3>${product.name}</h3>
        <img src="${product.img}" alt="${product.name}">
        <p> ${product.description}</p>
        <div class="button">
            <button>Info</button>
            <button>${product.price} - Buy</button>
        </div>
        </article>`;
    }
}

renderProducts(products);