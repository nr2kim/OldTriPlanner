import * as React from 'react';
import { observer } from 'mobx-react';

import { CalendarDay } from './calendarDay';

import '../css/style.css';

@observer
export class Calendar extends React.Component <any, any> {

    public constructor(props) {
        super(props);
    }

    public componentDidUpdate() {

    }

    public componentDidMount() {
    }

    public componentWillUnmount() {
    }

    private getCalendarDay(storage, day: Date, k: number) {
        return <CalendarDay storage={storage} day={day} key={k} />
    }

    public render() {
        let calendarCells: Date[] = [];
        let divs = [];
        if (this.props.storage.displayedDuration === "Week") {
            let currday: Date = new Date(this.props.storage.displayedToday);
            currday.setDate(this.props.storage.displayedToday.getDate() - this.props.storage.displayedToday.getDay());
            for(let i = 0; i < 7; i++) {
                calendarCells.push(new Date(currday));
                currday.setDate(currday.getDate() + 1);
            }
            for(let j = 0; j < 7; j++) {
                let temp = this.getCalendarDay( this.props.storage, calendarCells[j], j);
                divs.push(temp);
            }
        } else if (this.props.storage.displayedDuration === "Day") {
            calendarCells = [ this.props.storage.displayedToday ];
            let temp = this.getCalendarDay( this.props.storage, this.props.storage.displayedToday, 1);
            divs = [ temp ];
        } else {
            let year: number = this.props.storage.displayedToday.getFullYear();
            let month: number = this.props.storage.displayedToday.getMonth();
            let currday: Date = new Date(year, month, 1);
            currday.setDate(currday.getDate() - currday.getDay());
            while(calendarCells.length < 42) {
                calendarCells.push(new Date(currday));
                currday.setDate(currday.getDate() + 1);
            }
            
            let temps: Element[] = [];
            
            for (let j = 0; j < calendarCells.length; j++) {
                let temp;
                temp = this.getCalendarDay(this.props.storage, calendarCells[j], j);
                temps.push(temp);
            }
            divs.push(temps);
        }
        
        return (
            <div className={(this.props.storage.addSchedulePopup.state ? "calendarTable withPopup" : "calendarTable")} >
                {divs}
            </div>
        );
    }
}