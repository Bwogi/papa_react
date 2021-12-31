import styles from './Joke.module.css';

const Joke = ({ joke, id }) => {
	return (
		<div className={styles.joke}>
			{/* <p>{id}</p> */}
			<p key={id}>{joke}</p>
		</div>
	);
};

export default Joke;
