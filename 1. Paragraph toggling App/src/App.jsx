import { useState } from "react";

function App() {

	const [isButtonChecked, setIsButtonChecked] = useState(true);

	const handleBtnToggle = () =>{
		setIsButtonChecked(!isButtonChecked);
	}

	console.log(isButtonChecked);

	return (
		<div>
			{isButtonChecked ? <p id="my-paragraph">This is the paragraph you can toggle.</p>
			: null	
		}
			
			<button id="toggle-btn" onClick={handleBtnToggle}>Toggle Paragraph</button>
		</div>
	);
}

export default App;
