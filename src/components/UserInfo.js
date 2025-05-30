export default class UserInfo {
  constructor({ profileTitleSelector, profileDescriptionSelector }) {
    // this variable holds the element
    // with the class profile__title
    this._profileTitleElement = document.querySelector(profileTitleSelector);

    // This variable will hold the element
    // with the class profile__description
    this._profileDescriptionElement = document.querySelector(
      profileDescriptionSelector
    );
  }
  setUserInfo({ title, description }) {
    this._profileTitleElement.textContent = title;
    this._profileDescriptionElement.textContent = description;
  }
  getUserInfo() {
    return {
      title: this._profileTitleElement.textContent,
      description: this._profileDescriptionElement.textContent,
    };
  }
}
