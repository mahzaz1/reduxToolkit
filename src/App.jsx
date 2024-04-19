import AddTodo from "./components/addTodo";
import Todos from "./components/todos";

function App() {
  return (
    <div className="mt-5">
      <h1 className="text-center mb-5">Todo Project</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
