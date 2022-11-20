import Card from "../UI/Card"
import styles from "./CreateUser.module.css"
import Button from "../UI/Button"
import React, {useState} from "react"

const CreateUser = (props) => {

    const[inputName, setInputName] = useState(''); // где inputName - переменная состояния, а setInputName - функция.
    const[inputAge, setInputAge] = useState(''); 

    const CreateUserHandler = (event) => {// Создаёт нового пользователя на основе введённых данных в поля.
           event.preventDefault();
           // Проверяем чтобы инпуты не были пустыми
           if(inputName.trim().length === 0 || inputAge.trim().length === 0){
            return;
           } 
           // Прверяем чтобы возраст не был меньше значения единицы
           if(+inputAge < 1){
            return;
           }
           console.log(inputName,inputAge);
           // Стираем значения из переменных inputName и inputName в момент нажатия на кнопку Button;
           setInputName('');
           setInputAge('');
    };
    const nameChangeHandler = (event) => {// Эта функция отслеживает инпут name и записывает его значение в переменную inputName
        setInputName(event.target.value);
    }
    const ageChangeHandler = (event) => {// Эта функция отслеживает инпут age и записывает его значение в переменную inputAge
        setInputAge(event.target.value);
    }
    return (
        <Card className={styles.input}>
            <form onSubmit={CreateUserHandler}>
                <label htmlFor="name">Имя</label>
                <input id="name" type='text' onChange={nameChangeHandler} value={inputName}/>
                <label htmlFor="age">Возраст</label>
                <input id="age" type='number' onChange={ageChangeHandler} value={inputAge}/>
                <Button type="submit">Добавить пользователя</Button>
            </form>
        </Card>
    )
}
export default CreateUser;