// creating a card
/*
<div class="card" style="width: 18rem">
            <img class="card-img-top" src="..." alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
*/

// collect variables
document
  .getElementById("inputForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // collect user input values
    let destinationName = document.getElementById("destinationName").value;
    let location = document.getElementById("location").value;
    let photo = document.getElementById("photo").value;
    let description = document.getElementById("description").value;

    // create new card
    let newCard = document.createElement("div");
    newCard.setAttribute("class", "card");

    // append card to container
    document.getElementById("cardContainer").appendChild(newCard);

    // clear the form
    document.querySelector("form").reset();
  });

// add event listener to form
