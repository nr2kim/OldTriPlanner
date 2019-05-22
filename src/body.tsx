import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Calendar } from './calendar';
import { Map } from './map';

import { CalendarAddSchedulePopup } from './calendarAddSchedulePopup.tsx'

import '../css/style.css';

export class Body extends React.Component <any, any> {
    public constructor(props) {
        super(props);
    }

    private getMapChild() {
        return <Map storage={this.props.storage} />;
    }

    private getCalendarChild() {
        return <Calendar storage={this.props.storage} />;
    }

    public render() {
        return (
            <div className="body" id="body">
                {this.props.storage.calendarView ? this.getCalendarChild() : this.getMapChild() }
            </div>
        );
    }
}
