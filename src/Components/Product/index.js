import React from 'react';
import ItemDescription from '../ItemDescription';
import styles from './Product.module.css';

const Product = ({ name, description, price }) => {
	return (
		<div className={styles.product}>
			<h1 className={styles.name}>{name}</h1>
			<p className={styles.error}>An error has occured!</p>
			<ItemDescription description={description} price={price} />
		</div>
	);
};

export default Product;
