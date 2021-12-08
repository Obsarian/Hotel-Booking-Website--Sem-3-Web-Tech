import React from 'react';
import styles from './styling/testimonials.module.css'

class Testimonials extends React.Component {
	render() {
		return (
			<div className={styles.testwindow}>
				<div style={{margin: "60px 0 60px 0"}}>
					<h1 style={{fontSize: "43px"}}>Testimonials</h1>
				</div>
				<div className={styles.testpara}>
					<p><b><i>"We had our company annual offsite at RRS Bonvoy in Bali. 
						RRS was the perfect choice for us: there are multiple 
						large event spaces for various activities and the great staff 
						made sure the events went smoothly. The hotel food was also of 
						a very high quality with an impressive choice at breakfast. 
						Combined with a stunning view of the sea and a private beach, 
						we couldn’t have asked for a better place for our company. 
						Thank you for making our trip so special."</i></b></p>
					<a className={styles.testprevarrow} style={{left: "-120px"}}>&#10094;</a>
  					<a className={styles.testnextarrow} style={{right: "-120px"}}>&#10095;</a>
				</div>
				<div class="dot-container" style={{textAlign: "center", padding: "10px"}}>
					<span className={styles.dot}></span>
					<span className={styles.dot}></span>
					<span className={styles.dot}></span>
				</div>
			</div>
		);
	}
}

export default Testimonials;