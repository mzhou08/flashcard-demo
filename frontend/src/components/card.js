import React, { Component } from 'react';
import './card.scss';

class Card extends Component {

    state = {
        Front: 'front here',
        Back: 'back here'
    }

    getState = () => {

        let url = 'http://clapp1-dev.eba-bfkixsew.us-east-2.elasticbeanstalk.com/api/search/?q=rock&class_id=91'

        let params = {
            method: 'GET'
        }

        /* OLD API CALL HERE

        let url = 'http://127.0.0.1:5000/getDecks/'

        let params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }}
        
        */
        
        fetch(url, params)
            .then(resp => resp.json())
            .then((data) => {
                this.setState({
                Front: data['Default'][0],
                Back: data['Default'][1]
            })})
            .catch(error => console.log(error))
    }

    render() {

        return (
            <div className = 'Card'>
                <br/>
                <h2>{this.state.Front}</h2>
                <hr/>
                <h2>{this.state.Back}</h2>
                <br />
            </div>
        )
    }
}

export default Card;