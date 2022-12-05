import React from 'react';
import '../../Assets/Categorie.css';

import styled from 'styled-components'

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
class DeleteAnimals extends React.Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete this fact permanently?`,
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

export class CollectionFact extends React.Component {
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
                    </div>
                </div>
            </div>
        )
    }
}

