import React from 'react';
import nameMap from '../../data/nameMap';

export default class Pokemon extends React.Component {
    render() {
        const pokemonImage = 'Pokemon' +this.props.no;

        const typeNodes = this.props.type.map(function(type, index) {
            return (<li className={'type-'+type} key={index}>{nameMap[type]}</li>);
        });

        const resistNodes = this.props.resist.map(function(resist, index) {
            return (<li className={'type-'+resist} key={index}>{nameMap[resist]}</li>);
        });

        const weakNodes = this.props.weak.map(function(weak, index) {
            return (<li className={'type-'+weak} key={index}>{nameMap[weak]}</li>);
        });

        return (
            <li>
                <article>
                    <div className="pokemon-inner">
                        <span>No.{this.props.no}</span>
                        <figure>
                            <span className={pokemonImage}></span>
                            <figcaption>{this.props.name}</figcaption>
                        </figure>
                        <dl className="typeTable">
                            <dt>タイプ</dt>
                            <dd>
                                <ul>{typeNodes}</ul>
                            </dd>
                        </dl>
                        <dl className="affinityTable">
                            <dt>耐性</dt>
                            <dd>
                                <ul>{resistNodes}</ul>
                            </dd>
                        </dl>
                        <dl className="affinityTable">
                            <dt>弱点</dt>
                            <dd>
                                <ul>{weakNodes}</ul>
                            </dd>
                        </dl>
                    </div>
                </article>
            </li>
        );
    }
}
