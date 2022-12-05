import React from 'react';
import '../../Assets/Categorie.css';
import styled from 'styled-components'

const Update = styled.div`
    color: #ef9b0f;
    width : 100%;
    cursor: pointer;
    color: #ff0000;
    cursor: pointer;
    border-radius: 5px;
    background-color: rgb(25,25,112);
    font-weight: bolder;
    color: white;
    text-transform: uppercase;
    font-size: 0.75rem;
    padding: 0.25rem;
    text-align: center;
`
const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
    width: 100%;
    border-radius: 5px;
    background-color: rgb(139,0,0);
    font-weight: bolder;
    color: white;
    text-transform: uppercase;
    font-size: 0.75rem;
    padding: 0.25rem;
    text-align: center;
`

class UpdateAnimals extends React.Component {
    updateUser = event => {
        event.preventDefault()

        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ display: "false" })
        };
        fetch("http://localhost:9000/routeAPI/update/" + this.props.id, requestOptions)
        window.location.reload()
    }
    render() {
        return (
            <div>
                <Update onClick={this.updateUser}>Unsee</Update>
            </div>
        );
    }
}

class DeleteAnimals extends React.Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete ${this.props.name} permanently?`,
            )
        ) {
            fetch("http://localhost:9000/routeAPI/delete/" + this.props.id)
            window.location.reload()
        }
    }
    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

export class Collection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    render() {
        return (
            <div className='Categorie'>
                <div className='container'>
                    <div class="row">
                        <div class="col-sm-2">
                            <strong>_id:</strong>
                        </div>
                        <div class="col-sm-10">
                            {this.props.id}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-2">
                            <strong>DatasetId:</strong>
                        </div>
                        <div class="col-sm-10">
                            {this.props.datasetid}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-2">
                            <strong>Name:</strong>
                        </div>
                        <div class="col-sm-10">
                            {this.props.name}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-2">
                            <strong>Display:</strong>
                        </div>
                        <div class="col-sm-10">
                            {this.props.display}
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div class="row">
                        <div class="col-sm-2">
                        </div>
                        <div class="col-sm-3">
                            <span>
                                <DeleteAnimals id={this.props.id} name={this.props.name} />
                            </span>
                        </div>
                        <div class="col-sm-2">
                        </div>
                        <div class="col-sm-3">
                            <span>
                                <UpdateAnimals id={this.props.id} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

