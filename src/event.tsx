export class Event {
	private startTime: Date;
	private endTime: Date;
	private name: string;
	private location: any; // place.geometry.location - according to Gmaps

	private formatTime(date: Date): string {
		let hrs: number = date.getHours();
		let hrstr: string;
		let mins: number = date.getMinutes();
		let minstr: string;
		let ampm: string = hrs >= 12 ? "pm" : "am";
		hrs = hrs % 12;
		hrstr = hrs ? hrs.toString() : "12"; // the hour '0' should be '12'
		if (mins < 10) {
			minstr = "0".concat(mins.toString());
		} else {
			minstr = mins.toString();
		}
		// minstr = mins < 10 ? "0".concat(mins.toString()) : mins.toString();
		let strTime: string = hrstr + ":" + minstr + " " + ampm;
		return (date.getMonth()+1).toString() + "/" + date.getDate().toString() + "/" + date.getFullYear().toString() + "  " + strTime;
	}

	get getName(): string {
		return this.name;
	}

	get getStartTime(): string {
		return this.formatTime(this.startTime);
	}

	get getEndTime(): string {
		return this.formatTime(this.endTime);
	}

	setName(n: string): void {
		this.name = n;
	}
}