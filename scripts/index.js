const openPopup = document.querySelector(".profile__article-edit-button");
const closePopup = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");
let formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_value_name");
const jobInput = document.querySelector(".popup__input_value_job");
const profileArticle = document.querySelector(".profile__article-title");
const job = document.querySelector(".profile__article-text");

function ClosePopup() {
  popup.classList.remove("popup__opened");
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  // Получите значение полей jobInput и nameInput из свойства value
  profileArticle.textContent = nameInput.value; // Выберите элементы, куда должны быть вставлены значения полей
  job.textContent = jobInput.value; // Вставьте новые значения с помощью textContent
  ClosePopup();
}
formElement.addEventListener("submit", handleFormSubmit);
openPopup.addEventListener("click", function (openPopup) {
  popup.classList.add("popup__opened");
  nameInput.value = profileArticle.textContent;
  jobInput.value = job.textContent;
});

closePopup.addEventListener("click", function (closePopup) {
  popup.classList.remove("popup__opened");
});
