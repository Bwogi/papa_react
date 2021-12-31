import styles from './Joke.module.css';

const Joke = ({ joke }) => {
	return (
		<div>
			<p className={styles.joke}>{joke}</p>
		</div>
	);
};

export default Joke;
