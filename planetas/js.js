const datos = document.getElementById('datos')
const dato = document.getElementById('dato').content
const fragment = document.createDocumentFragment()

let API = []

document.addEventListener('DOMContentLoaded',()=>{
    planetas()
})

const planetas = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1a0943f29emsh4756639faf84309p1fedd1jsn49a25bc6df97',
            'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
        }
    };
    fetch('https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list', options)
        .then(response => response.json())
        .then(response => {API = response
            dibujaplanetas()
            console.log(API)})
        .catch(err => console.error(err));
}
const dibujaplanetas = () =>{
    API.forEach((item)=>{
        //console.log(item.imgSrc[0].img)

        //dato.querySelector('img').setAttribute('src',item.imgSrc[0].img.displayImageUri)
        dato.querySelector('.nombre').setContent = item.name
        dato.querySelector('.descripcion').setContent = item.description
        dato.querySelector('.num').setContent = item.planetOrder
        const clone = dato.cloneNode(true)
        fragment.appendChild(clone)
        
    })
    dato.appendChild(fragment)

}