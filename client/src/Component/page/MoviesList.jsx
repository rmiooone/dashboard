import React, { Component } from 'react'
import ReactTable from 'react-table'

import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`
export class MoviesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            animals: [],
            columns: [],
            isLoading: false,
        }
    }

componentDidMount = async () => {
        this.setState({ isLoading: true })
        fetch("http://localhost:9000/getanimal").then(animals => {
            console.log(animals )    
        this.setState({
                animals: animals.data,
                isLoading: false,
            })
            
        })
    }

    render() {
        const { animals, isLoading } = this.state
        console.log('TCL: Animals -> render -> Animals', animals)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Rating',
                accessor: 'rating',
                filterable: true,
            },
            {
                Header: 'Time',
                accessor: 'time',
                Cell: props => <span>{props.value.join(' / ')}</span>,
            },
        ]

        let showTable = true
        if (!animals.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={animals}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}