const products = {

phones: [
{
name: "iPhone 13",
price: "$800",
spec: "128GB, 5G",
image: "images/iphone13.jpg"
},
{
name: "Samsung Galaxy S22",
price: "$750",
spec: "128GB, Android",
image: "images/samsungS22.jpg"
},
{
name: "Samsung Galaxy A17",
price: "250,000NGN",
spec: "128GB, Android",
image: "images/samsungA17.jpg"
}
],

computers: [
{
name: "HP EliteBook",
price: "$900",
spec: "Core i5, 8GB RAM",
image: "images/hp.jpg"
},
{
name: "Dell XPS",
price: "$1200",
spec: "Core i7, 16GB RAM",
image: "images/dell.jpg"
}
],

clothes: [
{
name: "Men Shirt",
price: "$25",
spec: "Cotton",
image: "images/shirt.jpg"
}
]

};


function showCategory(category){

const container = document.getElementById("products");

container.innerHTML = "";

products[category].forEach(product => {

container.innerHTML += `
<div class="product">

<img src="${product.image}">

<h4>${product.name}</h4>

<p>${product.spec}</p>

<p><strong>${product.price}</strong></p>

<button>Purchase</button>

</div>
`;

});

}