import React, { Component } from 'react';
import TableData from './components/TableData';
import  './App.css';
import {connect} from 'react-redux';
import {contacts} from './constants/contacts.js';
import {searchTerm} from './actions.js';
import {searchName} from './reducer';
console.log(contacts);

class App extends Component{
  constructor(){
    super();
    
    //this.handleChange=this.handleChange.bind(this);
  }
  handleChange=(e)=>{
    var term = e.target.value;
    /*
    this.setState({
      name:e.target.value
    });
    */
   
   this.props.inputEntered(e.target.value);
    console.log("in handleChange: ", e.target.value);
    //console.log(this.state.name);
  }
  
  render(){
    return(
      <div id="messages">
        <div id="headingview">
        <table>
        <tr>
        <td className="message"><h2 >Message</h2></td>
         <td className="namecell"><div className="namediv"> <h3 >Name</h3></div></td>
          </tr>

          </table>
                    </div>
                    <form>
        <input type="text" value={this.props.nameOne} onChange={this.handleChange} /></form>
       <TableData searchTerm={this.props.nameOne} contacts={contacts} />
        
        </div>
    )
  }
}



var mapStateToProps = state => {
  console.log("in mapStateToProps", state.term);
  return {

    nameOne : state.term
  }
}

var mapDispatchToProps = dispatch => {
  return {
      inputEntered:(term) => {
        console.log("in mapDispatch: ", term);
      dispatch(searchTerm(term));
    }
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(App);
