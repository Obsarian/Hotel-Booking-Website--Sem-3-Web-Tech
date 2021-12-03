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
					<p><b>Sed ut perspiciatis unde omnis iste natus error sit 
						voluptatem accusantium doloremque laudantium, totam rem 
						aperiam, eaque ipsa quae ab illo inventore veritatis et 
						quasi architecto beatae vitae dicta sunt explicabo. 
						Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
						aut odit aut fugit, sed quia consequuntur magni dolores 
						eos qui ratione voluptatem sequi nesciunt. Neque porro 
						quisquam est, qui dolorem ipsum quia dolor sit amet, 
						consectetur, adipisci velit, sed quia non numquam eius 
						modi tempora incidunt ut labore et dolore magnam aliquam 
						quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
						exercitationem ullam corporis suscipit laboriosam, nisi ut 
						aliquid ex ea commodi consequatur? Quis autem vel eum iure 
						reprehenderit qui in ea voluptate velit esse quam nihil 
						molestiae consequatur, vel illum qui dolorem eum fugiat 
						quo voluptas nulla pariatur?</b></p>
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