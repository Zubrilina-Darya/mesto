const openPopup = document.querySelector(".profile__article-edit-button");
const popup = document.querySelector(".popup");
const formElement = document.querySelector(".popup__form_type_profile");
const nameInput = document.querySelector(".popup__input_value_name");
const jobInput = document.querySelector(".popup__input_value_job");
const profileArticle = document.querySelector(".profile__article-title");
const job = document.querySelector(".profile__article-text");
const addButton = document.querySelector(".profile__add-button");

//попапы
const popupProfile = document.querySelector(".popup_type_profile");
const popupNewPlace = document.querySelector(".popup_type_item");
const popupZoom = document.querySelector(".popup_type_zoom");
const closePopupProfileButton = popupProfile.querySelector(".popup__close");
const closePopupNewPlaceButton = popupNewPlace.querySelector(".popup__close");
const closePopupZoom = popupZoom.querySelector(".popup__close");

const inputPlaceName = popupNewPlace.querySelector(".popup__input_value_title");
const inputPlaceLink = popupNewPlace.querySelector(".popup__input_value_link");
const popupNewPlaceSaveButton = popupNewPlace.querySelector(
  ".popup__button-save"
);
const popupNewPlaceForm = popupNewPlace.querySelector(".popup__form_type_item");

function ClosePopup(popup) {
  popup.classList.remove("popup_opened");
}
function OpenPopup(popup) {
  popup.classList.add("popup_opened");
  nameInput.value = profileArticle.textContent;
  jobInput.value = job.textContent;
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  // Получите значение полей jobInput и nameInput из свойства value
  profileArticle.textContent = nameInput.value; // Выберите элементы, куда должны быть вставлены значения полей
  job.textContent = jobInput.value; // Вставьте новые значения с помощью textContent
  ClosePopup(popup);
}
formElement.addEventListener("submit", handleFormSubmit);

openPopup.addEventListener("click", () => {
  OpenPopup(popupProfile);
});
closePopupProfileButton.addEventListener("click", () => {
  ClosePopup(popupProfile);
});
addButton.addEventListener("click", () => {
  OpenPopup(popupNewPlace);
});
closePopupNewPlaceButton.addEventListener("click", () => {
  ClosePopup(popupNewPlace);
});
closePopupZoom.addEventListener("click",  () => {
  ClosePopup(popupZoom);
});

//Массив
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
//Новая карточка
const cardsContainer = document.querySelector(".elements");
const template = document.querySelector("#element-template");
const createCard = (cardInfo) => {
  const newCard = template.content.querySelector(".element").cloneNode(true);
  const img = newCard.querySelector(".element__image");
  img.src = cardInfo.link;
  img.alt = cardInfo.name;
  img.addEventListener("click", () =>
    handleOpenZoomPopup(cardInfo.link, cardInfo.name)
  );
  const titleElement = newCard.querySelector(".element__title");
  titleElement.textContent = cardInfo.name;

  const removeBtn = newCard.querySelector(".element__delete");
  const removeHandler = () => {
    newCard.remove();
  };
  removeBtn.addEventListener("click", removeHandler);

  const likeBtn = newCard.querySelector(".element__like");
  const likeHandler = () => {
    newCard
      .querySelector(".element__like")
      .classList.toggle("element__like_active");
  };
  likeBtn.addEventListener("click", likeHandler);
  return newCard;
};

const renderCard = (cardInfo) => {
  cardsContainer.append(createCard(cardInfo));
};
initialCards.forEach((item) => {
  renderCard(item);
});

//добавление фото

const handleNewPlace = (evt) => {
  evt.preventDefault();
  const newPlace = {};
  newPlace.name = inputPlaceName.value;
  newPlace.link = inputPlaceLink.value;

  inputPlaceName.value = "";
  inputPlaceLink.value = "";
  renderCard(newPlace);
  ClosePopup(popupNewPlace);
};
popupNewPlaceForm.addEventListener("submit", handleNewPlace);

function handleOpenZoomPopup(imgSrc, text) {
  popupZoom.classList.add("popup_opened");
  const img = popupZoom.querySelector(".popup__image");
  img.src = imgSrc;
  const signatureZoom = popupZoom.querySelector(".popup__image-signature");
  signatureZoom.textContent = text;
}
