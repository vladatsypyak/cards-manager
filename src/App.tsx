import MyCardsPage from "./pages/MyCardsPage";
import {useEffect} from "react";


function App(): JSX.Element {
	useEffect(() => {
		const userTheme = localStorage.getItem("theme") ?? "light"
		document.documentElement.classList.toggle("dark", userTheme === "dark")
	}, [])

	return  <div>
		<MyCardsPage/>
	</div>
}

export default App;
