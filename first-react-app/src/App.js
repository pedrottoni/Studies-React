import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My ToDos</h1>
      <Todo text="Learn React" />
      <Todo text="Usar o data-text no lugar do text" />
      <Todo text="USAR AQUI" />
    </div>
  );
}

export default App;
