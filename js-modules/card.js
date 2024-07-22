async function getPhoto(card) {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=WchHdiSHbO997Zv97fP8xU1xTFo6v2d9T2K4U7kbZUk`
  );

  const data = await response.json();
  const photo = data.urls.regular;
  card.querySelector(".card-img-top").setAttribute("src", photo);
}

export function createCard({ destinationName, location, description }) {
  let newCard = document.createElement("div");
  newCard.className = "card";
  newCard.innerHTML = `
      <img class="card-img-top" src="./images/Austin.jpg" alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-destination">${destinationName}</h5>
        <h6 class="card-location">${location}</h6>
        <p class="card-description">${description}</p>
        <div class="card-buttons row">
          <span class="col-md-6 edit-btn"><button class="btn btn-warning">Edit</button></span>
          <span class="col-md-6 remove-btn"><button class="btn btn-danger">Remove</button></span>
        </div>
      </div>
      `;
  getPhoto(newCard);
  return newCard;
}

export function alterHeading() {
  document.querySelector("h4").textContent = "My WishList";
}

export function appendCard(newCard) {
  document.getElementById("cardContainer").appendChild(newCard);
}

export function storeCard(cardProperties) {
  // if local storage is empty, generate empty array
  if (localStorage.getItem("cards") === null) {
    localStorage.setItem("cards", "[]");
  }

  // collect any existing cards
  let existingCards = JSON.parse(localStorage.getItem("cards"));

  // add new card
  existingCards.push(cardProperties);

  // stringify updated array
  existingCards = JSON.stringify(existingCards);

  // update local storage
  localStorage.setItem("cards", existingCards);
}

export function clearForm() {
  document.querySelector("form").reset();
}
