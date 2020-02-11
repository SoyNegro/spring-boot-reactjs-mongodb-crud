import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const API_URL = 'http://localhost:8080/api';
class Edit extends Component{
	constructor(props){
		super(props);
		this.state ={
			
			book: {},
		};
		
	}
	
	
componentDidMount(){
	axios.get(`${API_URL}/books/`+this.props.match.params.id)
	 .then( res=>{
		this.setState({book:res.data});
       	console.log(this.props.match.params.id);	 
	 });
	
}

onChange = (e)=>{
	const state = this.state;
	state[e.target.name] = e.target.value;
	this.setState({book:state});
	
}

onSubmit = (e) =>{
	e.preventDefault();
	
	const {name,author,added,progress,rate,iconPath} = this.state.book;
	
	axios.put(`${API_URL}/books/`+this.props.match.params.id,{name,author,added,progress,rate,iconPath}).then((result) =>{
		this.props.history.push("/show/"+this.props.match.params.id);
	});
}
 render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT book
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.book.id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Book List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Name:</label>
                <input type="text" class="form-control" name="name" value={this.state.book.name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="author">Author:</label>
                <input type="text" class="form-control" name="author" value={this.state.book.author} onChange={this.onChange} placeholder="Author" />
              </div>
              <div class="form-group">
                <label for="rate">Rate:</label>
                <input type="number" min="0" max="5" class="form-control" name="rate" value={this.state.book.rate} onChange={this.onChange} placeholder="Rate" />
              </div>
              <div class="form-group">
                <label for="progress">Progress:</label>
                <input type="number" min="0" class="form-control" name="progress" value={this.state.book.progress} onChange={this.onChange} placeholder="Progress" />
              </div>
              <button type="submit" class="btn btn-default">Update</button>
            </form>
          </div>
        </div>
      </div>
    );
  }	
	
}
export default Edit;