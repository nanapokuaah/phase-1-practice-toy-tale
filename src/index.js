let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  getToys()
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

toyForm.addEventListener('submit',(e) =>{
  e.preventDefault();
  console.log(e.target.image.value, e.target.name.value)
})

function getToys(){
  fetch ('http://localhost:3000/toys')
.then(function(response){
  return response.json();
})
.then(function(data){
  data.map(t => renderToy(t))
  console.log(data)
})
}

function renderToy(toy){
  const toyCard = `<div class="card">
  <h2>${toy.name}</h2>
  <img src=${toy.image} class="toy-avatar" />
  <p>${toy.likes}Likes </p>
  <button class="like-btn">Like <3</button>
</div>`

const toyBox = document.getElementById('toy-collection')
toyBox.innerHTML += toyCard
}

function postToy(name, url)  {
  fetch('http://localhost:3000/toys',{
    method: 'POST',
headers: {

  "Content-Type": "application/json",
  Accept: "application/json"
},
body: JSON.stringify({
  "name": "Jessie",
  "image": "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
  "likes": 0
})
})
}