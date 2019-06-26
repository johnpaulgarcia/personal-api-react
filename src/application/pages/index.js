import React from 'react';
import { HashRouter, Switch, Route, Redirect,Link } from 'react-router-dom';
import Home from '../pages/Home';
import Container from '../components/Container';
import Loading from '../components/Loading';
import Navigation from '../pages/Navigation';
import { getPopularMovies,getGenres,getMoviesByGenre,searchMovies, getTopRatedMovies, getNowPlayingMovies } from '../api';
import { getDataFn } from '../actions/data';
import MoviesInformation from './MoviesInformation';
import Paged from '../pages/Paged';
import Pages from '../pages/Pages';
import { bigIntLiteral } from '@babel/types';
class index extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            movies : [],
            searching: false,
            loading: false,
            page: 1,
            redirect: false,
            activePage: '',
            command: false
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
        let quered = '';
        let { page,command } = this.state;
        switch(query){
            case 'popular': quered = getPopularMovies; break;
            case 'toprated': quered = getTopRatedMovies; break;
            case 'nowplaying': quered = getNowPlayingMovies; break;
            default:
                console.log("Error.",query,this.state.activePage);
        }
        getDataFn(quered+page)
        .then(response=>{
            let data = response.results;
            this.setState({
                movies: (this.state.movies && !(this.state.activePage !== query)) ? [...this.state.movies,...data] : data,
                loading: false,
                activePage: query
            })
        });
        
    }

    loadmore = (query) => {
      
        this.setState({
            page: this.state.page + 1,
            loading: true,
            activePage: query
           
         },()=>{
            this.populateMovies(query);
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
            <Route
                path="/paged/:pagename"
                render={(props)=><Paged loadmore={this.loadmore} movies={this.state.movies} {...props} />}
            />

            <Route  
                path="/pages/:pageno"
                render={(props)=><Pages {...props}/>}
                />
          </Switch>
         
        </HashRouter>
        </Container>
    );

    }
}

export default index;