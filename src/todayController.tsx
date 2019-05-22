import * as React from 'react';
import { observer } from 'mobx-react';

import '../css/style.css';

@observer
export class TodayController extends React.Component <any, any> {

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
        return (
            <div className="todayController">
            	<button className="todayNavButton"
                    onClick={() => this.props.storage.changeDisplayedToday(-1)} >
                    <i className="arrow left" />
                </button>
                <button className="todayNavButton"
                    onClick={() => this.props.storage.changeDisplayedToday(1)}>
                    <i className="arrow right" />
                </button>
            </div>
        );
    }
}