import React, { Component } from 'react';
import { Provider } from "react-redux"; 

import Sidebar from "./components/Sidebar";
import Video from "./components/Video";

import store from './store';

class App extends Component {
	
	render() {
		return (
			<div className="App">
				{/* Com o Provider, posso passar o store para todos os filhos. Desta forma,
				 não preciso mais me preocupar em passar parâmetros!!! */}
				<Provider store={store}>
					<Video />
					<Sidebar />
				</Provider>
			</div>
		);
	}
}

export default App;
