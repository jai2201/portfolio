import React from "react";
const Introduction = (props) => {
	return (
		<div style={{ marginTop: 450 }}>
			<p style={{ fontSize: 60, textAlign: "center", color: "#48dbfb" }}>
				<b>JAI SONI</b>
			</p>
			<p
				style={{
					textAlign: "center",
					fontSize: 30,
					color: "white",
					fontFamily: "Harmattan, sans-serif",
					width: 1200,
					marginLeft: 230,
				}}
			>
				Hello , I am Jai , first year undergrad student at IIT Roorkee and a
				passionate FullStack Software developer , I have a proven record of
				providing extra-ordinary quality and service in this sector . I am
				always looking to secure and expand a responsible position in an IT
				organization and bring a change in this world by contributing in it and
				develop current skillset further.
			</p>
			<center>
				<button
					style={{
						height: 65,
						width: 250,
						color: "black",
						fontSize: 35,
						backgroundColor: "#48dbfb",
						border: "none",
						padding: 5,
						cursor: "pointer",
						fontFamily: "Harmattan, sans-serif",
					}}
				>
					<b>VIÉW RÉSUME</b>
				</button>
			</center>
		</div>
	);
};
export default Introduction;
