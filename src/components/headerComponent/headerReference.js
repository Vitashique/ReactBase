import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
      		//creates a logo at the top of the page
      		<div className="logo">
      			LOGO
      		</div>

      		//creates the navigation at the top of the page
      		<nav>	
      			//unordered list
      			<ul>
      				//list items
      				<li>
      					//anchor tag ie. hyperlink
      					<a href="#">Home</a>
      				</li>

      				<li>
      					<a href="#">Products</a>
      				</li>

      				<li>
      					<a href="#">Contact</a>
      				</li>
      			</ul>
  			</nav>
      </header>
    );
  }
}

export default Header;
