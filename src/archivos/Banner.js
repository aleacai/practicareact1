import React from 'react'
import '../App.css'
import PropTypes from 'prop-types';

class Banner extends React.Component{
    render(){
        return(
            <div className ="Elbanner">
                <h2>{this.props.textoban}</h2>
            </div>
        );
    }
}

export default Banner;

Banner.propTypes = {
    textoban: PropTypes.string,
};

Banner.defaultProps = {
    textoban: "hi"
}