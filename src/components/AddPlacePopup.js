import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props){
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    e.target.lastChild.textContent = "Создание..."
    
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onAddNewCard({
      name: name,
      link: link,
    },e)
  }

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [props.isOpen]);
  
  return (
    <PopupWithForm onSubmit={handleSubmit} onClose={props.onClose} isOpen={props.isOpen} id="edit-place" specialDelete={false} question={false} title="Новое место" name="addCard" buttonText="Создать">
          <input onChange={handleChangeName} id="edit-title" minLength="2" maxLength="30" required name="name" className="form__field" placeholder="Название" type="text" />
          <span className="popup__error edit-title-error"></span>
          <input onChange={handleChangeLink} id="edit-url" required name="link" className="form__field" placeholder="Ссылка на картинку" type="url" />
          <span className="popup__error edit-url-error"></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup;