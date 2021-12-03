


// const renderSongs = function(searchInput){
//     fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchInput)
//     .then(response=> response.json())
//     .then(jsonData = {
//         con
//     })
// }

window.onload  = function(){
    const searchSonges = function(event){
        let searchInput = document.getElementById("searchInput")
        searchInput.addEventListener ("keyup", (event)=>{
           console.log( event.keyCode)
           if(event.keyCode === 13) {
               renderSongs(event.target.value)
           }
    })
    }
}