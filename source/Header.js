import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return <header className="left-side">
		<div>
			<menu>
				<li className="link"><Link to="/info">Описание задания</Link></li>
				<li className="link"><Link to="/table">Таблица</Link></li>
			</menu>
		</div>
	</header>;
};
export default Header;
