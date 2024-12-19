import React from "react";
import './TodoList.css'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Form } from "react-bootstrap";

function TodoList({todos,deleteTodo,complated}) {
    return (
        <>
        {todos && todos.map((t)=>{
            return(
                <div className="list" key={t.id}>
            <div className="info">
 <Form.Check
            type="checkbox"
            onClick={()=>{complated(t.id)}}
          />
            <span className={t.isCompleted ? "complated" : ""}>{t.text}</span>
            </div>
            <div className="todo-buttons">
                <button className="edit-btn">
                    <FaEdit />
                </button>
                <button className="delete-btn"
                onClick={()=>{deleteTodo(t.id)}}>
                    <MdDelete />
                </button>
            </div>
        </div>
            )
        })}
        </>
    );
}

export default TodoList;