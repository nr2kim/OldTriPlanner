import * as React from 'react';
import { observer } from 'mobx-react';

import '../css/style.css';

@observer
export class Today extends React.Component <any, any> {

	private monthString = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    public constructor(props) {
        super(props);
    }

    public componentDidUpdate() {
        
    }

    public componentDidMount() {
    }

    public componentWillUnmount() {
    }

    public render() {    	
    	let date: number = this.props.storage.displayedToday.getDate();
    	let dstr: string = date.toString();
    	let lastDigit:number = +(dstr.slice(-1));
    	switch(lastDigit) {
    		case 1:
    			dstr = dstr + "st";
    			break;
    		case 2:
    			dstr = dstr + "nd";
    			break;
    		case 3:
    			dstr = dstr + "rd";
    			break;
    		default:
    			dstr = dstr + "th";
    	}
    	
    	let yr: number = this.props.storage.displayedToday.getFullYear();
        return (
            <div className="todayText">
                <button className="todayButton" onClick={() => this.props.storage.resetDisplayedToday()}>
                    {this.monthString[this.props.storage.displayedToday.getMonth()]} {dstr}, {yr}
                </button>
            </div>
        );
    }
}