import * as React from 'react';
import { observer } from 'mobx-react';

import '../css/style.css';

@observer
export class DurationController extends React.Component <any, any> {

    public constructor(props) {
        super(props);
    }

    public componentDidUpdate() {
        
    }

    public changeDurationView(cn: string) {
    }
    public componentDidMount() {
    }

    public componentWillUnmount() {
    }

    public render() {
        return (
            <div className="durationController">
                <button id="Month" className={this.props.storage.getDisplayedDuration === "Month" ? "SelectedDurationView" : ""} 
                    onClick={(e: any) => this.props.storage.changeDisplayedDuration(e.target.id)}>Month</button>
                <button id="Week" className={this.props.storage.getDisplayedDuration === "Week" ? "SelectedDurationView": ""}
                    onClick={(e: any) => this.props.storage.changeDisplayedDuration(e.target.id)}>Week</button>
                <button id="Day" className={this.props.storage.getDisplayedDuration === "Day" ? "SelectedDurationView": ""}
                    onClick={(e: any) => this.props.storage.changeDisplayedDuration(e.target.id)}>Day</button>
            </div>
        );
    }
}