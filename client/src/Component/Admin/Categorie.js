import React from 'react';
import '../../Assets/Categorie.css';
import { Collection } from "../Admin/Collection";
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import '../../Assets/Search.css'


const Add = styled.div`
    color: #ff0000;
    cursor: pointer;
    width: fit-content;
    border-radius: 5px;
    background-color: rgb(85,107,47);
    font-weight: bolder;
    color: white;
    text-transform: uppercase;
    font-size: 0.75rem;
    padding: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
`
class AddAnimals extends React.Component {

    addUser = event => {
        event.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ datasetid: "45", name: this.props.value })
        };
        fetch("http://localhost:9000/routeAPI/post", requestOptions)
        window.location.reload()
    }
    render() {
        return <Add onClick={this.addUser}>Add data</Add>
    }
}

function Search() {

    const [datas, setDatas] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:9000/routeAPI/getAllanimal`)
            .then((response) => response.json())
            .then((json) => setDatas(json));
    }, []);
   const handleSearchTerm = (e) => {
        let value = e.target.value;
        setSearchTerm(value);
    }

    return (
        <>
            <div className='searchBar'>
                <input
                    type="text"
                    name="search"
                    id="searchBar"
                    placeholder='Search'
                    onChange={handleSearchTerm}
                />
            </div>
            <div className='search_results'>
                <div className='search_result'>
                    {datas.filter((plant) => {
                        return plant.name.includes(searchTerm);
                    })
                    .map((plant, index) => (
                        <Collection id={plant._id} name={plant.name} datasetid={plant.datasetid} />
                    ))}
                </div>
            </div>
        </>
    );
}
/**
 *  
 */

export class Categorie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            data: [],
            value: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    componentDidMount() {
        fetch(`http://localhost:9000/routeAPI/getAllanimal`)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                this.setState({
                    data: response,
                })
            })
    }

    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div className='Categorie'>
                            <div className='container'>
                                <div className='top'>
                                </div>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <div className='location'>
                                                <p class="subtitle">Collection</p>
                                            </div>
                                        </div>
                                        <div class="col-sm-3">
                                            <div className='location'>
                                                <p class="subtitle">Animals</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-sm-3 inputdata">
                                            <input type="text" name={this.props.id} value={this.state.value} onChange={this.handleChange} />
                                        </div>
                                        <div class="col-sm-3">
                                            <AddAnimals value={this.state.value} />
                                        </div>
                                    </div>
                                </div>

                                <div class="container">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <Search data={this.state.data} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
