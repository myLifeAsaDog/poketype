import React from 'react';

export default class Gnav extends React.Component {
    constructor() {
        super();
        this.state = {
          gnavClass: 'ExClose'
        };
        this.titleClick = this.titleClick.bind(this);
    }
    titleClick() {
        if (this.state.gnavClass==='ExOpen') {
            this.setState({ gnavClass: 'ExClose' });
        } else {
            this.setState({ gnavClass: 'ExOpen' });
        }
    }
    _gnavClick(index) {
        /* 親コンポーネントにイベントを委譲 */
        this.props._click(index);
    }
    render() {
        const gnavTitle = this.props.gnav[this.props.current];

        const gnavNodes = this.props.gnav.map((gnav, index) => {
            if(this.props.current===index) {
                return <li className="ExCurrent" key={index} onClick={this._gnavClick.bind(this, index)}>{gnav}</li>
            } else {
                return <li key={index} onClick={this._gnavClick.bind(this, index)}>{gnav}</li>
            }
        });

        return (
            <nav>
                <dl className={this.state.gnavClass}>
                    <dt onClick={this.titleClick}>{gnavTitle}</dt>
                    <dd>
                        <ul>{gnavNodes}</ul>
                    </dd>
                </dl>
            </nav>
        );
    }
};
