import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';
const API_URL = 'http://localhost:8080/api';
class Add extends Component{
	constructor(){
		super();
		var today = new Date().toUTCString();
		this.state = {
			name:'',
			author:'',
			added:today,
			progress:0,
			rate:0,
			iconPath:'',
		};
	}


onChange = (e)=>{
	const state = this.state;
	state[e.target.name]=e.target.value;
	this.setState(state);
}

onSubmit = (e)=>{
	e.preventDefault();
	const {name,author,added,progress,rate,iconPath} = this.state;
	axios.post(`${API_URL}/books`,{name,author,added,progress,rate,iconPath})
	.then((result)=>{this.props.history.push("/")});
}
render(){
const {name,author,added,progress,rate,iconPath} = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD BOOK
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Books List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Name:</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="author">Author:</label>
                <input type="text" class="form-control" name="author" value={author} onChange={this.onChange} placeholder="Author" />
              </div>
             <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
	}
}
export default Add;