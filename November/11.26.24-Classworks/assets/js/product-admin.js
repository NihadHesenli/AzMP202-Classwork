import BASE_URL from "./api/contest.js";
import { endpoints } from "./api/contest.js";

const tbody = document.querySelector('tbody')
let products = null

async function getAllData(endpoints) {
    try {
        const response = await axios(`${BASE_URL}/${endpoints}`)
        products = response.data
        tableRender(products)
    } catch (error) {
        console.error(error);
    }

}

function tableRender(array) {
    tbody.innerHTML=''
    array.forEach(elem=>{
        tbody.innerHTML+=
        `<tr>
                        <td>${elem.id}</td>
                        <td>${elem.name}</td>
                        <td>${elem.price}</td>
                        <td>${elem.description}</td>
                        <td>${elem.stock}</td>
                        <td><button class="edit" data-id = ${elem.id}>Edit</button><button class="delete" data-id=${elem.id}>Delete</button></td>
                    </tr>`
    })

    const allDeleteButtons = document.querySelectorAll('.delete')
    allDeleteButtons.forEach((btn)=>{
        btn.addEventListener('click',function(){
            const tableId = this.getAttribute('data-id') 
            deleteProduct(endpoints.products,tableId,this)
        })
    })


    async function deleteProduct(endpoint , id , btn) {
        try {
            const response = await axios.delete(`${BASE_URL}/${endpoint}/${id}`)
            btn.closest("tr").remove()
        } catch (error) {
            
        }
    }
}

window.addEventListener('DOMContentLoaded',function(){
    getAllData(endpoints.products)
})