import React, { Component } from 'react';
import Charts from './Charts';


class Charts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData:{}
        }
    }
//lifecycle hook:
    componentWillMount(){
        this.getChartData();
    }

    getChartData() {
        //ajax call here
        this.state({
                charData: {
                    labels: ['React', 'C++', 'Angular', 'Node.js', 'HTML', 'Vue.js','Java', 'Python','Javascript','MongoDB'],
                    datasets:[
                        {
                            label: "New York",
                            data:[30,25,23,21,18,15,13,10,9,6],
    
                            backgroundColor:[
    
                                'rgba(255, 99, 132, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(255, 206, 86, 0.6)',
                                'rgba(75, 192, 192, 0.6)',
                                'rgba(153, 102, 255, 0.6)',
                                'rgba(255, 159, 64, 0.6)',
                                'rgba(255, 99, 132, 0.6)',
    
                            ]
                        }
                    ]
                }
            });
        }

    render() {
        return (
            <div class="container">
                    <Chart charData={this.state.chartData}/>
            </div>
        );
    }

}


export default Charts;