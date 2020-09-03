import React from 'react';

const Header = () => {

	return (
		<>
			<header className="ui sticky top fixed">
				<div className="item">
					<h1 className="ui inverted header">
						<i className='inverted camera retro icon'/>
						API Images Search
					</h1>
				</div>
				<div>
					<a className="ui inverted header right" href="https://github.com/S0f1eM/pics-search-unsplash">
						View project on Github
					</a>
				</div>
			</header>
		</>
	)
}

export default Header;