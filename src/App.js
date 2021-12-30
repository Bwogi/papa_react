import React from 'react';
import Product from './Components/Product';
import styles from './App.module.css';

const App = () => {
	return (
		<div>
			<p className={styles.error}>error occured!</p>
			<Product
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
			/>
		</div>
	);
};

export default App;
