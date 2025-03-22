// enabling validation by calling enableValidation()
// pass all the settings on call

// function showInputError(formEl, inputEl, { inputErrorClass, errorClass }) {
//   const errorMessageEl = formEl.querySelector("#" + inputEl.id + "-error");
//   inputEl.classList.add(inputErrorClass);
//   errorMessageEl.textContent = inputEl.validationMessage;
//   errorMessageEl.classList.add(errorClass);
// }

// function hideInputError(formEl, inputEl, { inputErrorClass, errorClass }) {
//   const errorMessageEl = formEl.querySelector("#" + inputEl.id + "-error");
//   inputEl.classList.remove(inputErrorClass);
//   errorMessageEl.textContent = "";
//   errorMessageEl.classList.add(errorClass);
// }

// function checkInputValidity(formEl, inputEl, options) {
//   if (!inputEl.validity.valid) {
//     showInputError(formEl, inputEl, options);
//   } else {
//     hideInputError(formEl, inputEl, options);
//   }
// }

// function toggleButtonState(inputEls, submitButton, { inactiveButtonClass }) {
//   let foundInvalid = false;

//   inputEls.forEach((input) => {
//     if (!input.validity.valid) {
//       foundInvalid = true;
//     }
//   });
//   if (foundInvalid) {
//     submitButton.classList.add(inactiveButtonClass);
//     submitButton.disabled = true;
//   } else {
//     submitButton.classList.remove(inactiveButtonClass);
//     submitButton.disabled = false;
//   }
// }

// function setEventListener(formEl, options) {
//   const inputSelector = options.inputSelector;
//   const inputEls = [...formEl.querySelectorAll(inputSelector)];
//   const submitButton = formEl.querySelector(options.submitButtonSelector);
//   toggleButtonState(inputEls, submitButton, options);
//   inputEls.forEach((inputEl) => {
//     inputEl.addEventListener("input", (evt) => {
//       checkInputValidity(formEl, inputEl, options);
//       toggleButtonState(inputEls, submitButton, options);
//     });
//   });
// }

// function resetValidation(form, options) {
//   const inputEls = [...form.querySelectorAll(options.inputSelector)];
//   const submitButton = form.querySelector(options.submitButtonSelector);

//   inputEls.forEach((inputEl) => {
//     hideInputError(form, inputEl, options);
//     toggleButtonState(inputEls, submitButton, options);
//   });
// }

// function enableValidation(options) {
//   const formEls = [...document.querySelectorAll(options.formSelector)];
//   formEls.forEach((formEl) => {
//     formEl.addEventListener("submit", (evt) => {
//       evt.preventDefault();
//     });

//     setEventListener(formEl, options);
//   });
// }

// const config = {
//   formSelector: ".modal__form",
//   inputSelector: ".modal__input",
//   submitButtonSelector: ".modal__button",
//   inactiveButtonClass: "modal__button_disabled",
//   inputErrorClass: "modal__input_type_error",
//   errorClass: "modal__error_visible",
// };

// enableValidation(config);

// look for inputs
// loop through all the inputs to see if all are valid
// if input is not valid
// get validation message
// add error class to input
// show display error message
// disable button
// if all inputs are valid then
// enable button
// reset error messages
