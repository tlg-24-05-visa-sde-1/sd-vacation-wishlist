export function createCard({
  photoURL,
  destinationName,
  location,
  description,
}) {
  let newCard = document.createElement("div");
  newCard.className = "card";
  newCard.innerHTML = `
      <img class="card-img-top" src=${photoURL} alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-destination">${destinationName}</h5>
        <h6 class="card-location">${location}</h6>
        <p class="card-description">${description}</p>
        <div class="card-buttons row">
          <span class="col-md-6" id="edit-btn"><button class="btn btn-warning">Edit</button></span>
          <span class="col-md-6" id="remove-btn"><button class="btn btn-danger">Remove</button></span>
        </div>
      </div>
      `;
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
