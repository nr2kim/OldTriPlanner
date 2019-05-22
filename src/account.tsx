import * as React from 'react';

import '../css/style.css';

export class Account extends React.Component <any, any> {

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
            <div className="account">
            	<button className="accountButton">
                    <img className="accountPhoto" src="../img/account.png" />
                    <p className="accountName">{this.props.storage.getAccountName}</p>
                </button>
            </div>
        );
    }
}