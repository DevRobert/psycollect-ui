import React, { Component } from 'react'

interface DatePickerProps {
    date: string,
    navigateBack: () => void,
    navigateForward: () => void
}

class DatePicker extends Component<DatePickerProps> {
    render() {
        return (
            <div className="datePicker">
                <button className="btn btn-light" onClick={() => { this.props.navigateBack()}}>⯇</button>
                <span className="date">{ this.props.date }</span>
                <button className="btn btn-light" onClick={() => { this.props.navigateForward()}}>⯈</button>
            </div>
        )
    }
}

interface EmotionTrackerListProps {
    emotions: { name: string, value: number }[]
}

class EmotionTrackerList extends Component<EmotionTrackerListProps> {
    render() {
        return (
            <div className="emotionList">
                { this.props.emotions.map(emotion => {
                    return (
                        <EmotionTracker key={emotion.name} name={emotion.name} value={emotion.value} />
                    )
                })}
            </div>
        )
    }
}

interface EmotionTrackerProps {
    name: string,
    value: number
}

class EmotionTracker extends Component<EmotionTrackerProps> {
    private setValue(value: number) {

    }
    
    render() {
        return (
            <div className="emotionTracker">
                <div className="name">{ this.props.name } ({this.props.value})</div>
                
                <div className="options">
                    <div className="btn-group">
                        <button onClick={() => { this.setValue(1)}} className={"btn " + (this.props.value === 1 ? " btn-success" : "btn-light")}>Weak</button>
                        <button onClick={() => { this.setValue(2)}} className={"btn " + (this.props.value === 2 ? " btn-success" : "btn-light")}>Medium</button>
                        <button onClick={() => { this.setValue(3)}} className={"btn " + (this.props.value === 3 ? " btn-success" : "btn-light")}>Strong</button>
                    </div>
                </div>

                <div className="clearfix"></div>
            </div>
        )
    }
}

interface ActivityTrackerListProps {
    activities: { name: string, value: number }[]
}

class ActivityTrackerList extends Component<ActivityTrackerListProps> {
    render() {
        return (
            <div className="activityList">
                {this.props.activities.map(activity => {
                    return (
                        <ActivityTracker key={activity.name} name={activity.name} value={activity.value} />
                    )
                })}
            </div>
        )
    }
}

interface ActivityTrackerProps {
    name: string,
    value: number
}

class ActivityTracker extends Component<ActivityTrackerProps> {
    private setValue(value: number) {

    }

    render() {
        return (
            <div className="activityTracker">
                <div className="name">{this.props.name} ({this.props.value})</div>

                <div className="options">
                    <div className="btn-group">
                        <button onClick={() => { this.setValue(1)}} className={"btn " + (this.props.value === 1 ? " btn-success" : "btn-light")}>Not done</button>
                        <button onClick={() => { this.setValue(2)}} className={"btn " + (this.props.value === 2 ? " btn-success" : "btn-light")}>Medium</button>
                        <button onClick={() => { this.setValue(3)}} className={"btn " + (this.props.value === 3 ? " btn-success" : "btn-light")}>Intensive</button>
                    </div>
                </div>

                <div className="clearfix"/>
            </div>
        )
    }
}

interface TrackPageProps {
    token: string,
    info: string,
    error: string,
    date: string,
    emotions: {name: string, value: number}[],
    activities: {name: string, value: number}[],
    fetchReport: (token: string, date: string) => void,
    navigateBack: () => void,
    navigateForward: () => void
}

class TrackPage extends Component<TrackPageProps> {
    componentDidMount() {
        this.props.fetchReport(this.props.token, this.props.date)
    }

    render() {
        return (
            <div>
                {this.props.info && (<div className="alert alert-info">{this.props.info}</div>)}
                {this.props.error && (<div className="alert alert-danger">{this.props.error}</div>)}

                <DatePicker date={this.props.date} navigateBack={this.props.navigateBack} navigateForward={this.props.navigateForward}/>

                <h2>Emotions</h2>
                <EmotionTrackerList emotions={this.props.emotions}/>

                <h2>Activities</h2>
                <ActivityTrackerList activities={this.props.activities}/>
            </div>
        )
    }
}

export default TrackPage
