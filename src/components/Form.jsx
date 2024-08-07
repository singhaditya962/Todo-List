import { useState } from "react";
import styles from './Form.module.css'
export default function Form({todos,setTodos}){
    const [todo,setTodo]=useState({ name: "" , done:false});
    
    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({ name: "" , done:false});
    }
    return  ( <form className= {styles.todoform}onSubmit={handleSubmit}>
        <div className={styles.inputcontainer}> 
        <input className={styles.inputbox} onChange={(e)=>setTodo({name:e.target.value, done:false})} 
    value= {todo.name} 
    type="text"
    placeholder="Enter todo item"
    />
    <button className={styles.button} type = "submit">Add</button>
        </div>  
</form>
    );
}