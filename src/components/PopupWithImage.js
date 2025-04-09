import Popup from "./components/Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._imageEl = this._popupElement.querySelector(".modal__preview-image");
    this._captionEl = this._popupElement.querySelector(".modal__image-caption");
  }
  open(name, link) {
    this._imageEl.src = link;
    this._captionEl.textContent = name;
    super(open);
  }
}
