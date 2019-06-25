import React, { Component, Fragment } from 'react';
import Movies from '../Movies';
import Loading from '../../components/Loading';
import Categories from '../Categories';
import CategoriesSM from '../Categories/Categories-sm';
import Assortment from '../Assortment';
import { getPopularMovies,getGenres,getMoviesByGenre,searchMovies,getUpcomingMovies } from '../../api';
import { getDataFn } from '../../actions/data';
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies : [],
            genres : [],
            loading: this.props.loading,
            page : 1,
            pageEnd: '',
            searching: false,
            loadless: false
        }
    }
    componentWillMount(){
        let { page } = this.state;
        this.loadMovies(page);
        this.loadGenre(page);   
        document.title = "Home - Movi Trailers ";
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
        let data = getDataFn(getUpcomingMovies+page)
                    .then(data=>{
                       let results = data.results;
                       this.setState({
                           movies: results,
                           pageEnd: results.length
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
        document.title = "Sort by Genre - Movi Trailers";
        this.setState({loading: true,searching: true});
        let data = getDataFn(getMoviesByGenre+id).then(data=>{
            let movies = data.results;
            this.setState({
                movies: [...this.state.movies,movies]
            });
            this.setState({loading: false,searching:false});
        });
       
    
    }


    loadmore = () => {
        let cpage = this.state.page;
        this.setState({
            page: cpage + 1,
            loadless: true,
        })
        this.loadMovies(cpage + 1);
    }

    loadless = () => {

        

       if(this.state.page > 1){
        let cpage = this.state.page;
        this.setState({
            page: cpage - 1,
        })
        this.loadMovies(cpage - 1);
       }
       
      
    }

    updateState = () => {
        this.props.updateState(this.state);
    }
    render(){
       
        let {searching,loadless,page,pageEnd} = this.state;
        return(
            <Fragment>
                {this.state.loading && <Loading />}
                <CategoriesSM fetchByGenre={this.fetchByGenre} genres={this.state.genres} />
               
                <Categories fetchByGenre={this.fetchByGenre} genres={this.state.genres}/>
                <Movies movies={searching ? this.props.movies : this.state.movies}/>
                <div class="next">

                {loadless && page > 1 && <button onClick={()=>this.loadless()} class="loadmore">
                    Prev
                 </button>}
                
                  {page <= pageEnd &&  <button onClick={()=>this.loadmore()} class="loadmore">
                       Next
                    </button>}

                    
              </div>
            </Fragment>
        );
    }
}
