// add event listener to form
document
  .getElementById("inputForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // collect input variables
    let destinationName = document.getElementById("destinationName").value;
    let location = document.getElementById("location").value;
    let photoURL = document.getElementById("photo").value;
    let description = document.getElementById("description").value;

    // create new card div
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
    document.querySelector("h4").textContent = "My WishList";

    // append card to container
    document.getElementById("cardContainer").appendChild(newCard);

    // clear the form
    document.querySelector("form").reset();
  });

// add event listener to remove button & edit button
document.getElementById("cardContainer").addEventListener("click", (event) => {
  // create variable for card element
  let card = event.target.parentNode.parentNode.parentNode.parentNode;
  // if the element is a remove button, remove the parent card element
  if (event.target.classList.contains("btn-danger")) {
    card.remove();
  }
  // if the element is an edit button, offer edits via prompt for each field
  else if (event.target.classList.contains("btn-warning")) {
    // offer edit for destination name
    let newName = prompt("Enter new name");
    card.querySelector(".card-destination").textContent = newName;
    // offer edit for location
    let newLocation = prompt("Enter new location");
    card.querySelector(".card-location").textContent = newLocation;
    // offer edit for photoURL
    let newPhoto = prompt("Enter new photo url");
    console.log(newPhoto);
    card.querySelector("img").setAttribute("src", newPhoto);
    // offer edit for description
    let newDescription = prompt("Enter new description");
    card.querySelector(".card-description").textContent = newDescription;
  }
});
