const React = require('react');
const Gnav = require('./Gnav.jsx');
const PokemonList = require('./PokemonList.jsx');
const gnavData = require('../../data/gnav');

const Index = React.createClass({
    getInitialState: function() {
        return {
            current: 0 /* gnavのカレント */
        };
    },
    getDefaultProps: function() {
        return {
            gnav: gnavData   /* gnavの中身 */
        };
    },
    gnavClick: function(index) {
        this.setState({ current: index });
    },
    render: function()　{
        return (
            <div>
                <Gnav current={this.state.current} gnav={this.props.gnav} _click={this.gnavClick} />
                <PokemonList current={this.state.current} />
            </div>
        );
    }
});
module.exports = Index;
