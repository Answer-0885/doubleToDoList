import React, {useState} from "react"
import Card from "../UI/Card"
import Button from "../UI/Button"

import styles from "./CreateUser.module.css"
import ErrorModal from "../UI/ErrorModal"


const CreateUser = (props) => {

    const[inputName, setInputName] = useState(''); // где inputName - переменная состояния, а setInputName - функция.
    const[inputAge, setInputAge] = useState(''); // где inputAge - переменная состояния, а setInputAge - функция.
    const[error, setError] = useState(); // где error - переменная состояния, а setError - функция.

    const createUserHandler = (event) => {// Создаёт нового пользователя на основе введённых данных в поля.
           event.preventDefault();
           // Проверяем чтобы инпуты не были пустыми
           if(inputName.trim().length === 0 || inputAge.trim().length === 0){
            setError({
                title:'Некорректный ввод',
                message:'Эти поля не могут быть пустыми'
            })
            return;
           } 
           // Прверяем чтобы возраст не был меньше значения единицы
           if(+inputAge < 1){
            setError({
                title:'Некорректный возраст',
                message:'Возраст должен быть больше 0'
            })
            return;
           }
           // Стираем значения из переменных inputName и inputName в момент нажатия на кнопку Button;
          props.onCreateUser(inputName, inputAge)
           setInputName('');
           setInputAge('');
    };
    const nameChangeHandler = (event) => {// Эта функция отслеживает инпут name и записывает его значение в переменную inputName
        setInputName(event.target.value);
    }
    const ageChangeHandler = (event) => {// Эта функция отслеживает инпут age и записывает его значение в переменную inputAge
        setInputAge(event.target.value);
    }

    const errorHandler = () => {
        setError(false)
    }

   return (
    <div>
      {error && (
        <ErrorModal
          onCloseModal={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={createUserHandler}>
          <label htmlFor="name">Имя</label>
          <input
            id="name"
            type="text"
            onChange={nameChangeHandler}
            value={inputName}
          />
          <label htmlFor="age">Возраст</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={inputAge}
          />
          <Button type="submit">Добавить Пользователя</Button>
        </form>
      </Card>
    </div>
  );
}
export default CreateUser;