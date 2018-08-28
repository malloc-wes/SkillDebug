import React, {Component} from 'react';
import {Doughnut, Bar, Line, Pie} from 'react-chartjs-2';

class Charts extends Component {
    constructor(){
        super();
        this.state = {
            charData:{
                labels: ['React', 'C++', 'Angular', 'Node.js', 'HTML', 'Vue.js','Java', 'Python','Javascript','MongoDB'],
                datasets:[
                    {
                        label: "Number of jobs",
                        data:[30,25,23,21,18,15,13,10,9,6],

                        backgroundColor:[

                            'rgba(255, 0, 0, 0.8);',
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
        }
    }

    static defaultProps ={
        displayTitle: true,
        displayLegend:true,
        legendPosition:'right'
    }

    render(){
        return(
           <div className="chart">

            <Bar
            data={this.state.charData}
            options={{
                    title:{
                        display:this.props.displayTitle,
                        text:"Top 10 Skills",
                        fontSize: 25
                    },
                    legend:{
                        display:this.props.displayLegend,
                        position:this.props.legendPosition
                        
                    }
                }}
            />
            <Line
            data={this.state.charData}
            options={{
                    title:{
                        display:this.props.displayTitle,
                        text:"Top 10 Cities",
                        fontSize: 25
                    },
                    legend:{
                        display:this.props.displayLegend,
                        position:this.props.legendPosition
                        
                    }
                }}
            />
            <Pie
            data={this.state.charData}
            options={{
                    title:{
                        display:this.props.displayTitle,
                        text:"Highest Paid",
                        fontSize: 25
                    },
                    legend:{
                        display:this.props.displayLegend,
                        position:this.props.legendPosition
                        
                    }
                }}
            />
           </div>
        )
    }
}

export default Charts;