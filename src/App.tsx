import Frontend from "./components/Frontend";
import Subscribe from "./components/Subscribe";

import "./App.css";
import Profile from "./components/Profile";
import RandomColor from "./components/RandomColor";
import Numbers from "./components/Numbers";
import NumberBoxPanel from "./components/NumberBoxPanel";

function App() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div>
      <Frontend />
      <Subscribe />
      <Profile />
      <RandomColor />
      <Numbers numbers={numbers} />
      <NumberBoxPanel />
    </div>
  );
}

export default App;
