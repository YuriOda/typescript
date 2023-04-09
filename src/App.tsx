import "./App.css";
import Todos from "./components/Todos";

const listItem = ["React", "TypeScript"];

function App() {
  return (
    <div>
      <Todos items={listItem} />
    </div>
  );
}

export default App;
