import { products } from "./products.js";

const tbody = document.querySelector('tbody')


function tableSorter(array) {
    tbody.innerHTML='';
    array.forEach((product) => {
        const tr = document.createElement('tr')
        tr.innerHTML=`
                <td><img src="${product.image}" width = "100"></td>
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>$${product.price}</td>
                <td>${product.category}</td>
                <td>${product.rating.rate}</td>
                <td><i class="fa-solid fa-delete-left text-danger delete-btn data-id=${product.id}"></i></td>
        ` 
        tbody.appendChild(tr)
    });
    
    const allDelBtn = document.querySelectorAll('.delete-btn')

    allDelBtn.forEach((btn) =>{
        btn.addEventListener('click',function(){
            
        })
    })
}
tableSorter(products)