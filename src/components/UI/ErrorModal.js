import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
import React from "react";
// Подключаем чтобы создать портал
import ReactDOM from "react-dom";

// Описание работы заднего фона модального окна
const Backdrop = (props)=> {
  return <div className={styles.backdrop} onClick={props.onCloseModal}></div>
}
// Описание работы модального окна
const Modal = (props) => {
  return(
    <Card className={styles.modal}>
    <header className={styles.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={styles.content}>
      <p>{props.message}</p>
    </div>
    <footer className={styles.actions}>
      <Button onClick={props.onCloseModal}>Закрыть</Button>
    </footer>
  </Card>
  )
}

const ErrorModal = (props) => {
  return (
    <React.Fragment>
             {/* Создаём порталы для заднего фона окна */}
      {ReactDOM.createPortal(<Backdrop onCloseModal={props.onCloseModal}/>, document.getElementById('backdrop'))}
             {/* Создаём порталы для модального окна */}
      {ReactDOM.createPortal(<Modal title={props.title} message={props.message} onCloseModal={props.onCloseModal}/>, document.getElementById('modal'))}
    </React.Fragment>
  );
};

export default ErrorModal;
