import CreateUser from "./components/Users/CreateUser";
import UserList from "./components/Users/UserLIst";
import React, {useState} from "react";

const App = () => {
  const [userList, setUserList] = useState([])

  // функция добавления нового пользователя
  const CreateUserHandler = (name, age) => {
// prevUserList - принимаем в качесстве аргумента предыдущее состояние массива списка пользователей
    setUserList((prevUserList)=>{
      // В теле функции возвращаем обновлённое состояние
      // id: Math.random().toString() - Создаём уникальный рандомный id для каждого пользователя
      return [...prevUserList, {name: name, age: age, id: Math.random().toString()}];


    })
  }

  return <div>
    <CreateUser onCreateUser={CreateUserHandler}/>
    <UserList users={userList}/>
  </div>;
};

export default App;
 