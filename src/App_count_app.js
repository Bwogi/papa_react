import React, { useState } from 'react';
import './App.css';

function App() {
	let [count, setCount] = useState(0);
	const add = () => setCount(count + 1);
	const reduce = () => setCount(count - 1);

	return (
		<div className='App'>
			<h1>The Counter App</h1>
			<h3>Current Count is {count}</h3>
			<button onClick={add}>+</button>
			<button onClick={reduce}>-</button>
		</div>
	);
}

export default App;
