import React from 'react';
import '../App.css';

class AnimalCard extends React.Component {

/*
    animalIsFemale ({this.props.animal.name}) {
        if ('F') {
            return '<i className="fas fa-venus"></i>';
        } else {
            return '<i className="fas fa-mars"></i>';
        }
    }
*/


    render () {
        return (
            <div>

                <div className="card animal-card"><a href="animal.html">
                    <img alt="" src="assets/img/helga.jpg" className="profile-pic"/>
                    <div className="animal-header">
                        <span>{this.props.animal.name}</span>
                        <span className="animal-gender">{this.animalIsFemale}</span>
                    </div>
                    <div className="animal-details">{this.props.animal.age} · {this.props.animal.zone}</div>
                    <div className="animal-tags-container"><span className="animal-tag">{this.props.animal.type}</span><span className="animal-tag">cachorro</span><span className="animal-tag">Para familias con niños</span></div>
                    </a></div>

            </div>
        )
    }
}

export default AnimalCard;