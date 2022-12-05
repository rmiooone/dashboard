import React from 'react';
import Image from 'react-bootstrap/Image';
import '../Assets/Color.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Assets/img/color.jpeg';
import Chart from 'react-google-charts'

export const options = {
    title: "Current annual inflation percentages",
    chartArea: { width: "50%" },
    colors: ["#b0120a", "#ffab91"],
    hAxis: {
        title: "Annual inflation percentages",
        minValue: 0,
    },
    vAxis: {
        title: "Country",
    },
};



export class Color extends React.Component {

    state = {
        data: [],
        requete: true
    }

    componentDidUpdate() {
        if (this.state.requete == true) {
        fetch('https://api.api-ninjas.com/v1/inflation?country=', {
            method: "GET",
            headers: {
                "X-Api-Key": "qauH53MEMstHbw96a8pUhQ==HuCMx80DeJxd4VPv"
            }
        })
            .then((reponse) => {
                return reponse.json()
            })
            .then((result) => {
                console.log(result)
                var test = [];
                test.push(["Country", "Yearly rate percentages"]);
                
                result.forEach(element => 
                    test.push([element.country, element.yearly_rate_pct])
                    );
                this.setState({
                        data: test,
                        requete: false
                    }
                )
            })
        }
    }

    render() {
        return (
            <div className='Color'>
                <div className='container'>
                    <div className='top'>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-3">
                                <div className='location'>
                                    <p class="small">Graphic</p>
                                </div>
                            </div>
                            <div class="col-5">
                                <div className='location'>
                                    <p class="small">Inflation around the world</p>
                                </div>
                            </div>
                            <div class="col-2 logoweather">
                                <Image src={logo} fluid rounded alt="Logo of Animals category" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-1">
                    <Chart
                        chartType="BarChart"
                        width="100%"
                        height="400px"
                        data={this.state.data}
                        options={options}
                    />
                </div>
            </div>

        );
    }
}

