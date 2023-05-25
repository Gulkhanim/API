
// const myPromise = new Promise((resolve, reject)=>{
//   let res = '';
//   if(res){
//     resolve('data recived with success')
//   } else{
// reject('no data')
//   }
// })
//   myPromise.then((hira)=>console.log('then', hira)).catch((hira)=>console.log('err', hira))


// const hiraPromise = new Promise((resolve,reject)=>{
//   let test = "gulu";
//   if(test){
//     resolve("have  data");
//   }else{
//     reject("no data")
//   }
// });

// hiraPromise.then((book)=>console.log("then", book)).catch((book)=>console.log("error",book))





const searchBtn = document.querySelector("#searchBtn");
let movies = document.querySelector("#movies");


function showMovie (movie) {
  const  { Title, Poster, Awards, Year, Country } = movie;

  const contentEl = document.querySelector(".container");

  contentEl.innerHTML = `<div>
  <img height="200" src="${Poster}" />
  <h1>${Title}</h1>
  <p>${Awards}</p>
  <p>${Year}</p>
  <p>${Country}</p>
  

</div>` ;
}

searchBtn.addEventListener("click", function () {
  
  console.log("movies",movies.value);

  const myPromise = fetch(`http://www.omdbapi.com/?apikey=c974827&t=${movies.value}`);

  myPromise
  .then((response) => {
    const mySecond = response.json();
    return mySecond;
  
  })
  
  .then((data) => {
  
    if (data?.Response === "False") {
      alert("NOT FOUND!!!");
      return;
    }
  console.log("data", data);

  showMovie(data);
  })
  .catch((err) => {
    console.log("err", err);
  });

  movies.value = "";
});