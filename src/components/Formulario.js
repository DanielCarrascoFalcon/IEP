import React, { Component } from "react";

class Formulario extends Component {
    constructor(){
        super();
        this.state = {
            lugar: '',
            descripcion: '',
            responsable: '',
            prioridad: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        const {value, name} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);

    }

    render() {
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="lugar"
                            className="form-control"
                            placeholder="¿Dónde se realizará?"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="descripcion"
                            className="form-control"
                            placeholder="Breve descripción"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="responsable"
                            className="form-control"
                            placeholder="¿Quién es el responsable?"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <select
                            name="prioridad"
                            className="form-control"
                            onChange={this.handleInput}
                        >
                        <option>Ninguna</option>
                        <option>Baja</option>
                        <option>Media</option>
                        <option>Alta</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </form>
            </div>
        );
    }
}

export default Formulario