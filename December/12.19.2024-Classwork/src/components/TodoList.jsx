import './TodoList.css'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Button, Form, Modal } from "react-bootstrap";
import propTypes from 'prop-types';
import { useState } from 'react';

function TodoList({filteredTodos,deleteTodo,complated}) {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
        {filteredTodos && filteredTodos.map((t)=>{
            return(
                <div className="list" key={t.id}>
            <div className="info">
 <Form.Check
            type="checkbox"
            onClick={()=>{complated(t.id)}}
            checked={t.isCompleted}
          />
            <span className={t.isCompleted ? "complated" : ""}>{t.text}</span>
            </div>
            <div className="todo-buttons">
                <button className="edit-btn" onClick={()=>{setShowModal(true)}}>
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
        <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        type="text"
                        placeholder="Edit your todo"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>{setShowModal(false)}}>
                        Cancel
                    </Button>
                    <Button variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

TodoList.propTypes = {
    filteredTodos: propTypes.arrayOf(propTypes.shape({
        id: propTypes.number.isRequired,
        text: propTypes.string.isRequired,
        isCompleted: propTypes.bool.isRequired,
    })).isRequired,
    deleteTodo: propTypes.func.isRequired,
    complated: propTypes.func.isRequired,
};
export default TodoList;