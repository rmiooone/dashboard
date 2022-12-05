import React from 'react';
import '../../Assets/Categorie.css';
import { CollectionFact } from "./CollectionFact";
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
class AddAnimals extends React.Component {

    state = {
        id: this.props,
        word: "",
    }

    addUser = event => {
        fetch('https://api.api-ninjas.com/v1/facts?limit=1', {
            method: "GET",
            headers: {
                "X-Api-Key": "qauH53MEMstHbw96a8pUhQ==HuCMx80DeJxd4VPv"
            }
        })
            .then((reponse) => {
                return reponse.json()
            })
            .then((result) => {
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ datasetid: "45", name: result[0].fact, type: "Fact", display: "true" })
                };
                event.preventDefault()
                fetch("http://localhost:9000/routeAPI/post", requestOptions)
                window.location.reload()
                this.setState({
                    word: result[0].fact,
                })
            })
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
                            <CollectionFact key={index} display={res.display} id={res._id} name={res.name} datasetid={res.datasetid} />
                        ))}
                </div>
            </div>
        </>
    );
}

export class CategorieFact extends React.Component {
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
                                    <AddAnimals />
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
