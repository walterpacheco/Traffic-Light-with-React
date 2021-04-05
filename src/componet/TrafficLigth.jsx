import React, { useState } from "react";

 function TrafficLight() {
	const [currentLight, setLight] = useState("yellow");
	return (
        <div id="trafficTop">
		    <div className="traffic-light">
		    	<div className="protector"></div>
                <div className="protector"></div>
                <div className="protector"></div>
		    	<div className="trafficContainer">
		    		{currentLight === "red" ? (
		    			<div className="red light selected" />
		    		) : (
		    			<div
		    				className="red light"
		    				onClick={() => setLight("red")}
		    			/>
		    		)}
		    		{currentLight === "yellow" ? (
		    			<div className="yellow light selected" />
		    		) : (
		    			<div
		    				className="yellow light"
		    				onClick={() => setLight("yellow")}
		    			/>
		    		)}
		    		{currentLight === "green" ? (
		    			<div className="green light selected" />
		    		) : (
		    			<div
		    				className="green light"
		    				onClick={() => setLight("green")}
		    			/>
		    		)}
		    	</div>
		    </div>
        </div>    
	);
}
export default TrafficLight;