//Variables
const listaTweets = document.getElementById('lista-tweets')


//Even Lissteners

eventListeners();

function eventListeners(){
    //Cuando se envía el formulario

    document.querySelector('#formulario').addEventListener('submit',agregarTweet)

    //Borrar Tweets
    listaTweets.addEventListener('click', borrarTweet)

}

function agregarTweet(e){
    e.preventDefault()
    
    //Leer el valor del textarea
    const tweet = document.getElementById('tweet').value
    //Crear boton de eliminar
    const botonBorrar = document.createElement('a')
    botonBorrar.classList = 'borrar-tweet'
    botonBorrar.innerText = 'X'


    //crear el elemnto y añadir el contenido a la lista
    const li = document.createElement('li')
    li.innerText = tweet
    li.appendChild(botonBorrar)
    listaTweets.appendChild(li)
}


function borrarTweet(e){
    e.preventDefault()
    if(e.target.className === 'borrar-tweet'){
        let opcion = confirm("Desea Eliminar Tweet!!")
        if(opcion == true){
         console.log(e.target.parentElement.remove())
        }else{
            opcion = false
        }
    }   
}