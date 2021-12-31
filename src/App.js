import Joke from './Components/Joke';
import styles from './App.module.css';
import RandomJoke from './Hooks/RandomJokes';

const App = () => {
	const joke = RandomJoke('Damalie', 'Katiiti');

	return (
		<center className={styles.main}>
			<h1 className={styles.title}>The Joke Generator</h1>
			<Joke joke={joke} />
			<button className={styles.btn}>Generate Joke</button>
		</center>
	);
};

export default App;
