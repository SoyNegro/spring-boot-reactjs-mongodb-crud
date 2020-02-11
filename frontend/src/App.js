import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';
const API_URL = 'http://localhost:8080/api';

class App extends Component{
	constructor(props){
	super(props);
	this.state ={
		books:[]
	};
}

componentDidMount(){
	axios.get(`${API_URL}/books`).then(res=>{
		this.setState({books: res.data});
		console.log(this.state.books);
	});
}

render(){
	return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Book LIST
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/add">
			<span class="glyphicon glyphicon-plus-sign" aria-hidden="true">
			</span> Add Book</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Auhtor</th>
                </tr>
              </thead>
              <tbody>
                {this.state.books.map(b =>
                  <tr>
                    <td><Link to={`/show/${b.id}`}>{b.name}</Link></td>
                    <td>{b.author}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
}
}
export default App;
