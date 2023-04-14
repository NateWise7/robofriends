import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

function App() {
	const [robots, setRobots] = useState([]);
	const [searchfield, setSearchField] = useState('')

	

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users => setRobots(users));
	}, [])

	function onSearchChange  (event)  {
		setSearchField(event.target.value)
	}

	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase())
	}, [])

		return !robots.length ? (
		<h1>Loading</h1> 
		):(
			<div className='tc'>
				<h1 className='f1 pv2'>Robofriends</h1>
					<SearchBox searchChange={onSearchChange}/> 
				<br />
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
			</div>
		);
}

export default App;