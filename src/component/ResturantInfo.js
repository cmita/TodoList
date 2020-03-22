import React, {Component} from 'react';
import { connect } from 'react-redux';
import  * as action  from '../store/action.js';
import { enumDefaultedMember } from '@babel/types';

class ResturantInfo extends Component{
    constructor(props){
        super(props);
        this.state={
            resturantInfo:[],
            searchMe: this.props.searchItem, 
            allResurantInfo :[],
            showModal: false
        }
        
    }

    addItem=()=>{
        // this.setState({
        //     ...this.state,
        //     addItem: {'title':this.addsf.value,'id':'102'}
        // })
    }

    searchItem=()=>{
        console.log('here',this.props.resturantInfo );
        let searchResult= this.props.resturantInfo.filter((item,index)=>{
            return item.id == this.search.value;
        })
       
        if(searchResult.length>0){
            this.setState({
                resturantInfo: searchResult
            })
        }else{
            this.setState({
                resturantInfo: this.props.resturantInfo
            })
        }
    }
    
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((data)=>{
            return data.json()
        }).then((result)=>{
            // this.setState({
            //     resturantInfo : result,//this.state.resturantInfo.concat(result)
            //     allResurantInfo:result
            // })
            this.props.load(result);
            this.setState({
                resturantInfo:this.props.resturantInfo
            })
            
        })
    }

    componentWillReceiveProps({someProp}) {
        console.log('s', someProp);
        // this.setState({
        //     resturantInfo : {'title':'cmita', 'id':'420'}
        // })
      }
      deleteMe=(index)=>{
        //   console.log('index', index);
        //  let deletedResult = this.props.resturantInfo.filter((item)=>{
        //     return item!== this.props.resturantInfo[index]
        //  })
        //  console.log('deletedResult',deletedResult);
        //  this.setState({
        //     resturantInfo: deletedResult
        // })
        this.setState({
            showModal: true
        })

      }
    render(){
        
        return(    
            <React.Fragment>
                <input type="text" ref={(input)=>this.search=input}/>
                <button onClick={() => this.searchItem()}>Search</button>
                <input type="text" ref={(input)=>this.addsf=input}/>
                <button onClick={() => this.addItem()}>AddItem</button>     
                <div className="top">{this.state.resturantInfo.map((item,index)=>{
                    return(<div className="main" key={index} onClick={()=>this.deleteMe(index)}>
                        <div>{item.id}</div> 
                        <div>{item.title}</div>      
                    </div>)
                }
                        
                )}</div>  

                {this.state.showModal &&
                    <div className="modal">showMe here</div>
                }
            </React.Fragment>
           
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        resturantInfo:state.resturantInfo
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        // searchItem: (val)=> dispatch(action.searchItem(val)),
        load: (result)=>dispatch(action.load(result))

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ResturantInfo);