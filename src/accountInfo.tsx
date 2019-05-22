export class AccountInfo {
	private name: string;
	
	constructor(n: string) {
		this.name = n;
	}
	public get getName(): string {
		return this.name;
	}
}