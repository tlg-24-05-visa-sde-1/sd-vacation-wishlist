export function findCard(event) {
  return event.target.closest(".card");
}

export function updateName(card, newName) {
  if (newName.length > 0) {
    card.querySelector(".card-destination").textContent = newName;
  }
}

export function updateLocation(card, newLocation) {
  if (newLocation.length > 0) {
    card.querySelector(".card-location").textContent = newLocation;
  }
}

export function updatePhoto(card, newPhoto) {
  if (newPhoto.length > 0) {
    card.querySelector("img").setAttribute("src", newPhoto);
  }
}

export function updateDescription(card, newDescription) {
  if (newDescription.length > 0) {
    card.querySelector(".card-description").textContent = newDescription;
  }
}
