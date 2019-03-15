import React, { Component } from 'react'
import { fetchGoals } from '../actions/Goals';

interface GoalsPageProps {
    info: string,
    error: string,
    period: string,
    goals: {
        name: string,
        description: string,
        currentState: string,
        desiredState: string,
        actions: string
    }[],
    fetchGoals: () => void,
    changeGoalCurrentState: (goalName: string, currentState: string) => void,
    changeGoalDesiredState: (goalName: string, desiredState: string) => void,
    changeGoalActions: (goalName: string, actions: string) => void,
    saveGoals: () => void
}

export default class GoalsPage extends Component<GoalsPageProps> {
    componentDidMount() {
        this.props.fetchGoals()
    }

    render() {
        return (
            <div>
                {this.props.info && (<div className="alert alert-info">{this.props.info}</div>)}
                {this.props.error && (<div className="alert alert-danger">{this.props.error}</div>)}

                {this.props.period && (<h1>Personal Goals for Period {this.props.period}</h1>)}

                {this.props.goals.map(goal => {
                    return (
                        <div>
                            <h2>
                                {goal.name}
                            </h2>
                            <p>
                                {goal.description}
                            </p>

                            <div className="row">
                                <div className="col-lg-4">
                                    <p><b>Current state</b></p>
                                    <p><textarea className="form-control" rows={5} value={goal.currentState} onChange={(e) => { this.props.changeGoalCurrentState(goal.name, e.target.value)}} onBlur={() => { this.props.saveGoals() }}></textarea></p>
                                </div>
                                <div className="col-lg-4">
                                    <p><b>Desired state</b></p>
                                    <p><textarea className="form-control" rows={5} value={goal.desiredState} onChange={(e) => { this.props.changeGoalDesiredState(goal.name, e.target.value)}} onBlur={() => { this.props.saveGoals() }}></textarea></p>
                                </div>
                                <div className="col-lg-4">
                                    <p><b>Actions</b></p>
                                    <p><textarea className="form-control" rows={5} value={goal.actions} onChange={(e) => { this.props.changeGoalActions(goal.name, e.target.value)}} onBlur={() => { this.props.saveGoals() }}></textarea></p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
