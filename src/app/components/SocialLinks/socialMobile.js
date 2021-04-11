import React from "react";
import {makeStyles} from "@material-ui/core";
import Colors from "../../styles/Colors";

import GithubIcon from "../Icons/Github";
import LeetCodeIcon from "../Icons/Leetcode";
import CodeforcesIcon from "../Icons/Codeforces";
import LinkedinIcon from "../Icons/Linkedin";
import HackerrankIcon from '../Icons/Hackerrank'

const styles = makeStyles(() => ({
	outerSurface: {
		width: "100%",

		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
	},

	iconHolder: {
		height: "40px",
		width: "100%",

		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center",
		alignContent: "center",
	},

	icon: {
		height: "25px",
		width: "25px",
	},

	SVG: {
		width: "100%",
		height: "80%",
		marginTop: "20%",

		fill: Colors.iconColor,
	},
}));

const SocialMobile = () => {
	const classes = styles();
	return (
		<div className={classes.outerSurface}>
			<div className={classes.iconHolder}>
				<div className={classes.icon}>
					<a href="https://github.com/sagarmittal1" target="blank">
						<GithubIcon iconStyles={classes.SVG} />
					</a>
				</div>

				<div className={classes.icon}>
					<a href="https://linkedin.com/in/sagarmittal5" target="blank">
						<LinkedinIcon iconStyles={classes.SVG} />
					</a>
				</div>

				<div className={classes.icon}>
					<a href="https://codeforces.com/profile/mittal_sagar" target="blank">
						<CodeforcesIcon iconStyles={classes.SVG} />
					</a>
				</div>

				<div className={classes.icon}>
					<a href="https://leetcode.com/mittal_sagar" target="blank">
						<LeetCodeIcon iconStyles={classes.SVG} />
					</a>
				</div>

				<div className={classes.icon}>
					<a href="https://www.hackerrank.com/sagarmittal" target="blank">
						<HackerrankIcon iconStyles={classes.SVG} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default SocialMobile;
