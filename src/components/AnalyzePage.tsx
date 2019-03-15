import React, { Component } from 'react';
import Chart from 'chart.js'

interface AnalyzePageProps {
    info: string,
    error: string,
    data: {
        dates: string[],
        emotions: {[name: string]: number[]},
        activities: {[name: string]: number[]}
    }|null,
    fetchReport: () => void,
}

class AnalyzePage extends Component<AnalyzePageProps> {
    componentDidMount() {
        this.props.fetchReport()
    }

    componentDidUpdate() {
        if(!this.props.data) {
            return
        }

        const colors = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#000000']
        
        const chartData = []

        for(let emotionName of Object.getOwnPropertyNames(this.props.data.emotions)) {
            chartData.push({
                label: emotionName,
                data: this.props.data.emotions[emotionName]
            })
        }

        for(let activityName of Object.getOwnPropertyNames(this.props.data.activities)) {
            chartData.push({
                label: activityName,
                data: this.props.data.activities[activityName],
            })
        }

        chartData.forEach((data: any) => {
            data.lineTension = 0
            data.fill = false
            data.borderColor = colors.shift()
        })

        const canvas = document.getElementById("analyzeCanvas") as HTMLCanvasElement
        const context = canvas.getContext("2d") as CanvasRenderingContext2D
        
        var chart = new Chart(context, {
            type: 'line',
            data: {
                labels: this.props.data.dates,
                datasets: chartData
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            stepSize: 1,
                            min: 1,
                            max: 3
                        }
                    }]
                }
            }
        })
    }

    render() {
        return (
            <div>
                { this.props.info && <div className="alert alert-info">{this.props.info}</div>}
                { this.props.error && <div className="alert alert-danger">{this.props.error}</div>}
                { this.props.data && <canvas id="analyzeCanvas" width="400" height="200"></canvas>}
            </div>
        )
    }
}

export default AnalyzePage
