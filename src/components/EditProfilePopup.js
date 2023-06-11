import React from "react";
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from '../context/CurrentUserContext';

function EditProfilePopup(props){

  const currentUser = React.useContext(CurrentUserContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    e.target.lastChild.textContent = "Сохранение..."
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name: name,
      about: description,
    },e);
  } 

  return (
  <PopupWithForm onSubmit={handleSubmit} onClose={props.onClose} isOpen={props.isOpen} id="edit-profile" specialDelete={false} question={false} title="Редактировать профиль" name="editProfile" buttonText="Сохранить">
    <input value={name || ""} onChange={handleChangeName} id="edit-name" minLength="2" maxLength="40" required placeholder="Имя" name="name" className="form__field" type="text" />
    <span className="popup__error edit-name-error"></span>
    <input value={description || ""} onChange={handleChangeDescription} id="edit-job" minLength="2" maxLength="200" required placeholder="Работа" name="about" className="form__field" type="text" />
    <span className="popup__error edit-job-error"></span>
  </PopupWithForm>)
}

export default EditProfilePopup;