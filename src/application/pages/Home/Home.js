import React, { Component } from 'react';
import Navigation from '../Navigation';
import Categories from '../Categories';
import CategoriesSM from '../Categories/Categories-sm';
import Movies from '../Movies';
import Container from '../../components/Container';
export default class Home extends Component {
    render(){
        return(
            <Container>
                <Navigation />
                <CategoriesSM />
                <Categories />
                <Movies />
            </Container>
        );
    }
}
