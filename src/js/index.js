//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCouter(props) {
	return (
		<div className="bigCounter">
			<div className="calendar">
				<i className="far fa-clock"></i>
			</div>
			<div className="six"> {props.digitSix % 10} </div>
			<div className="five"> {props.digitFive % 10} </div>
			<div className="four"> {props.digitFour % 10} </div>
			<div className="three">{props.digitThree % 10}</div>
			<div className="two">{props.digitTwo % 10}</div>
			<div className="one">{props.digitOne % 10}</div>
		</div>
	);
}
SimpleCouter.propTypes = {
	digitSix: PropTypes.number,
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number,
};
let Couter = 0;
setInterval(function () {
	const Six = Math.floor(Couter / 100000);
	const Five = Math.floor(Couter / 10000);
	const Four = Math.floor(Couter / 1000);
	const Three = Math.floor(Couter / 100);
	const Two = Math.floor(Couter / 10);
	const One = Math.floor(Couter / 1);
	console.log(Five, Four, Three, Two, One);
	Couter++;
	ReactDOM.render(
		<SimpleCouter
			digitOne={One}
			digitTwo={Two}
			digitThree={Three}
			digitFour={Four}
			digitFive={Five}
			digitSix={Six}
		/>,
		document.querySelector("#app")
	);
}, 1000);
