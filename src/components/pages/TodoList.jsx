import Input from "../ui/Input";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { useState } from "react";

export default function TodoList() {
  const todo = JSON.parse(localStorage.getItem("todo"));
  const [todoList, setTodoList] = useState(todo || []);
  const [task, setTask] = useState("");

  const handleAdd = () => {
    setTodoList((prevState) => {
      localStorage.setItem("todo", JSON.stringify([...prevState, task]));
      return [...prevState, task];
    });
  };

  return (
    <div style={{ width: "100%", marginLeft: 50, marginRight: 50 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <p>Todo List App</p>
          <div>
            <Input
              id="taskid"
              placeholder="Enter task"
              value={task}
              onChange={(ev) => setTask(ev.target.value)}
            />
            <Button onClick={handleAdd}>Add</Button>
          </div>
          <p>Task:{task}</p>
          <p>Tasks</p>
          <div
            id="tasks"
            style={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
              borderTop: "2px solid #000",
              marginTop: 5,
              width: "40%",
            }}
          >
            {todoList.map((value, index) => {
              return <Card key={`task-${index}`}>{value}</Card>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
