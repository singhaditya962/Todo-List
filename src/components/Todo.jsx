import { useState } from "react"
import Form from "./Form";
import TodoList from "./todolist";
import Footer from "./footer";

export default function Todo(){
    const [todos,setTodos]=useState([]);
    const completedTodos = todos.filter((todo)=>todo.done).length
    const totaltodos = todos.length;
    const sortedtodos = todos.slice().sort((a,b)=> Number(a.done)-Number(b.done));
   return(
   <div>
    <Form todos={todos} setTodos={setTodos}/>
    <TodoList todos={sortedtodos} setTodos={setTodos}/>
    <Footer completedTodos={completedTodos} totaltodos={totaltodos}/>
   </div> 
   );
}
