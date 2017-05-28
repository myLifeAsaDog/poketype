import React from 'react';
import Pokemon from './Pokemon.jsx';
import pokemonData from '../../data/pokemon';
import Flipsnap from 'flipsnap';

export default class PokemonList extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        this.setState({ flipsnap: Flipsnap(document.querySelector('.pokemonList')) });

        window.addEventListener('resize', () => {
            this.state.flipsnap.refresh();
        });
    }
    componentDidUpdate() {
        document.querySelector('.pokemonList').style.width =  parseInt(this.props.data[this.props.current].fields.length*100)+'vw';
        this.state.flipsnap.moveToPoint(0,0);
        this.state.flipsnap.refresh();
    }
    render() {

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
}
PokemonList.defaultProps = {
    data: pokemonData /* 表示用のポケモンデータ */
};
