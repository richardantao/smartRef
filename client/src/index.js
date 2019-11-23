import React from "react";
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const Index = () => <App/>

render(
	<Router>
		<Index />
	</Router>,
	document.querySelector("#app")
);
