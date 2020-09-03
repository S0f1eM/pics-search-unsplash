import React from 'react';

class SearchBar extends React.Component {

	state = { term: '' };

	onFormSubmit = event => {
		event.preventDefault();

		this.props.onSubmit(this.state.term);
	}

	render() {

		return (
		<div className="banner">
			<div className="ui container box">
				<div className="ui inverted header">
					<form onSubmit={this.onFormSubmit} className="ui form">
						<div className="field">
							<label>
								<h2 className="ui inverted header">Images Search
									<a href="https://unsplash.com/documentation/user-authentication-workflow" 
									   className="ui teal tag label">with Unsplash API</a>
								</h2>
							</label>
							
							<input 
							    loading icon='user' 
							    iconPosition='left' 
							    placeholder='Search...'
								type="text" 
								onChange={ e => this.setState({ term: e.target.value })} />
						</div>
					</form>
				</div>
			</div>
		</div>
		);
	}
}

export default SearchBar;