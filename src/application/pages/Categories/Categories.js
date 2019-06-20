import React, { Component } from 'react';
import { getGenres } from '../../api';
import { getDataFn } from '../../actions/data';
import GenreList from '../../components/GenreList';
export default class Categories extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            genres : []
        }
    }
    componentWillMount(){
       let data = getDataFn(getGenres+1).then(data=>{
           let genres = data.genres;
           this.setState({genres: genres});
       });
       
    }
    render(){

        let { genres } = this.state;

        return(
            <div className="categories">
               {
                  genres.map(genre=>{
                   return(
                    <GenreList item={genre}/>
                   ) 
               })
            }
            </div>
        );
    }
}