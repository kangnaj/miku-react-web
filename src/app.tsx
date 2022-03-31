import React, {Component} from 'react'
import Login from './pages/Login';
import admin from './pages/admin/admin';
import 'antd/dist/antd.css';
import "./app.scss";
import { HashRouter, Route, Switch, BrowserRouter } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route path="/login" component={Login}></Route>
					<Route path="/" component={admin}></Route>
				</Switch>
			</HashRouter>
		);
	}
}


export default App
