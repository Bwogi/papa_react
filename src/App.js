import React, { useEffect, useState } from 'react';
import Joke from './Components/Joke';
import styles from './App.module.css';

const App = () => {
	const [joke, setJoke] = useState('');

	useEffect(() => {
		const fetchJoke = async () =>
			await fetch(
				`http://api.icndb.com/jokes/random?firstName=Andrew&lastName=Bwogi`
			)
				.then((res) => res.json())
				.then((data) => {
					setJoke(data.value.joke);
				});
		fetchJoke();
	}, []); // this happens on the component mount

	return (
		<center className={styles.main}>
			<h1 className={styles.title}>The Joke Generator</h1>
			<Joke joke={joke} />
			<button className={styles.btn}>Generate Joke</button>
		</center>
	);
};

export default App;
