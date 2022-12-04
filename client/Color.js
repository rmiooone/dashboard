import React from 'react';
import Image from 'react-bootstrap/Image';
import '../Assets/Color.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Assets/img/color.jpeg';
import Chart from 'react-google-charts'

export const data = [
    ["Color", "Values"],
    ["Blue", 20],
    ["Red", 10],
    ["Orange", 2],
    ["Green", 4],
    ["Purple", 2],
];

export const options = {
};


export class Color extends React.Component {
    render() {
        return (
            <div className='Color'>
                <div className='container'>
                    <div className='top'>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-3">
                                <div className='location'>
                                    <p class="small">Graphic</p>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div className='location'>
                                    <p class="small">Favorite color in France</p>
                                </div>
                            </div>
                            <div class="col-sm-2 logoweather">
                                <Image src={logo} fluid rounded alt="Logo of Animals category" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-1">
                    <Chart
                        chartType="PieChart"
                        data={data}
                        options={options}
                        width={"100%"}
                        height={"200px"}
                    />
                </div>
            </div>

        );
    }

}