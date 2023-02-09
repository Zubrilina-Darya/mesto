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
const popupItem = document.querySelector(".popup_type_item");
const popupZoom = document.querySelector("popup_type_zoom");
const closePopupProfileButton = popupProfile.querySelector(".popup__close");
const closePopupItemButton = popupItem.querySelector(".popup__close");

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
  OpenPopup(popupItem);
});
closePopupItemButton.addEventListener("click", () => {
  ClosePopup(popupItem);
});


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

const cardsContainer = document.querySelector(".elements");
const template = document.querySelector("#element-template");
const createCard = (cardInfo) => {
  const newCard = template.content.querySelector(".element").cloneNode(true);
  const img = newCard.querySelector(".element__image");
  img.src = cardInfo.link;
  img.alt = cardInfo.name;

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
      .classList.toggle(".element__like_active");
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
