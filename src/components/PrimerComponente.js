import React, { Component } from "react";
import "../assets/css/PrimerComponente.css";

import { todos } from './todos.json';  
import Formulario from './Formulario'; 

class PrimerComponente extends Component {

    constructor() {
        super();
        this.state = {
            todos
        }
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    handleAddTodo(todo) {
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }

    removeTodo(index){
        if (window.confirm('¿Estás seguro?')) {
            this.setState({
                todos: this.state.todos.filter((e, i) => {
                    return i !== index
                })
            })
        }
    }

    render(){

        const todos = this.state.todos.map((todo, i) =>{
            return(
                <div className="col-md-4" key={i}>
                    <div className="card mt-4 text-center">
                        <div className="card-header justify-content-center">
                            <h3>{todo.lugar}</h3>
                            <span className="badge badge-pill badge-danger ml-2">
                                {todo.prioridad}
                            </span>
                        </div>
                        <div className="card-body">
                            <p>{todo.descripcion}</p>
                            <p><mark>{todo.responsable}</mark></p>
                        </div>
                        <div className="card-footer">
                            <button
                                className="btn btn-danger"
                                onClick={this.removeTodo.bind(this, i)}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )
        })


        return(
            <div className="PrimerComponente">
                <nav className="navbar bg-white">
                    <a className="text-blue">
                        <b>Tasks</b>
                        <span className="badge badge-pill badge-dark ml-2">
                            {this.state.todos.length}
                        </span>
                    </a>
                </nav>
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-3">
                            <Formulario onAddTodo={this.handleAddTodo}/>
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                {todos}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default PrimerComponente