import "./App.css";
import Layout from "./Layout/Layout";
import Introduction from "./Components/Introduction";
import TechincalSkills from "./Components/TechnicalSkills";
import Experience from "./Components/Experience";
import OtherSkills from "./Components/OtherSkills";
import GetInTouch from "./Components/GetInTouch";
function App() {
	return (
		<Layout>
			<Introduction />
			<TechincalSkills />
			<Experience />
			<OtherSkills />
			<GetInTouch />
		</Layout>
	);
}

export default App;
