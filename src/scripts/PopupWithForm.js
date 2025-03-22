import Popup from "./scripts/Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  close() {
    this._popupForm.reset();
  }
}

//i
const newCardPopup = new PopupWithForm("#card-edit-modal", () => {});
newCardPopup.open();

newCardPopup.close();
