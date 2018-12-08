import React, { Component } from 'react';
import ActivityProvider from '../model/ActivityProvider';
import Activity from '../model/Activity';
import Emotion from '../model/Emotion';
import EmotionProvider from '../model/EmotionProvider';

class DatePicker extends Component {
    render() {
        return (
            <div className="datePicker">
                <button className="btn btn-light">⯇</button>
                <span className="date">Mo 03/12/2018</span>
                <button className="btn btn-light">⯈</button>
            </div>
        )
    }
}

class EmotionTrackerList extends Component {
    render() {
        const emotions = new EmotionProvider().getEmotions()

        return (
            <div className="emotionList">
                { emotions.map(emotion => {
                    return (
                        <EmotionTracker emotion={emotion}/>
                    )
                })}
            </div>
        )
    }
}

class EmotionTracker extends Component<EmotionTrackerProps> {
    render() {
        return (
            <div className="emotionTracker">
                <div className="name">{ this.props.emotion.name }</div>
                
                <div className="options">
                    <div className="btn-group">
                        <button className="btn btn-light">Weak</button>
                        <button className="btn btn-light">Medium</button>
                        <button className="btn btn-light">Strong</button>
                    </div>
                </div>

                <div className="clearfix"></div>
            </div>
        )
    }
}

interface EmotionTrackerProps {
    emotion: Emotion
}

class ActivityTrackerList extends Component {
    render() {
        let activities = new ActivityProvider().getActivities()

        return (
            <div className="activityList">
                { activities.map(activity => {
                    return (
                        <ActivityTracker activity={activity} />
                    )
                })}
            </div>
        )
    }
}
class ActivityTracker extends Component<ActivityTrackerProps> {
    constructor(props: ActivityTrackerProps) {
        super(props)
    }

    render() {
        return (
            <div className="activityTracker">
                <div className="name">{this.props.activity.name}</div>

                <div className="options">
                    <div className="btn-group">
                        <button className="btn btn-light">Not done</button>
                        <button className="btn btn-light">Medium</button>
                        <button className="btn btn-light">Intensive</button>
                    </div>
                </div>

                <div className="clearfix"/>
            </div>
        )
    }
}

interface ActivityTrackerProps {
    activity: Activity
}

class TrackPage extends Component {
    render() {
        return (            
            <div>
                <DatePicker/>

                <h2>Emotions</h2>
                <EmotionTrackerList/>

                <h2>Activities</h2>
                <ActivityTrackerList/>
            </div>
        )
    }
}

export default TrackPage
