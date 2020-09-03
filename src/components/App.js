import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import Footer from './Footer';
import Header from './Header';
import './App.css';


class App extends React.Component {

	state = { images: [] };
	
	onSearchSubmit = async (term) => {
	
		const response = await unsplash.get('/search/photos', {
			params: { query: term },	
		});

		this.setState({ images: response.data.results });
	}


	render() {
		return (
			<>
			<Header />
			<SearchBar onSubmit={this.onSearchSubmit}/>
			<div className="ui container">
				<ImageList images={this.state.images} />
			</div>
			<Footer />
		    </>
		);
	}

}


export default App;