import React, { Component, Fragment } from 'react';
import Movies from '../Movies';
import Loading from '../../components/Loading';
import { getPopularMovies,getGenres,getMoviesByGenre,searchMovies } from '../../api';
import { getDataFn } from '../../actions/data';
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies : [],
            genres : [],
            loading: this.props.loading,
            page : 1,
            searching: false,
        }
    }
    componentWillMount(){
        let { page } = this.state;
        this.loadMovies(page);   
    }
    componentDidUpdate(prevProps){
       if(prevProps.searching!==this.props.searching){
            this.setState({
                searching: this.props.searching,
            });
       }
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
    render(){
        let {searching} = this.state;
        return(
            <Fragment>
                {this.state.loading && <Loading />}
                <Movies movies={searching ? this.props.movies : this.state.movies}/>
            </Fragment>
        );
    }
}
