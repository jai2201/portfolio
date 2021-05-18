import React from "react";

const GetInTouch = (props) => {
	return (
		<div className="get_in_touch" style={{ width: 1300 }}>
			<h1
				style={{
					fontSize: 35,
					color: "#48dbfb",
					textAlign: "left",
					marginLeft: 430,
					marginTop: 70,
				}}
			>
				GET IN TOUCH
			</h1>
			<p
				style={{
					color: "white",
					fontSize: 30,
					marginLeft: 430,
					fontFamily: "Harmattan, sans-serif",
				}}
			>
				Got a project / Idea for me ? , My Inbox is always open for new projects
				and suggestions to improve my portfolio and other skill sets. Feel free
				to ping me up and give your Review / Advice.
				<br />
				<br />
				<button
					style={{
						height: 65,
						width: 250,
						color: "black",
						fontSize: 30,
						backgroundColor: "#48dbfb",
						border: "none",
						padding: 2,
						cursor: "pointer",
						fontFamily: "Harmattan, sans-serif",
					}}
				>
					<b>Émail Mé</b>
				</button>
				<br />
				<br />
				<p style={{ color: "white", fontSize: 20 }}> Designed By Jai </p>
				<br />
				<br />
				<br />
				<br />
			</p>
		</div>
	);
};
export default GetInTouch;
