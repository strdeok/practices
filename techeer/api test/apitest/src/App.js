import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import imgFile from "./good.jpg";

function App() {
  const [todoAdd, Adding] = useState("");
  const [Todolist, setTodos] = useState([]);

  const load = async () => {
    const loading = await axios.get("/api/todos");
    setTodos(loading.data.todos);
  };

  function onChange(e) {
    Adding(e.target.value);
  }

  const 입력하기 = async () => {
    const data = todoAdd;
    const formData = new FormData();
    formData.append("todoData", data);
    formData.append("file", imgFile);
    await axios
      .post(
        "/api/todos",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
        []
      )
      .then(function () {
        axios.get("api/todos").then((result) => {
          setTodos(result.data);
        });
        console.log(Todolist)
      });
  };
  const 삭제하기 = (id) => {
    axios
      .delete(`/api/todos/${id}`)
      .then(() => {
        axios.get("api/todos").then((result)=>{
          setTodos(result.data)
        })
      })
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="App">
      <input type="text" onChange={onChange}></input>

      <button onClick={입력하기}>입력</button>

      {Todolist.map((todos, i) => {
        return (
          <>
            <div key={i}>
              <div>{todos.thumbnail}</div>
              <p>{todos.title}</p>
              <button
              onClick={() => {
                삭제하기(todos.id);
              }}
            >
              삭제
            </button>
            </div>
            
          </>
        );
      })}
    </div>
  );
}

export default App;
