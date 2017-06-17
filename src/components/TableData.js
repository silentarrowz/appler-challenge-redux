import React, { Component } from 'react';

class TableData extends Component{
  render(){
    
     var searchTerm=this.props.searchTerm.toLowerCase();
    var contactsInfo=this.props.contacts.map(function(x){
      
      if(searchTerm.length>0){
       
        if(x.name.toLowerCase().indexOf(searchTerm)!==-1){
         return <li><img src={x.image}/>  {x.name}</li>
      }else{
        return null;
         }
      }
      return <li><img src={x.image}/> {x.name} </li>;
      
    });
    
    return(
      <div>
        <ul>{contactsInfo}</ul>
        
        </div>
    );
  }
}


export default TableData;