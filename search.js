

const searchSonges = function(event){
    let searchInput = document.getElementById("searchInput")
                                                                        searchInput.addEventListener ("keyup", (event)=>{
                                                                            event.target.value
                                                                            console.log("event.target.value")
                                                                           if(event.keyCode === 13) {
                                                                            console.log( event.keyCode)
           renderSongs(event.target.value)
       }
})
}

const renderSongs = function(searchInput){
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchInput)
    .then(response=> response.json())
    .then(jsonData = {
        
    })
}

window.onload  = function(){
    
    
}