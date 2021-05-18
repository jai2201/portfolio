import React from "react";
import ScrollButton from "./ScrollButton";
import "./Layout.css";
const Layout = (props) => {
	return (
		<div>
			<ScrollButton />
			{props.children}
		</div>
	);
};
export default Layout;
