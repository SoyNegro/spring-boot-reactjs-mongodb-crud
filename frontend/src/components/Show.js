import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const API_URL = 'http://localhost:8080/api';
class Show extends Component{
	constructor(props){
    super(props);
	this.state = {
		book:{}
	};
}

componentDidMount(){
	console.log(this.props.match.params.id);
	axios.get(`${API_URL}/books/`+this.props.match.params.id)
	.then( res =>{
	
    this.setState({book:res.data});
    console.log(this.state.book);	
   	});
	
	}
delete(id){
	axios.delete(`${API_URL}/books/`+id)
	 .then((result) =>{
		 this.props.history.push("/");
	 }
	 
	 );
}

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Book Details
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Books List</Link></h4>
            <dl>
              <dt>Name:</dt>
              <dd>{this.state.book.name}</dd>
              <dt>Author:</dt>
              <dd>{this.state.book.author}</dd>
              <dt>Added:</dt>
              <dd>{this.state.book.added}</dd>
              <dt>Progress:</dt>
              <dd>{this.state.book.progress}</dd>
              <dt>Rate:</dt>
              <dd>{this.state.book.rate}</dd>
            </dl>
            <Link to={`/edit/${this.state.book.id}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.book.id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}


export default Show;