// add event listener to form
document
  .getElementById("inputForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // collect user input values
    let destinationName = document.getElementById("destinationName").value;
    let location = document.getElementById("location").value;
    let photoURL = document.getElementById("photo").value;
    let description = document.getElementById("description").value;

    // create new card div
    let newCard = document.createElement("div");
    newCard.setAttribute("class", "card");

    // create img
    let newImage = document.createElement("img");
    newImage.setAttribute("class", "card-img-top");
    newImage.setAttribute("src", photoURL);
    newImage.setAttribute("alt", "Card image cap");
    newCard.appendChild(newImage);

    // create card body div
    let newCardBody = document.createElement("div");
    newCardBody.setAttribute("class", "card-body");
    newCard.appendChild(newCardBody);

    // create h5 (destination)
    let newDestinationTitle = document.createElement("h5");
    newDestinationTitle.setAttribute("class", "card-destination");
    newDestinationTitle.textContent = destinationName;
    newCardBody.appendChild(newDestinationTitle);

    // create h6 (location)
    let newLocation = document.createElement("h6");
    newLocation.setAttribute("class", "card-location");
    newLocation.textContent = location;
    newCardBody.appendChild(newLocation);

    // create p (description)
    let newDescription = document.createElement("p");
    newDescription.setAttribute("class", "card-description");
    newDescription.textContent = description;
    newCardBody.appendChild(newDescription);

    // create div for buttons
    let buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("class", "card-buttons row");
    newCardBody.appendChild(buttonContainer);

    // create span for left button (edit)
    let editButtonSpan = document.createElement("span");
    editButtonSpan.setAttribute("class", "col-md-6");
    editButtonSpan.setAttribute("id", "edit-btn");
    let editButton = document.createElement("button");
    editButton.setAttribute("class", "btn btn-warning");
    editButton.textContent = "Edit";
    editButtonSpan.appendChild(editButton);
    buttonContainer.appendChild(editButtonSpan);

    // create span for right button (remove)
    let removeButtonSpan = document.createElement("span");
    removeButtonSpan.setAttribute("class", "col-md-6");
    removeButtonSpan.setAttribute("id", "remove-btn");
    let removeButton = document.createElement("button");
    removeButton.setAttribute("class", "btn btn-danger");
    removeButton.textContent = "Remove";
    removeButtonSpan.appendChild(removeButton);
    buttonContainer.appendChild(removeButtonSpan);

    // alter card container heading
    document.querySelector("h4").textContent = "My WishList";

    // append card to container
    document.getElementById("cardContainer").appendChild(newCard);

    // clear the form
    document.querySelector("form").reset();
  });
