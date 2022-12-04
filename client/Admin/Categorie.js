import React from 'react';
import '../../Assets/Categorie.css';
import { Collection } from "../Admin/Collection";
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import '../../Assets/Search.css'


const Add = styled.div`
    color: #ff0000;
    cursor: pointer;
    border-radius: 5px;
    background-color: rgb(85,107,47);
    font-weight: bolder;
    color: white;
    width:100%;
    text-transform: uppercase;
    font-size: 0.8rem;
    padding: 0.5rem 0.5rem;
    text-align: center;
`
function AddElement(type) {
    JSON.stringify(type);
    const [datas, setDatas] = useState([]);
    const [addTerm, setAddTerm] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:9000/routeAPI/getAll`)
            .then((response) => response.json())
            .then((json) => json.filter((res) => {
                return res.display.includes("false");
            }))
            .then((resp) => setDatas(resp.filter((res) => {
                return res.type.includes(type.type);
            })))
    }, []);

    const handleAddTerm = (e) => {
        let value = e.target.value;
        value.length > 2 && setAddTerm(value);
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <div className="addBar">
                            <input
                                type="text"
                                name="add"
                                id="addBar"
                                placeholder=''
                                onChange={handleAddTerm}
                            />
                        </div>
                    </div>
                    <div className='col-sm-2'>
                    </div>
                    <div className='col-sm-2'>
                        <AddAnimals value={addTerm} />
                    </div>
                </div>
            </div>

            <div className='container add_results'>
                <div className='row cnt-suggestions'>
                    {datas.filter((res) => {
                        const valeur = res.name.includes(addTerm) || res.name.toLowerCase().includes(addTerm);
                        return valeur;
                    })
                        .map((res, index) => (
                            <div key={index} class="col-sm-3 suggestion">{res.name}</div>
                        ))}
                </div>
            </div>
        </>
    );
}

class AddAnimals extends React.Component {

    state = {
        id: this.props
    }

    addUser = event => {
        event.preventDefault()
        /*    const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ datasetid: "45", name: this.props.value })
            };
            fetch("http://localhost:9000/routeAPI/post", requestOptions)
            window.location.reload()
        }*/
        fetch(`http://localhost:9000/routeAPI/getAll`)
            .then((response) => response.json())
            .then((json) => json.filter((res) => {
                return res.name.includes(this.props.value);
            }))
            .then((resp) => {
                console.log(resp[0]._id)
                const requestOptions = {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ display: "true" })
                };
                fetch("http://localhost:9000/routeAPI/update/" + resp[0]._id, requestOptions);
                window.location.reload()
            });

        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ display: "false" })
        };
        // fetch("http://localhost:9000/routeAPI/update/" + this.props.id, requestOptions)
        // window.location.reload()
    }
    render() {
        return <Add onClick={this.addUser}>Add data</Add>
    }
}

function Search(type) {
    JSON.stringify(type);
    const [datas, setDatas] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:9000/routeAPI/getAll`)
            .then((response) => response.json())
            .then((json) => json.filter((res) => {
                return res.display.includes("true");
            }))
            .then((resp) => setDatas(resp.filter((res) => {
                return res.type.includes(type.type);
            })))
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
                    {datas.filter((res) => {
                        return res.name.includes(searchTerm) || res.name.toLowerCase().includes(searchTerm) || res.type.includes(searchTerm) || res.datasetid.includes(searchTerm);
                    })
                        .map((res, index) => (
                            <Collection key={index} display={res.display} id={res._id} name={res.name} datasetid={res.datasetid} />
                        ))}
                </div>
            </div>
        </>
    );
}

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
                                                <p class="subtitle">{this.props.type}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="container">
                                    <AddElement type={this.props.type} />
                                </div>

                                <div class="container">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <Search type={this.props.type} />
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
