import { productServices } from "../services/product-services.js";//IMPORTANTE siempre poner el ".js"
const form = document.querySelector("[data-form]")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const imgUrl = document.querySelector("[data-imgUrl]").value
    const categoria = document.querySelector("[data-catergoria]").value
    const productName = document.querySelector("[data-productName]").value
    const price = document.querySelector("[data-price]").value
    const description = document.querySelector("[data-description]").value
    
    console.log(productName);
    productServices.insertNewProduct(productName, categoria,description, price, imgUrl).then(respuesta => {
        console.log(respuesta);
    }).catch(err =>{
        alert(err);
    })
})