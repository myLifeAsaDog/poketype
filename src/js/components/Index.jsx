import React from 'react';
import Gnav from './Gnav.jsx';
import PokemonList from './PokemonList.jsx';
import gnavData from '../../data/gnav';

export default class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 0 /* gnavのカレント */
        };
        this.gnavClick = this.gnavClick.bind(this);
    }
    gnavClick(index) {
        this.setState({ current: index });
    }
    render() {
        return (
            <div>
                <Gnav current={this.state.current} gnav={this.props.gnav} _click={this.gnavClick} />
                <PokemonList current={this.state.current} />
            </div>
        );
    }
}
Index.defaultProps = {
    gnav: gnavData   /* gnavの中身 */
};
