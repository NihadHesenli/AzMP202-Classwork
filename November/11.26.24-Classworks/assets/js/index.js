import BASE_URL from "./api/contest.js";
import { endpoints } from "./api/contest.js";


const cards = document.querySelector('.cards')
const inputSearch = document.querySelector('.search-input')
let products = null



async function getAllData(endpoints) {
    try {
        const response = await axios(`${BASE_URL}/${endpoints}`)
        products = response.data
        cardRender(products)
    } catch (error) {
        console.error(error);
    }

}

function cardRender(array) {
    cards.innerHTML=''
    array.forEach(elem=>{
        cards.innerHTML+=`
        <div class="col-4">
                    <div class="card">
                    <img src="${elem.image}" alt="">
                    <div class="card-info">
                        <h3>${elem.name}</h3>
                        <p>${elem.description}</p>
                    </div>
                    <span>$${elem.price}</span></div>
                </div>
        `
    })
}


let timeout = null

inputSearch.addEventListener('keyup',function(e){
    clearTimeout(timeout)
    let response;
    timeout = setTimeout(async () => {
        response = await axios(`${BASE_URL}/${endpoints.products}`)
        const filteredproducts = response.data.filter((data)=>{
           return data.name.toLowerCase().includes(e.target.value.toLowerCase().trim()) || data.description.toLowerCase().includes(e.target.value.toLowerCase().trim())
        })

        cardRender(filteredproducts)
    },300);
})

const form = document.querySelector('form')
const image = document.querySelector('.image-input')
const name = document.querySelector('.name-input')
const category = document.querySelector('.select')
const des = document.querySelector('.description')
const price = document.querySelector('.price')
const stock = document.querySelector('.stock')

form.addEventListener('submit',function(){
    const products ={
        id : Date.now(),
        name : name.value.trim(),
        description : des.value.trim(),
        price : price.value.trim()

    }
})


async function addNewData(endpoint,payload) {
    try {
        const response = await async.put(`${BASE_URL}/${endpoint}`, payload)
    } catch (error) {
        
    }
}

getAllData(endpoints.products)