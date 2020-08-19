import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ titulo }) => {
	return (
		<nav className="nav-wrapper light-blue darken-3">
			<a href="#!" className="header-titulo">
				{titulo}
			</a>
		</nav>
	);
};

Header.propTypes = {
	titulo: PropTypes.string.isRequired,
};

export default Header;
