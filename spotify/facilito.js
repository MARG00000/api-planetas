const contenedor = document.getElementById('contenedor')
const btnload = document.getElementById('btnload')
const cardmusic = document.getElementById('cardmusic').content
const fragment = document.createDocumentFragment()
const type = document.getElementById('type')
let canciones = [] //{} asiu se marca un objeto

btnload.addEventListener('click',() =>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1a0943f29emsh4756639faf84309p1fedd1jsn49a25bc6df97',
            'X-RapidAPI-Host': 'spotify117.p.rapidapi.com'
        }
    };
        
    
    fetch(`https://spotify117.p.rapidapi.com/search/?keyword=romantic%20songs&type=${type.value}`, options) //´${paises.value}´
        .then(response => response.json())
        .then(response => {
            canciones = response
            console.log(canciones)
            creartarjetas()
        })
        .catch(err => console.log(err));
})

const creartarjetas = ()=>{ //para un parametro  se pone algo dentro de ()
    contenedor.innerHTML = ''
    canciones.forEach((item) =>{
    console.log(item)
    carmusic.querySelector('img').setAttribute('src',item.trackMetadata.displayImageUri)
    cardmusic.querySelector('p').textContent = item.trackMetadata.trackName

    const clone = cardmusic.cloneNode(true)
    fragment.appendChild(clone)
})

contenedor.appendChild(fragment)
}


	