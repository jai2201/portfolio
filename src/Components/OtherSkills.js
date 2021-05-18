import React from "react";

const OtherSkills = (props) => {
	return (
		<div className="other_skills" style={{ width: 1300 }}>
			<h1
				style={{
					fontSize: 35,
					color: "#48dbfb",
					textAlign: "left",
					marginLeft: 430,
					marginTop: 70,
				}}
			>
				OTHER SKILLS
			</h1>
			<p
				style={{
					color: "white",
					fontSize: 30,
					marginLeft: 430,
					fontFamily: "Harmattan, sans-serif",
				}}
			>
				Apart from the above mentioned technical skills , i also have social
				skills which i developed at{" "}
				<a
					href="https://explorin.io/"
					target="_blank"
					style={{ textDecoration: "none", color: "#48dbfb" }}
				>
					Explorin
				</a>
				. Along with this i also love spending my time in gym , bikeriding and
				playing cricket.
				<br /> You can Follow me on - <br />
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						marginRight: 170,
					}}
				>
					<p>
						<a
							href="https://github.com/jai2201"
							target="_blank"
							style={{ textDecoration: "none", color: "#48dbfb" }}
						>
							Github
						</a>
					</p>
					<p>
						<a
							href="https://www.linkedin.com/in/jai-soni-77758b202/"
							target="_blank"
							style={{ textDecoration: "none", color: "#48dbfb" }}
						>
							Linkdin
						</a>
					</p>
					<p>
						<a
							href="https://www.facebook.com/jai22iitr"
							target="_blank"
							style={{ textDecoration: "none", color: "#48dbfb" }}
						>
							Facebook
						</a>
					</p>
					<p>
						<a
							href="https://www.instagram.com/jai.soni22/"
							target="_blank"
							style={{ textDecoration: "none", color: "#48dbfb" }}
						>
							Instagram
						</a>
					</p>
				</div>
			</p>
		</div>
	);
};
export default OtherSkills;
