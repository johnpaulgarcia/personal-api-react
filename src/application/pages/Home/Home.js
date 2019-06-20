import React, { Component } from 'react';
import Navigation from '../Navigation';
import Categories from '../Categories';
import Movies from '../Movies';
import Container from '../../components/Container';
export default class Home extends Component {
    render(){
        return(
            <Container>
                <Navigation />
                <Categories />
                <Movies />
            </Container>
        );
    }
}
