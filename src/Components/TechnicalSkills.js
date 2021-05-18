import React from "react";
import capture from "./Capture.PNG";
import capture1 from "./Capture1.PNG";

const TechincalSkills = (props) => {
	return (
		<div className="technical_skills" style={{ width: 1300 }}>
			<h1
				style={{
					fontSize: 35,
					color: "#48dbfb",
					textAlign: "left",
					marginLeft: 430,
					marginTop: 70,
				}}
			>
				TECHNICAL SKILLS
			</h1>
			<p
				style={{
					color: "white",
					fontSize: 30,
					marginLeft: 430,
					fontFamily: "Harmattan, sans-serif",
				}}
			>
				Working on few FullStack projects have given me an experience in
				developing applications keeping in mind the user compatibilty with
				pleasant user interface. Being a FullStack Developer , I am familiar
				with technologies such as JavaScript,React,Python,Django,
				Django-REST,HTML/CSS.
			</p>
			<img src={capture} alt="react" style={{ marginLeft: 420 }} />
			<img src={capture1} alt="django" />
		</div>
	);
};
export default TechincalSkills;
