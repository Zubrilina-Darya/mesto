const buttonOpenPopupProfile = document.querySelector(
  ".profile__article-edit-button"
);
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
const buttonClosePopupProfile = popupProfile.querySelector(".popup__close");
const buttonClosePopupNewPlace = popupNewPlace.querySelector(".popup__close");
const buttonClosePopupZoom = popupZoom.querySelector(".popup__close");

const inputPlaceName = popupNewPlace.querySelector(".popup__input_value_title");
const inputPlaceLink = popupNewPlace.querySelector(".popup__input_value_link");
const buttonSavePopupNewPlace = popupNewPlace.querySelector(
  ".popup__button-save"
);
const popupNewPlaceForm = popupNewPlace.querySelector(".popup__form_type_item");
const img = popupZoom.querySelector(".popup__image");
const signatureZoom = popupZoom.querySelector(".popup__image-signature");

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  // Получите значение полей jobInput и nameInput из свойства value
  profileArticle.textContent = nameInput.value; // Выберите элементы, куда должны быть вставлены значения полей
  job.textContent = jobInput.value; // Вставьте новые значения с помощью textContent
  closePopup(popup);
}
formElement.addEventListener("submit", handleFormSubmit);

buttonOpenPopupProfile.addEventListener("click", () => {
  openPopup(popupProfile);
  nameInput.value = profileArticle.textContent;
  jobInput.value = job.textContent;
});
buttonClosePopupProfile.addEventListener("click", () => {
  closePopup(popupProfile);
});
addButton.addEventListener("click", () => {
  openPopup(popupNewPlace);
});
buttonClosePopupNewPlace.addEventListener("click", () => {
  closePopup(popupNewPlace);
});
buttonClosePopupZoom.addEventListener("click", () => {
  closePopup(popupZoom);
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
  cardsContainer.prepend(createCard(cardInfo));
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
  renderCard(newPlace);
  closePopup(popupNewPlace);
  inputPlaceName.value = "";
  inputPlaceLink.value = "";
};
popupNewPlaceForm.addEventListener("submit", handleNewPlace);

function handleOpenZoomPopup(imgSrc, text) {
  //popupZoom.classList.add("popup_opened");

  img.src = imgSrc;
  //const signatureZoom = popupZoom.querySelector(".popup__image-signature");
  signatureZoom.textContent = text;
  img.alt = text;
  openPopup(popupZoom);
}
