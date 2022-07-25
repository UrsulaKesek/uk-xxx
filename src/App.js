import "./App.css";
import UserList from "./UserList";
import NewList from "./NewList";
import Playfield from "./MatchMatch/Playfield"
function App() {
  return (
    <div className="App">
      <>
      <Playfield pairs={12} />
        <UserList />
        <NewList />

      </>
    </div>
  );
}

export default App;
