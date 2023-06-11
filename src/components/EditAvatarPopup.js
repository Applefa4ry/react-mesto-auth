import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props){
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    e.target.lastChild.textContent = "Сохранение..."
    props.onUpdateAvatar(avatarRef.current.value,e);
  }

  return (
  <PopupWithForm onSubmit={handleSubmit} onClose={props.onClose} isOpen={props.isOpen} id="edit-avatar" specialDelete={false} question={false} title="Обновить аватар" name="editAvatar" buttonText="Сохранить">
    <input ref={avatarRef} id="edit-url-avatar" required name="link" className="form__field" placeholder="Ссылка на картинку" type="url" />
    <span className="popup__error edit-url-avatar-error"></span>
  </PopupWithForm>)
}

export default EditAvatarPopup;