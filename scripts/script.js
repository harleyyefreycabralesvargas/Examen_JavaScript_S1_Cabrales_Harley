function getplatos(){
    let busqueda=document.getElementById("nombre").value

    if(busqueda!==""){
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
.then(response => response.json())
.then(data =>{
    let xd=""
    console.log(data);
    console.log(xd);
    for (let i = 0; i < data.meals.length; i++) {
        console.log(data.meals[i].strMeal);
    
    let mostrar=document.getElementById("imagenes");
    mostrar.innerHTML+=`
    <div class="platos">
    <h2>${data.meals[0].strMeal}</h2>
    <img src="${data.meals[i].strMealThumb}" alt="">
    <p>Categoria: ${data.meals[i].strCategory}</p>
    <p>Tipo de comida: ${data.meals[i].strArea}</p>
    <button id="ver_info${i}">Ver detalles</button>
    </div
    `}
    for (let f=0;f<data.meals.length-1;f++){
    let lista={
        ingredientes: [
            data.meals[f].strIngredient1,
            data.meals[f].strIngredient2,
            data.meals[f].strIngredient3,
            data.meals[f].strIngredient4,
            data.meals[f].strIngredient5,
            data.meals[f].strIngredient6,
            data.meals[f].strIngredient7,
            data.meals[f].strIngredient8,
            data.meals[f].strIngredient9,
            data.meals[f].strIngredient10
        ]
    }
    const waos= document.getElementById(`ver_info${f}`);
    waos.addEventListener(`click`,()=>{

        let info_adc=document.getElementById("info")
        info_adc.innerHTML=`
        
        <div class="conteiner_info">
        <a class="linked" href="./index.html" >Volver</a>
        <img src="${data.meals[f].strMealThumb}" alt="" class="imagen_click">
        <p class="nombre_equipo_card">Nombre: <span style="color: white;">${data.meals[f].strMeal}</span></p>
        <p class="nombre_modelo_card">Categoria y tipo de comida: <span style="color: white;">${data.meals[f].strCategory}, ${data.meals[f].strArea}</span></p>
        <p class="motor_card">Lista de ingredientes: <span style="color: white;">${lista}</span></p>
        <p class="num_vueltas">Instrucciones: <span style="color: white;">${data.meals[f].strInstructions}</span></p>
        <a href="${data.meals[f].strYoutube}" class="num_vueltas">Video explicativo</a>
        </div>
        `})
        console.log(data.meals[f].strYoutube)
    }
} );}
}
getplatos();

document.getElementById("nombre").addEventListener("input",function(){
    if(this.value !==""){
        getplatos();
    }
});
// function solicitud(paginas,animalito){

//     const clientId = '2TG8SnUDrvSYhaXHhaxEuty1j909ZAaYL9PTnLMxqbefaWqaGg';
//     const clientSecret = 'q2QJrpE5zuM3BD9j7mNWAmRIbEbCAYeOpCAxRlS4';
    
//     const data = new URLSearchParams();
//     data.append('grant_type', 'client_credentials');
// data.append('client_id', clientId);
// data.append('client_secret', clientSecret);

// axios.post('https://api.petfinder.com/v2/oauth2/token', data, {
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     }
// })
// .then(response => {
//     console.log('Token:', response.data.access_token);
//     let token = response.data.access_token
//     axios.get(`https://api.petfinder.com/v2/animals?type=${animalito}&page=${paginas}`, {
//         headers: {
//             'Authorization': `Bearer ${token}`
            
//         }
//     })
//     .then((respuesta)=>{
//         console.log("https://api.petfinder.com/v2/animals?type=dog&page=0")
//         console.log(respuesta.data)
//         document.getElementById("mostrar").innerHTML=""
//         for (let i=0; i<respuesta.data.animals.length;i++){
//             let url1=("/Dia17/img/pug.jpeg")
//             const imagenes = respuesta.data.animals[f].photos[0]
//             console.log(imagenes)
//             const muestra = document.getElementById("mostrar")
//             if(imagenes!==undefined && respuesta.data.animals[f].contact.address.city==lugar){
//                 const imagenxd=respuesta.data.animals[f].photos[0].small
//                 console.log(imagenxd)
//                 muestra.innerHTML+=`
//                 </a><br>${respuesta.data.animals[f].name}<a><button>
//                 <img src="${imagenxd}" alt="/Dia17/img/pug.jpeg" class="imagen"></button>
//                 <p>${respuesta.data.animals[f].species} ~ ${respuesta.data.animals[f].breeds.primary}</p>
//                 <p>${respuesta.data.animals[f].age}</p>
//                 <p>${respuesta.data.animals[f].contact.address.city}</p>
//                 <p>${respuesta.data.animals[f]}</p>`
//                 console.log(respuesta.data.animals[f].name)
//             }
//             else if(imagenes==undefined && respuesta.data.animals[f].contact.address.city==lugar){ 
//                 muestra.innerHTML+= `
//                 </a><br>${respuesta.data.animals[f].name}<a><button>
//                 <a><button><img src="${url1}" alt="/Dia17/img/pug.jpeg" class="imagen"></button>
//                 <p>${respuesta.data.animals[f].species} ~ ${respuesta.data.animals[f].breeds.primary}</p>
//                 <p>${respuesta.data.animals[f].age}</p>
//                 <p>${respuesta.data.animals[f].contact.address.city}</p>
//                 <p>${respuesta.data.animals[f]}</p>`
//                 console.log(respuesta.data.animals[f].name)
//             }
            
//             const imagenPorDefecto = "/Dia17/img/pug.jpeg"
//         }
//     })
// })
// }
// let contador = 0
// document.getElementById("atras").addEventListener("click", function(e){
//     e.preventDefault()
//     tipo = document.getElementById("typo").value
//     lugar = document.getElementById("lugar").value
//     if (contador == 1){
//         contador=1
//     }else{
//         contador=contador-1
//     }
//     solicitud(contador,tipo)
// })
// document.getElementById("adelante").addEventListener("click", function(e){
//     e.preventDefault()
//     tipo = document.getElementById("typo").value
//     lugar = document.getElementById("lugar").value
//     contador=contador+1
//     solicitud(contador,tipo)
// })