import React, { useEffect, useState } from 'react';

const RandomJokes = (firstName, lastName) => {
	const [joke, setJoke] = useState('');
	useEffect(() => {
		const fetchJoke = async () => {
			await fetch(
				`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
			)
				.then((res) => res.json())
				.then((data) => {
					setJoke(data.value.joke);
				});
		};
		fetchJoke('Peter', 'Bosa');
	}, [firstName, lastName]); // this happens on the component mount
	return joke;
};

export default RandomJokes;
