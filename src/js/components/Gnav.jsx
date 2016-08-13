const React = require('react');

const Gnav = React.createClass({
  propTypes: {
    current: React.PropTypes.number.isRequired,
    gnav: React.PropTypes.array.isRequired,
    _click: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return {
      gnavClass: 'ExClose'
    };
  },
  titleClick: function() {
    if(this.state.gnavClass==='ExOpen') {
      this.setState({ gnavClass: 'ExClose' });
    }else {
      this.setState({ gnavClass: 'ExOpen' });
    }
  },
  _gnavClick: function(index) {
    /* 親コンポーネントにイベントを委譲 */
    this.props._click(index);
  },
  render: function(){

    const gnavTitle = this.props.gnav[this.props.current];

    const gnavNodes = this.props.gnav.map((gnav, index) => {
      if(this.props.current===index) {
        return <li className="ExCurrent" key={index} onClick={this._gnavClick.bind(this, index)}>{gnav}</li>
      }else {
        return <li key={index} onClick={this._gnavClick.bind(this, index)}>{gnav}</li>
      }
    });

    return (
      <nav>
        <dl className={this.state.gnavClass}>
          <dt onClick={this.titleClick}>{gnavTitle}</dt>
          <dd>
            <ul>
              {gnavNodes}
            </ul>
          </dd>
        </dl>
      </nav>
    );
  }
});
module.exports = Gnav;
