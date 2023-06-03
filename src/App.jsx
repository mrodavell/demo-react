import FetchList from "./components/pages/FetchList";
import TodoList from "./components/pages/TodoList";

export default function App() {
  return (
    <>
      <div style={{ width: "50%" }}>
        <TodoList />
      </div>
      <div style={{ width: "50%" }}>
        <FetchList />
      </div>
    </>
  );
}
