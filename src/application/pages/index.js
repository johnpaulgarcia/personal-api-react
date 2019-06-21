import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import Container from '../components/Container';
import Loading from '../components/Loading';
import Navigation from '../pages/Navigation';
import { getPopularMovies,getGenres,getMoviesByGenre,searchMovies } from '../api';
import { getDataFn } from '../actions/data';
import MoviesInformation from './MoviesInformation';
class index extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            movies : [],
            searching: false,
            loading: false,
            redirect: false,
        }
    }

    searchMovies = (query) => {
       this.setState({searching: true,loading: true});
        let data = getDataFn(searchMovies+query).then(data=>{
            let movies = data.results;
            this.setState({
                movies: movies,loading:false,redirect:true
            });
        }).catch(err=>{
           this.setState({
               searching: false,loading: false
           })
        })

       
    }

    populateMovies = (query) => {
        getDataFn(getPopularMovies+1)
        .then(response=>{
            let data = response.results;
            this.setState({
                movies: data,
            })
        })
    }

 


    render(){
        let { movies } = this.state;
    return(
        <Container>
        <HashRouter>
        <Navigation populateMoviesFn={this.populateMovies} searchMoviesFn={this.searchMovies}/>
        {this.state.loading && <Loading />}
          <Switch>
            <Route 
                exact
                path="/" 
                render={(props)=><Home {...props} searching={this.state.searching} movies={this.state.movies} />} />
            <Route 
                path="/movie/:id" 
                render={(props)=><MoviesInformation {...props} />} />
          </Switch>
        </HashRouter>
        </Container>
    );

    }
}

export default index;