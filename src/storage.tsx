import { Event } from "./event.tsx"
import { AccountInfo } from './accountInfo';
import { observable, action, computed } from 'mobx';

interface schedulePopUp {
	state: boolean;
	day: Date;
}

export class Storage {
	@observable private today: Date;
	@observable private displayedToday: Date;
	@observable private displayedDuration: string;
	@observable private events: Event[];
	@observable private account: AccountInfo;
	@observable private addSchedulePopup: schedulePopUp;
	@observable private calendarView: boolean;
	@observable markers: Array<any>;

	public constructor() {
		this.today = new Date();
		this.displayedToday = new Date(this.today);
		this.displayedToday.setHours( 0, 0, 0, 0);
		this.events = [];
		this.displayedDuration = "Day";
		// TODO:: Remove this line - for testing
		this.account = new AccountInfo("Kate Kim");
		this.addSchedulePopup = { state: false, day: this.today };
		this.calendarView = false;
		this.markers = [];
	}

	@action
	public addMarker(marker:any) {
        this.markers.push(marker);
    }

    @computed
    public get getMarkers() {
    	return this.markers;
    }

	@computed
	public get getAccountName() {
		return this.account.getName;
	}

	@computed
	public get getDisplayedDuration() {
		return this.displayedDuration;
	}

	@action
	public changeDisplayedDuration(d: string) {
		this.displayedDuration = d;
	}

	@action
	public changeDisplayedToday(n: number) {
		let newDay = new Date(this.displayedToday);
		if(this.displayedDuration == "Month") {
			newDay.setMonth(this.displayedToday.getMonth() + n);
		} else if (this.displayedDuration == "Week") {
			newDay.setDate(this.displayedToday.getDate() + (7 * n));
		} else if (this.displayedDuration == "Day") {
			newDay.setDate(this.displayedToday.getDate() + n);
		} else {
			throw `STORAGE ERROR: UNKNOWN DISPLAYED DURATION TYPE: ${this.displayedDuration}`
		}

		this.displayedToday = newDay;
	}

	@action
	public toggleAddSchedulePopup(toggledDate: Date) {
		this.addSchedulePopup = {
			state: true,
			day: toggledDate
		}
		// document.getElementsByTagName('body')[0].style.overflow = 'hidden';
		// document.getElementsByTagName('body')[0].style.pointerEvents = 'none';
		// document.getElementsByTagName('body')[0].style.filter = 'blur(4px) grayscale(20%)';
		document.getElementById('CalendarAddSchedulePopup').style.pointerEvents = 'initial';
		// document.getElementById('CalendarAddSchedulePopup').style.filter = 'none';

	}

	@action
	public removeAddSchedulePopup() {
		this.addSchedulePopup.state = false;
	}

	@action
	public resetDisplayedToday() {
		this.displayedToday = new Date(this.today);
		this.displayedToday.setHours( 0, 0, 0, 0);
	}

	@action
	public addEvent(ev: Event) {
		this.events.push();
	}

	@action
	public goPreviousDate(d: Date) {
		this.displayedToday.setDate(this.displayedToday.getDate()-1);
	}

	@action
	public goNextDate(d: Date) {
		this.displayedToday.setDate(this.displayedToday.getDate()+1);
	}

}