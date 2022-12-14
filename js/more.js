
const title = document.querySelector(".title");
const container = document.querySelector(".row");
const signOut = document.querySelector(".signOut")

window.addEventListener("load", () => {
  const ninja = JSON.parse(localStorage.getItem("ninjaId"))
  document.title = ninja.name

  card(ninja)
})


function card(ninja) {
  const template = `
  <div class="card">
    <h2>${ninja.name}</h2>

    <img src="${ninja.image}" alt=""/>

    <div class="card-body">
      <div>
        <h4>Clan</h4>
        <span>${ninja.clan}</span>
      </div>
      <div>
        <h4>Level</h4>
        <span>${ninja.level}</span>
      </div>
      <div>
        <h4>Village</h4>
        <span>${ninja.village}</span>
      </div>
      <div>
        <h4>Power</h4>
        <span>${ninja.power}</span>
      </div>
    </div>
  </div>
  `

  container.innerHTML = template

}

signOut.addEventListener("click", () => {
  localStorage.setItem("isAuth","true")
  window.open("../index.html", "_self")
})