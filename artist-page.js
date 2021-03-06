
    const loadSongs = function(id){

    fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + id , {
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
       let img = document.querySelector("main .artist-page-bg img:first-of-type")
        let h1 = document.querySelector("h1")
        h1.innerHTML= `${songs.name}`
        img.src = `${songs.picture_xl}`
        
        img.alt = `image of ${songs.name}`
        let table = document.querySelector("table")
        
        // songList.foreach((song) => {
           
        table.innerHTML += `<tr class="align-baseline">
                          <td>
                            <div>1</div>
                          </td>
                          <td>
                            <div> <img src="${songs.picture_xl}" style="width:50px" alt="">
                          </td>
                          <td>
                            <div>${songs}</div>
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
  let params = new URLSearchParams(document.location.search); 
  let id = params.get("id");
  loadSongs(id)
}
 

