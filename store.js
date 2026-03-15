const products = {

phones: [
{
name: "iPhone 13",
price: "$800",
spec: "128GB, 5G",
image: "iphone.jpg"
},
{
name: "Samsung Galaxy S22",
price: "$750",
spec: "128GB, Android",
image: "samsungs22ultra.jpg"
},
{
name: "Samsung Galaxy A17",
price: "250,000NGN",
spec: "128GB, Android",
image: "samsungA17.webp"
}
],

Handbags: [
{
name: "designer",
price: "52,000 NGN",
spec: "leather",
image: "Bag0001.jpeg"
},
{
name: "designer",
price: "38,000 NGN",
spec: "leather",
image: "Bag0002.jpeg"
},
{
name: "designer",
price: "60,000 NGN",
spec: "leather",
image: "Bag0003.jpeg"
},
{
name: "designer",
price: "80,000 NGN",
spec: "leather",
image: "Bag0004.jpeg"
},
{
name: "designer",
price: "80,000 NGN",
spec: "leather",
image: "Bag0005.jpeg"
},
{
name: "designer",
price: "75,000 NGN",
spec: "leather",
image: "Bag0006.jpeg"
},
{
name: "designer",
price: "87,000 NGN",
spec: "leather",
image: "Bag0007.jpeg"
},
{
name: "designer",
price: "87,000 NGN",
spec: "leather",
image: "Bag0008.jpeg"
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
