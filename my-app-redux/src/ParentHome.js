import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import {connect} from 'react-redux';
import AutoSuggestion from './components/Home/AutoSuggestion';
import store from './store';
import { Provider } from 'react-redux';
import Spinner from './components/Layout/Spinner';
import BooksContainer from './components/Home/BooksContainer';


export class ParentHome extends Component {
	render() {
	  const { loading } = this.props;
	  return (
		<Provider store={store}> 
		<div className="container">
		             <AutoSuggestion></AutoSuggestion>

		  {loading ? <Spinner /> : <BooksContainer/>}
		</div>
		</Provider>
	  );
	}
  }
const mapStateToProps = state => ({
	loading: state.books.loading
  });
  
  export default connect(mapStateToProps)(ParentHome);
