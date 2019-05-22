import * as React from 'react';
import { observer } from 'mobx-react';

import '../css/style.css';

@observer
export class CalendarAddSchedulePopup extends React.Component <any, any> {

    public constructor(props) {
        super(props);
    }

    private addSchedule() {
        console.log("add schedule");
    }

    private removeSchedulePopup() {
        this.props.storage.removeAddSchedulePopup();
    }

    public render() {

        return (
            <div id="CalendarAddSchedulePopup" 
                style={{display: (this.props.storage.addSchedulePopup.state ? 'inline-block' : 'none')}} >
                <button className="close" onClick={() => this.removeSchedulePopup()}>
                    X
                </button>
                <div className="form">
                    Location:<br />
                    <input type="text" name="Location" />
                    <br />
                    Time:<br />
                    <input type="text" name="Time" />
                    <br /> <br />
                </div>
                <button className="submit" onClick={() => this.addSchedule()} >Add</button>
            </div>
        );
    }
}