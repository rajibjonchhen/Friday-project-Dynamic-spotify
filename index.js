

const loadAlbums = function(arrayOfSinger){

    arrayOfSinger.forEach(singer =>{
        fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + singer, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "a2e00d2d7fmsh97d81a4d7786418p174eacjsnd97f660026b9"
            }
        })
        .then(response => response.json()) 
        .then(jsonData => {
        
            console.log(jsonData);
            let songs = jsonData.data
            displayAlbums(songs)
        })
    })
   
}


        const displayAlbums = function(songs){
           
            songs.slice(0,6).forEach(song => {
            let row = document.querySelector("main .row")
            let col = document.createElement("div")
            col.className = ("col-12", "col-sm-6", "col-md-4" )
            col.innerHTML += `<div class="small-card align-items-center position-relative">
            <a href="/album-page.html?id=${song.album.id}">
            <div class="play-btn position-absolute"><i
                    class="bi bi-play-circle-fill play-circle position-relative"></i></div>
                    <img src="${song.album.cover_small}" class="small-card-img ml-n3" alt="cover">
            <strong class="text-white mx-2">${song.album.title}</strong>
            </a>
            <a href="/artist-page.html?id=${song.artist.id}">${song.artist.name}</a>
        </div>`
            row.appendChild(col) 
        })
}

window.onload = function(){
let arrayOfSinger = ["eminem","metallica","behemoth"]
    loadAlbums(arrayOfSinger)

}

// url params
// new param