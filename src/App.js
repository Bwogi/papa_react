import React, { useState } from 'react';
import Product from './Components/Product';
import styles from './App.module.css';

const App = () => {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState('');
	const addTodo = () => {
		setTodos([input, ...todos]); // new items on top then '...todos' later
		// setTodos([...todos, input]); // '...todos' then new items later
		setInput('');
	};
	return (
		<div>
			<h1>Welcome to my TODO List</h1>
			<input
				value={input}
				onChange={(e) => setInput(e.target.value)}
				type='text'
			/>
			<button onClick={addTodo}>Add Todo</button>
			<h2>List of Todos</h2>
			{todos.map((todo) => (
				<p>{todo}</p>
			))}

			{/* <p className={styles.error}>error occured!</p> */}
			{/* <Product
				name='iPhone watch'
				description='The best watch ever'
				price={605.99}
			/>
			<Product
				name='iPhone 13 Pro Max'
				description='The best phone ever'
				price={1605.99}
			/>
			<Product
				name='MacBook Pro'
				description='The best computer ever'
				price={3605.99}
			/> */}
		</div>
	);
};

export default App;
