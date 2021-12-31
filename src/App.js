import React, { useEffect } from 'react';
import Joke from './Components/Joke';
import styles from './App.module.css';

const App = () => {
	useEffect(() => {
		const fetchJoke = async () =>
			await fetch(
				`http://api.icndb.com/jokes/random?firstName=Andrew&lastName=Bwogi`
			)
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
				});
		fetchJoke();
	}, []);

	return (
		<center className={styles.main}>
			<h1 className={styles.title}>The Joke Generator</h1>
			<Joke />
			<button className={styles.btn}>Generate Joke</button>
		</center>
	);
};

export default App;
