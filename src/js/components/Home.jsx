import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {

	const handleInputChange = (event) => {
		props.onInputChange(event.target.value)
	};

	return (
		<div className="text-center mt-5">
			<h1 className="text-white">Counter</h1>
			<div className="d-inline-flex p-2 flex-row-reverse text-white fs-1">
				<div className="mx-2 p-4 bg-dark rounded border border-dark-subtle">
					<h1>{props.digitOne}</h1>
				</div>
				<div className="mx-2 p-4 bg-dark rounded border border-dark-subtle">
					<h1>{props.digitTwo}</h1>
				</div>
				<div className="mx-2 p-4 bg-dark rounded border border-dark-subtle">
					<h1>{props.digitThree}</h1>
				</div>
				<div className="mx-2 p-4 bg-dark rounded border border-dark-subtle">
					<h1>{props.digitFour}</h1>
				</div>
				<div className="mx-2 p-4 bg-dark rounded border border-dark-subtle">
					<h1>{props.digitFive}</h1>
				</div>
				<div className="mx-2 p-4 bg-dark rounded border border-dark-subtle">
					<h1>{props.digitSix}</h1>
				</div>
				<div className="mx-2 p-4 bg-dark rounded border border-dark-subtle">
					<h1><i class="fa-solid fa-stopwatch"></i></h1>
				</div>

			</div>
			<br></br>
			<input className="my-3" type="number" placeholder="0"
				onChange={handleInputChange}></input>
			<button className="ms-2 btn btn-success" onClick={props.setTimerAction}>
				Set timer</button>
			<br></br>
			<button
				className="btn btn-danger mx-1"
				onClick={props.stopAction}>
				STOP
			</button>
			<button
				className="btn btn-success mx-1"
				onClick={props.startAction}>
				RESUME
			</button>
			<button
				className="btn btn-warning mx-1"
				onClick={props.resetAction}>
				RESET
			</button>
			<br></br>
			<input className="my-3" type="number" placeholder="0"
				onChange={(event) => props.onTargetInputChange(event.target.value)}></input>
			<button className="ms-2 btn btn-success" onClick={props.setTargetAction}>
				Set alert time</button>
		</div>
	);
};

export default Home;