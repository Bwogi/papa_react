import React from 'react';
import styles from './ItemDescription.module.css';

const ItemDescription = ({ description, price }) => {
	return (
		<div className={styles.desc}>
			<p>
				<strong>{description}</strong>
			</p>
			<p>
				Price:<em className={styles.price}>${price}</em>
			</p>
		</div>
	);
};

export default ItemDescription;
