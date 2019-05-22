import * as React from 'react';
import { observer } from 'mobx-react';

import '../css/style.css';

@observer
export class CalendarDay extends React.Component <any, any> {

    private days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    public constructor(props) {
        super(props);
    }

    public componentDidUpdate() {
    }

    public componentDidMount() {
    }

    public componentWillUnmount() {
    }

    private openNewSchedule() {
        this.props.storage.toggleAddSchedulePopup(this.props.day);
    }

    public render() {
        let cn: string = "";
        switch(this.props.storage.displayedDuration) {
            case "Day":
                cn="cell calendarCellDay";
                break;
            case "Week":
                cn="cell calendarCellWeek";
                break;
            case "Month":
                cn="cell calendarCellMonth";
                break;
            default:
        }
        let tempToday = new Date(this.props.storage.today);
        tempToday.setHours( 0, 0, 0, 0);
        if (tempToday.getTime() === this.props.day.getTime()) {
            cn = cn.concat(" today");
        }
        // calculate width
        // calculate height
        return (
            <div id={this.props.day.getTime()} className={cn} onClick={() => this.openNewSchedule()} >
                {this.props.day ? `${this.props.day.getDate()} ${this.days[this.props.day.getDay()]}` : ""}
            </div>
        );
    }
}