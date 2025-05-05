import Card from "../components/card.js";
import FormValidator from "../components/FormValidator.js";
import "../pages/index.css";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

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
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
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

// const editFormValidator = new FormValidator();
// editFormValidator.enableValidation();

/* --------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*                                                         Functions                                                                                        */
/* --------------------------------------------------------------------------------------------------------------------------------------------------------*/

function renderCard(cardData) {
  const cardElement = createCard(cardData);
  cardsWrap.prepend(cardElement);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardsWrap);
  closePopup(addCardModal);
  addCardFormElement.reset();

  addFormValidator.resetValidation();
}

// function createCard(cardData) {
//   const card = new Card(cardData, "#card-template", handleImageClick);
//   return card.getView();
// }

const editProfileModal = new PopupWithForm({
  popupSelector: "#profile-edit-modal",
  handleFormSubmit: () => {
    console.log("submitting form");
  },
});

editProfileModal.setEventListeners();

// popup with image instance for the prview modal
const previewModal = new PopupWithImage("#preview-modal");

const openEditModal = () => {
  const currentUserInfo = userInfo.getUserInfo();
  titleInput.value = currentUserInfo.userName;
  descriptionInput.value = currentUserInfo.userDescription;

  editFormValidator.resetValidation();

  // profileFormValidator.resetValidation();

  editProfileModal.open();
};

const openEditFormButton = document.querySelector(".profile__edit-button");

openEditFormButton.addEventListener("click", openEditModal);

// profileEditButton.addEventListener("click", openEditModal);

const createCard = (data) => {
  const { name, link } = data;
  const card = new Card(data, "#card-template", () => {
    previewModal.open(name, link);
  });
  return card.getView();
};

// cardImageEl.src = cardData.link;
// cardImageEl.alt = cardData.name;

// cardImageEl.addEventListener("click", function () {
// previewImageElement.src = cardData.link;
// previewImageElement.alt = cardData.name;
// openModal(previewImageModalWindow);
// imageCaption.textContent = cardData.name;
// });

// return cardElement;

function handleImageClick(link, name) {
  previewImageElement.src = link;
  previewImageElement.alt = name;
  imageCaption.textContent = name;
  openModal(previewImageModalWindow);
}

// function closePopup(modal) {
//   modal.classList.remove("modal_opened");
//   document.removeEventListener("keydown", closeModalEsc);
//   modal.removeEventListener("mousedown", closeOverlay);
// }

// function openModal(modal) {
//   modal.classList.add("modal_opened");
//   document.addEventListener("keydown", closeModalEsc);
//   modal.addEventListener("mousedown", closeOverlay);
// }

// function closeOverlay(e) {
//   if (e.target.classList.contains("modal")) {
//     closePopup(e.target);
//   }
// }

// function closeModalEsc(e) {
//   if (e.key === "Escape") {
//     const modalOpened = document.querySelector(".modal_opened");
//     closePopup(modalOpened);
//   }
// }

// function closeModalByOverlay(evt) {
//   if (evt.target.classList.contains("modal")) {
//     closeModal(evt.target);
//   }
// }
const userInfo = new UserInfo({
  profileTitleSelector: ".profile__title",
  profileDescriptionSelector: ".profile__description",
});

/* --------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*                                                         Event Listeners                                                                                        */
/* --------------------------------------------------------------------------------------------------------------------------------------------------------*/

// profileEditButton.addEventListener("click", () => {
//   profileTitleInput.value = profileTitle.textContent;
//   profileDescriptionInput.value = profileDescription.textContent;
//   openModal(profileEditModal);
// });

// profileEditForm.addEventListener("submit", handleProfileFormSubmit);
// addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);

initialCards.forEach((cardData) => {
  renderCard(cardData, cardsWrap);
});

// addNewCardButton.addEventListener("click", () => openModal(addCardModal));

// closeButtons.forEach((button) => {
//   const popup = button.closest(".modal");
//   button.addEventListener("click", () => closePopup(popup));
// });
