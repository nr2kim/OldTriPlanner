import * as React from 'react';

import { Today } from './today';
import { TodayController } from './todayController';
import { DurationController } from './durationController';
import { Account } from './account';

import '../css/style.css';

export class Header extends React.Component <any, any> {

    public constructor(props) {
        super(props);
    }

    public componentDidUpdate() {
        
    }

    public componentDidMount() {
    }

    public componentWillUnmount() {
    }

    public openOption(id: string) {
        let popup = document.getElementById(id+'PopUp');
        popup.classList.toggle("show");
    }

    public render() {
        return (
            <div className="header">
                <div className="leftHeader">
                    <button className="optionButton" id="add" onClick={(e: any) => this.openOption(e.target.id)}>
                        <img src="../img/add.png" />
                        <div className="popuptext" id="addPopUp">
                            <div> Hello </div>
                        </div>
                    </button>
                    <button className="optionButton" id="search" onClick={(e: any) => this.openOption(e.target.id)}>
                        <img src="../img/loupe.png" />
                        <div className="popuptext" id="searchPopUp">
                            <div> Hi </div>
                        </div>
                    </button>
                    <button className="optionButton" id="share" onClick={(e: any) => this.openOption(e.target.id)}>
                        <img src="../img/share.png" />
                        <div className="popuptext" id="sharePopUp">
                            <div> Bonjour </div>
                        </div>
                    </button>
                </div>
                <div className="rightHeader">
                    <TodayController storage={this.props.storage} />
                    <Today storage={this.props.storage} />
                    <DurationController storage={this.props.storage} />
                    <Account storage={this.props.storage} />
                </div>
            </div>
        );
    }
}