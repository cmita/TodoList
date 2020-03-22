import React, {Component} from 'react';
import ResturantInfo from './ResturantInfo.js';

class MainPage extends Component{
    constructor(){
        super();
        this.state ={
            addItem : [],
            searchItem: ''
        }
        // this.searchItem = this.searchItem.bind(this,false); 
        // this.addItem = this.addItem.bind(this,false); 

    }
   
    // addItem=()=>{
    //     console.log(this.addsf.value);
    //     this.setState({
    //         ...this.state,
    //         addItem: {'title':this.addsf.value,'id':'102'}
    //     })
    // }

    // searchItem=()=>{
    //     console.log('aa', this.search.value);
    //     this.setState({
    //         searchItem: this.search.value
    //     })
    // }
    render(){
        return(
            <React.Fragment>
               
                <ResturantInfo additem={this.state.addItem} seachItem={this.state.search}></ResturantInfo>
                
            </React.Fragment>
        )

    }
}

export default MainPage;