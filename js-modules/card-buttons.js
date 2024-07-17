export function findCard(event) {
  return event.target.closest(".card");
}

export function updateName(card, newName) {
  card.querySelector(".card-destination").textContent = newName;
}

export function updateLocation(card, newLocation) {
  card.querySelector(".card-location").textContent = newLocation;
}

export function updatePhoto(card, newPhoto) {
  card.querySelector("img").setAttribute("src", newPhoto);
}

export function updateDescription(card, newDescription) {
  card.querySelector(".card-description").textContent = newDescription;
}
