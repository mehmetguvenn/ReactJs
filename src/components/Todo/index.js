import Form from "./Form";
import Header from "./Header";
import List from "./List";
import { useState, useEffect } from "react";

function Todo() {

    // {summary: "", desc:""}

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        console.log("todos", todos);
    })

    return(
        <>
            <Header/>
            <List setTodosState={setTodos} todos={todos}/>
            <Form setTodosState={setTodos} todos={todos}/>
        </>
    );
}

export default Todo;