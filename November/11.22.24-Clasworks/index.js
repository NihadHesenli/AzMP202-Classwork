const BASE_URL = "https://northwind.vercel.app/api"
const tBody = document.querySelector('tbody')
const spinner =document.querySelector('.spinner')

function getdata(endpoint){
    fetch(`${BASE_URL}/${endpoint}`)
    .then((res)=>{
        return res.json()        
    })
    .then((data)=>{
        drawtable(data)
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(()=>{
        spinner.classList.add('d-none')

    })
}

function drawtable (array){
    tBody.innerHTML = ''
    array.forEach(element => {
        tBody.innerHTML += `
        <tr>
        <td>${element.id}</td>
        <td>${element.companyName}</td>
        <td>${element.contactName}</td>
        <td>${element.address?.phone}</td>
        <td>${element.address?.street}</td>
        <td>${element.address?.city}, ${element.address?.country}</td>
        <td class="d-flex gap-2">
                <button class="delete btn btn-outline-danger" data-id=${element.id}>delete</button>
                <button class="edit btn btn-outline-success">edit</button>
                <a class="btn btn-outline-primary d-flex align-items-center" href="details.html?id=${element.id}">details</a>
            </td>
        </tr>    
        `
    });
    const deleteBTN = document.querySelectorAll('.delete')
    
    deleteBTN.forEach((btn)=>{
        btn.addEventListener('click' , function(){
            const deleteBTNId = this.getAttribute("data-id")
            deleteData("customers", deleteBTNId, this)
        })
    })
}


function deleteData (endpoint,id,button){
    fetch(`${BASE_URL}/${endpoint}/${id}`,{method : "DELETE"})
    .then((res)=>{
        if(res.ok){
            button.closest('tr').remove()
        }
    })
    .catch((err)=>{
        console.log(err);
    })
}


window.addEventListener('DOMContentLoaded',function(){
    getdata('customers')
})