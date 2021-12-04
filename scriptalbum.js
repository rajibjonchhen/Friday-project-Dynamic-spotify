/* let params = new URLSearchParams(document.location.search); */
/* let id = params.get("id"); 
/* document.location.assign("https://striveschool-api.herokuapp.com/api/deezer/album/${id}" ) */


const loadAlbum = (id) => {
  return fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + id /*+  albumid ,*/ )
    .then((res) => res.json())

    .then((albums) => {
      console.log(albums);
      console.log(albums.tracks.data[0].title)

      /* JUMBOTROM  */
      
      const eljumbotron = document.querySelector(".eljumbotron")
      eljumbotron.innerHTML =`
      <img src="${albums.cover}" class="img-fluid mr-3" alt="AnyGivenDay" id="albumImg" />
        <div class="album-heder flex-coloumn px-2">
          <h6 class="album-title">ALBUM</h6>
          <h1 class="album-header">${albums.title}</h1>
          <div class="d-flex">
            <img src="https://picsum.photos/300/300" class="rounded-circle mr-3" width="30px" height="30px" alt="small image" />
            <a class="ancher-header text-white" href="/artist-page.html?id=${albums.artist.id}">${albums.artist.name}</a>
            
            <div class="">
              <span class="headerSmallRow ml-1">• ${albums.release_date}</span>
              <span class="headerSmallRow">• ${albums.nb_tracks},</span>
              <span class="headerSmallRow">${albums.duration}</span>
            </div>
          </div>
        </div>
      `
     
      /* Table */
      
      const table = document.querySelector(".colors")  
      
      /* albums.forEach((album,i) => { */ 
      
      for (let i = 0; i < albums.tracks.data.length; i++) {
        
        
      const row = document.createElement("tr")
      row.classList.add("align-middle")   
      let minutes = Math.floor(albums.tracks.data[i].duration / 60);
      let seconds = albums.tracks.data[i].duration - minutes * 60;
      let totalTime = minutes + ':' + seconds

      /* let i = 1 */
      row.innerHTML = `                
              <th class="TheaderText align-middle shortWidth p-1" scope="row"> ${i+1} </th>
              <td class="TheaderText align-middle p-1">${albums.tracks.data[i].title} <br /><a class="link text-secondary" href="/artist-page.html?id=${albums.artist.id}">${albums.artist.name}</a>
              </td>
              <td class="TheaderText align-middle text-right p-1">${totalTime}</td>
          `;
      table.appendChild(row)
      /*  i += 1 */  
      } 
      /* }); */
    })
  .catch((error) => console.log(error));
};

window.onload = () => {
   let params = new URLSearchParams(document.location.search); 
  let id = params.get("id"); 


  loadAlbum(id)

};

/* const searchBar = document.getElementById("searchBar")

searchBar.addEventListener("IdUp", (e) => {

}) */





  
  
  
  /* img.onclick = () => {
  window.location.assign("./details.html?picId=" + photo.id)
} */
