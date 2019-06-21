import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Container from '../components/Container';
import Loading from '../components/Loading';
import Navigation from '../pages/Navigation';
import { getPopularMovies,getGenres,getMoviesByGenre,searchMovies } from '../api';
import { getDataFn } from '../actions/data';
class index extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            movies : [],
            searching: false,
            loading: false
        }
    }

    searchMovies = (query) => {
       this.setState({searching: true,loading: true});
        let data = getDataFn(searchMovies+query).then(data=>{
            let movies = data.results;
            this.setState({
                movies: movies,loading:false
            });
        }).catch(err=>{
           this.setState({
               searching: false,loading: false
           })
        })
    }

    render(){
        let { movies } = this.state;
    return(
        <Container>
        <HashRouter>
        <Navigation searchMoviesFn={this.searchMovies}/>
        {this.state.loading && <Loading />}
          <Switch>
            <Route 
                path="/" 
                render={(props)=><Home {...props} searching={this.state.searching} movies={this.state.movies} />} />
          </Switch>
        </HashRouter>
        </Container>
    );

    }
}

export default index;