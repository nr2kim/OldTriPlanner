import * as React from 'react';

import '../css/style.css';

export class Footer extends React.Component <any, any> {

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
            <div className="footer"> Copyright @ Kate Kim
            </div>
        );
    }
}