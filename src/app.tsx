import React, {Component} from 'react'
import Login from './Login';
import admin from './pages/admin';
import 'antd/dist/antd.css';
import "./app.css";
import { HashRouter, Route, Switch, BrowserRouter } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route path="/login" component={Login}></Route>
					<Route path="/" exact component={admin}></Route>
				</Switch>
			</HashRouter>
		);
	}
}


export default App
