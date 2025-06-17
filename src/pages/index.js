import Card from "../components/card.js";
import FormValidator from "../components/FormValidator.js";
import "../pages/index.css";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import initialCards from "../utils/Constants.js";
/* --------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*                                                         Elements                                                                                        */
/* --------------------------------------------------------------------------------------------------------------------------------------------------------*/

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const addCardModal = document.querySelector("#card-edit-modal");
const profileModalCloseButton = profileEditModal.querySelector(
  "#modal-close-button"
);
const addCardModalCloseButton = addCardModal.querySelector(
  "#modal-close-button"
);

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const titleInput = document.querySelector("#profile-title-input");
const descriptionInput = document.querySelector("#profile-description-input");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const addCardFormElement = addCardModal.querySelector(".modal__form");

const cardsWrap = document.querySelector(".cards__list");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const addNewCardButton = document.querySelector(".profile__add-button");

// const nameInput = profileEditForm.querySelector(".modal__input_type_title");
// const jobInput = profileEditForm.querySelector(".modal__input_type_url");
const nameInput = profileEditForm.querySelector("#profile-title-input");
const jobInput = profileEditForm.querySelector("#profile-description-input");
const cardTitleInput = addCardFormElement.querySelector(
  ".modal__input_type_title"
);
const cardUrlInput = addCardFormElement.querySelector(".modal__input_type_url");
const previewImageModalWindow = document.querySelector("#preview-modal");
const previewImageElement = document.querySelector(".modal__preview-image");
const previewImageCloseButton = previewImageModalWindow.querySelector(
  "#modal-close-button"
);
const imageCaption = document.querySelector(".modal__image-caption");
const closeButtons = document.querySelectorAll(".modal__close");

/* --------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*                                                         Validation                                                                                        */
/* --------------------------------------------------------------------------------------------------------------------------------------------------------*/
const validationSettings = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const editFormValidator = new FormValidator(
  validationSettings,
  profileEditForm
);
editFormValidator.enableValidation();
const addFormValidator = new FormValidator(
  validationSettings,
  addCardFormElement
);
addFormValidator.enableValidation();

/* --------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*                                                         Functions                                                                                        */
/* --------------------------------------------------------------------------------------------------------------------------------------------------------*/

function renderCard(cardData) {
  const cardElement = createCard(cardData);
  cardList.addItem(cardElement);
}

const editProfileModal = new PopupWithForm({
  popupSelector: "#profile-edit-modal",
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
    editProfileModal.close();
  },
});

editProfileModal.setEventListeners();

// popup with image instance for the prview modal
const previewModal = new PopupWithImage("#preview-modal");

const addCardPopup = new PopupWithForm({
  popupSelector: "#card-edit-modal",
  handleFormSubmit: (data) => {
    renderCard(data);

    // reset form
    addCardFormElement.reset();

    // disable button
    addFormValidator.disableSubmitButton();
  },
});

previewModal.setEventListeners();
addCardPopup.setEventListeners();

const addFormButton = document.querySelector(".profile__add-button");

addFormButton.addEventListener("click", () => addCardPopup.open());

const openEditModal = () => {
  const currentUserInfo = userInfo.getUserInfo();
  titleInput.value = currentUserInfo.title;
  descriptionInput.value = currentUserInfo.description;

  editFormValidator.resetValidation();

  editProfileModal.open();
};

const openEditFormButton = document.querySelector(".profile__edit-button");

openEditFormButton.addEventListener("click", openEditModal);

const createCard = (data) => {
  const { name, link } = data;
  const card = new Card(data, "#card-template", () => {
    previewModal.open(name, link);
  });
  return card.getView();
};

const cardList = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      renderCard(data);
    },
  },
  ".cards__list"
);

cardList.renderItems(initialCards);

const userInfo = new UserInfo({
  profileTitleSelector: ".profile__title",
  profileDescriptionSelector: ".profile__description",
});

// initialCards.forEach((cardData) => {
//   renderCard(cardData, cardsWrap);
// });
