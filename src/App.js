import CreateUser from "./components/Users/CreateUser";
import UserList from "./components/Users/UserLIst";

const App = () => {
  return <div>
    <CreateUser/>
    <UserList users={[]}/>
  </div>;
};

export default App;
