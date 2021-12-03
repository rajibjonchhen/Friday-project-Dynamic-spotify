
    const loadSongs = function(){

    fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/119", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "a2e00d2d7fmsh97d81a4d7786418p174eacjsnd97f660026b9"
        }
    })
    .then(response => response.json()) 
    .then(jsonData => {

        console.log(jsonData);
        let songs = jsonData
        displaySongs(songs)
    })
}


    const displaySongs = function(songs){
       let img = document.querySelector("main img:first-of-type")
        let h1 = document.querySelector("h1")
        h1.innerHTML= `${songs.name}`
        img.src = `${songs.picture_xl}`
        let artistPicture = img.src
        img.alt = `image of ${songs.name}`
        let table = document.getElementsByTagName("table")
        let songList = songs
        // songList.foreach((song) => {
           
        table.innerHTML += `<tr class="align-baseline">
                          <td>
                            <div>1</div>
                          </td>
                          <td>
                            <div> <img src=`${artistPicture}` style="width:50px" alt="">
                          </td>
                          <td>
                            <div>Another one bite of love</div>
                          </td>
                          <td>
                            <div>
                              <div>1,222,432,345</div>
                            </div>
                          </td>
                          <td>
                            <div> <a href=""><i class="far fa-heart"></i></a></div>
                          </td>
                          <td>
                            <div> 3:24</div>
                          </td>
                        </tr>

` 
        }


window.onload = function(){

  loadSongs()
}


