const openPopup = document.querySelector(".profile__article-edit-button");
const closePopup = document.querySelector(".pop-up__close");
const exitPopup = document.querySelector(".pop-up__button-save");
const popup = document.querySelector(".pop-up");
const formElement = document.querySelector(".pop-up__form");
const nameInput = document.querySelector(".pop-up__input_name");
const jobInput = document.querySelector(".pop-up__input_job");
const profileArticle = document.querySelector(".profile__article-title");
const job = document.querySelector(".profile__article-text");

openPopup.addEventListener("click", function () {
  popup.classList.add("pop-up__opened");
});

closePopup.addEventListener("click", function () {
  popup.classList.remove("pop-up__opened");
});

openPopup.addEventListener("click", function () {
nameInput.value = profileArticle.textContent;
jobInput.value = job.textContent;
});
exitPopup.addEventListener("click", function () {
  popup.classList.remove("pop-up__opened");
});

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameInput.value;
  jobInput.value; // Получите значение полей jobInput и nameInput из свойства value
  profileArticle.textContent = nameInput.value; // Выберите элементы, куда должны быть вставлены значения полей
  job.textContent = jobInput.value;  // Вставьте новые значения с помощью textContent

}
formElement.addEventListener("submit", handleFormSubmit);


