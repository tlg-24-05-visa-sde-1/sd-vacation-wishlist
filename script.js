// imports
import {
  createCard,
  alterHeading,
  appendCard,
  storeCard,
  clearForm,
} from "./js-modules/card.js";

import {
  findCard,
  updateName,
  updateLocation,
  updatePhoto,
  updateDescription,
} from "./js-modules/card-buttons.js";

// log test for unsplash api
fetch(
  `https://api.unsplash.com/photos/random?client_id=WchHdiSHbO997Zv97fP8xU1xTFo6v2d9T2K4U7kbZUk`
)
  .then((response) => response.json())
  .then((data) => console.log(data.urls.regular));

// add event listener to check local storage when browser is refreshed
window.addEventListener("load", () => {
  // if local storage is not empty,
  if (localStorage.cards.length > 0) {
    console.log(localStorage.cards);
    // keep altered heading
    alterHeading();

    // parse array
    let cardArray = JSON.parse(localStorage.cards);

    // for each stored card
    for (let i = 0; i < cardArray.length; i++) {
      // parse the card
      let storedCard = cardArray[i];
      // create card
      let displayCard = createCard(storedCard);
      // append to container
      appendCard(displayCard);
    }
  }
});

// add event listener to form
document
  .getElementById("inputForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // collect input variables
    let destinationName = document.getElementById("destinationName").value;
    let location = document.getElementById("location").value;
    let description = document.getElementById("description").value;

    let cardProperties = { destinationName, location, description };

    // create new card div
    let newCard = createCard({
      destinationName,
      location,
      description,
    });

    /* CARD CREATION STEPS
    // create img
    // let newImage = document.createElement("img");
    // newImage.setAttribute("class", "card-img-top");
    // newImage.setAttribute("src", photoURL);
    // newImage.setAttribute("alt", "Card image cap");
    // newCard.appendChild(newImage);

    // create card body div
    // let newCardBody = document.createElement("div");
    // newCardBody.setAttribute("class", "card-body");
    // newCard.appendChild(newCardBody);

    // create h5 (destination)
    // let newDestinationTitle = document.createElement("h5");
    // newDestinationTitle.setAttribute("class", "card-destination");
    // newDestinationTitle.textContent = destinationName;
    // newCardBody.appendChild(newDestinationTitle);

    // create h6 (location)
    // let newLocation = document.createElement("h6");
    // newLocation.setAttribute("class", "card-location");
    // newLocation.textContent = location;
    // newCardBody.appendChild(newLocation);

    // create p (description)
    // let newDescription = document.createElement("p");
    // newDescription.setAttribute("class", "card-description");
    // newDescription.textContent = description;
    // newCardBody.appendChild(newDescription);

    // create div for buttons
    // let buttonContainer = document.createElement("div");
    // buttonContainer.setAttribute("class", "card-buttons row");
    // newCardBody.appendChild(buttonContainer);

    // create span for left button (edit)
    // let editButtonSpan = document.createElement("span");
    // editButtonSpan.setAttribute("class", "col-md-6");
    // editButtonSpan.setAttribute("id", "edit-btn");
    // let editButton = document.createElement("button");
    // editButton.setAttribute("class", "btn btn-warning");
    // editButton.textContent = "Edit";
    // editButtonSpan.appendChild(editButton);
    // buttonContainer.appendChild(editButtonSpan);

    // create span for right button (remove)
    // let removeButtonSpan = document.createElement("span");
    // removeButtonSpan.setAttribute("class", "col-md-6");
    // removeButtonSpan.setAttribute("id", "remove-btn");
    // let removeButton = document.createElement("button");
    // removeButton.setAttribute("class", "btn btn-danger");
    // removeButton.textContent = "Remove";
    // removeButtonSpan.appendChild(removeButton);
    // buttonContainer.appendChild(removeButtonSpan);
*/

    // alter card container heading
    alterHeading();

    // append card to container
    appendCard(newCard);

    // add card properties to local storage
    storeCard(cardProperties);

    // clear the form
    clearForm();
  });

// add event listener to remove button & edit button
document.getElementById("cardContainer").addEventListener("click", (event) => {
  // create variable for card element
  let card = findCard(event);

  // if the element is a remove button, remove the parent card element
  if (event.target.classList.contains("btn-danger")) {
    card.remove();
  }
  // if the element is an edit button, offer edits via prompt for each field
  else if (event.target.classList.contains("btn-warning")) {
    // offer edit for destination name
    let newName = prompt("Enter new name");
    updateName(card, newName);

    // offer edit for location
    let newLocation = prompt("Enter new location");
    updateLocation(card, newLocation);

    // offer edit for photoURL
    let newPhoto = prompt("Enter new photo url");
    updatePhoto(card, newPhoto);

    // offer edit for description
    let newDescription = prompt("Enter new description");
    updateDescription(card, newDescription);
  }
});
