import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Header } from './header';
import { Body } from './body';
import { Footer } from './footer';
import { Storage } from './storage'

import '../css/style.css';

class TriPlanner extends React.Component <any, any> {
    // private end;

    private storage: Storage;

    public constructor(props) {
        super(props);
        this.storage = new Storage();
    }

    public componentDidUpdate() {
        
    }

    public componentDidMount() {
    }

    public componentWillUnmount() {
    }

                // <div className="body">
                //     <Calendar storage={this.storage} />
                //     <CalendarAddSchedulePopup storage={this.storage} />
                // </div>
    public render() {
        return (
            <div id="triPlanner">
                <Header storage={this.storage} />
                <Body storage={this.storage} />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<TriPlanner />, document.getElementById("ui"));