import Todos from "./pages/Todos";


function App() {
  return (
    <div>
      {/* <button onClick={() => {
        login("sdbjbh@g.com", "123456");
      }}>Login</button>
      <h1>{user.name}</h1>
      {todos.map(todo => {
        return <div>
          <h1>{todo.title}</h1>
        </div>
      })} */}

      <Todos />
    </div>
  );
}

export default App;
