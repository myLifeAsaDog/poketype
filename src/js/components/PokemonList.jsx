const React = require('react');
const Pokemon = require('./Pokemon.jsx');
const pokemonData = require('../../data/pokemon');
const Flipsnap = require('flipsnap');

const PokemonList = React.createClass({
    propTypes: {
        current: React.PropTypes.number.isRequired
    },
    getDefaultProps: function() {
        return {
            data: pokemonData /* 表示用のポケモンデータ */
        };
    },
    componentDidMount: function() {
        this.setState({ flipsnap: Flipsnap(document.querySelector('.pokemonList')) });

        window.addEventListener('resize', () => {
            this.state.flipsnap.refresh();
        });
    },
    componentDidUpdate: function() {
        document.querySelector('.pokemonList').style.width =  parseInt(this.props.data[this.props.current].fields.length*100)+'vw';
        this.state.flipsnap.moveToPoint(0,0);
        this.state.flipsnap.refresh();
    },
    render: function()　{

        const listNodes = this.props.data[this.props.current].fields.map(function(pokemon) {
            return (
                <Pokemon key={pokemon.Number} no={pokemon.Number} name={pokemon.Name} type={pokemon.Types} resist={pokemon.Resistant} weak={pokemon.Weaknesses} />
            );
        });

        return (
            <div className="viewport">
                <ol className="pokemonList">
                    {listNodes}
                </ol>
            </div>
        );
    }
});
module.exports = PokemonList;
