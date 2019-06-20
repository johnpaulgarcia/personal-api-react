import React, { Component } from 'react';
import Navigation from '../Navigation';
import Categories from '../Categories';
import CategoriesSM from '../Categories/Categories-sm';
import Movies from '../Movies';
import Container from '../../components/Container';
import { getPopularMovies,getGenres,getMoviesByGenre,searchMovies } from '../../api';
import { getDataFn } from '../../actions/data';
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies : [],
            genres : [],
            loading: false,
            page : 1
        }
    }
    componentWillMount(){
        let { page } = this.state;
        this.loadGenre(page);
        this.loadMovies(page);   
    }
    loadMovies = (page) => {
        this.setState({loading: true});
        let data = getDataFn(getPopularMovies+page)
                    .then(data=>{
                       let results = data.results;
                       this.setState({
                           movies: results
                       });
                       this.setState({loading: false});
                       console.log(results[0]);
                    });
       

    }

    loadGenre = (page) => {
        this.setState({loading: true});
       let data = getDataFn(getGenres+page).then(data=>{
           let genres = data.genres;
           this.setState({genres: genres});
           this.setState({loading: false});
       });
       
       
    }

    fetchByGenre = (id) => {
        this.setState({loading: true});
        let data = getDataFn(getMoviesByGenre+id).then(data=>{
            let movies = data.results;
            this.setState({
                movies: movies
            });
            this.setState({loading: false});
        });
       
        
    }

    searchMovies = (query) => {
        this.setState({loading: true});
        let data = getDataFn(searchMovies+query).then(data=>{
            let movies = data.results;
            this.setState({
                movies: movies
            });
            this.setState({loading: false});
        }).catch(err=>{
            this.loadMovies(this.state.page);
            this.setState({loading: false});
        })
    }

    render(){
        return(
            <Container>
                <Navigation searchMoviesFn={this.searchMovies}/>
                <CategoriesSM />
                <Categories fetchByGenre={this.fetchByGenre} genres={this.state.genres}/>
                <Movies movies={this.state.movies}/>
            </Container>
        );
    }
}
