import React from "react";

import Colors from "../../../styles/Colors";
import styles from "./IntroStyles";

const Intro = () => {
	const classes = styles();
	return (
		<div className={classes.intro}>
			<div
				style={{color: Colors.themeFontColor}}
				className={classes.hi}
				data-aos="fade-up"
				data-aos-once="true"
				data-aos-offset="0"
				data-aos-delay="10"
				data-aos-duration="1100"
				data-aos-easing="ease-in-out">
				Hi, my name is
			</div>

			<div
				style={{color: Colors.nameColor}}
				className={classes.name}
				data-aos="fade-up"
				data-aos-once="true"
				data-aos-offset="0"
				data-aos-delay="10"
				data-aos-duration="1200"
				data-aos-easing="ease-in-out">
				Sagar Mittal
			</div>

			<div
				style={{color: Colors.motoColor}}
				className={classes.moto}
				data-aos="fade-up"
				data-aos-once="true"
				data-aos-offset="0"
				data-aos-delay="10"
				data-aos-duration="1300"
				data-aos-easing="ease-in-out">
				I write codes to stay alive :)
			</div>

			<div
				style={{color: Colors.shortDescriptionColor}}
				className={classes.shortDescription}
				data-aos="fade-up"
				data-aos-once="true"
				data-aos-offset="0"
				data-aos-delay="10"
				data-aos-duration="1400"
				data-aos-easing="ease-in-out">
				I am an undergrad student pursuing B.Tech. in Computer Science from GIT Jaipur.
			</div>

			<div
				className={classes.mailMe}
				data-aos="fade-up"
				data-aos-once="true"
				data-aos-offset="0"
				data-aos-delay="10"
				data-aos-duration="1500"
				data-aos-easing="ease-in-out">
				<a className={classes.mailLink} href="mailto:mittalsagar006@gmail.com">
					Get in Touch
				</a>
			</div>
		</div>
	);
};

export default Intro;
