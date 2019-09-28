import React, { Component } from "react";
import { TimelineLite, CSSPlugin } from "gsap/all";
import { Tween, Timeline } from 'react-gsap';
import logo from './logo.png';
import styled from 'styled-components';


// icons will be animated using a stagger method
const iconsArray = [
	{ src: "https://img.icons8.com/ios-filled/50/000000/bench-press-with-dumbbells.png"},
	{ src: "https://img.icons8.com/ios-glyphs/60/000000/rhythmic-gymnastics.png"},
	{ src: "https://img.icons8.com/color/48/000000/fitbit.png"}
];

const StyledTimeline = styled.div`
background: white;
.container {
  text-align: center;
  justify-content: center;
  padding: 25px;
  background: none;
  font-family: 'proxima-nova', sans-serif;
  font-size: 1.6rem;
  margin-top: 25px;
  height: 100%;
  background-color: white;
  border-radius: 8px;
}
.row {
	background-color: white;
	border-radius: 8px;
}
`;

class TimelineSequence extends Component {
	
	constructor(props){
		super(props);

		this.logoTl = new TimelineLite({ paused:true });

		this.content = null;
		this.head = null;
		this.subhead = null;
		this.feature = null;
		this.description = null;
		this.icons = [];
	}

	// add instances to the timeline
	componentDidMount(){
		this.logoTl
			.set(this.content, { autoAlpha: 1 })// show content div
			.from(this.head, 0.5, { left: 100, autoAlpha: 0 })
			.from(this.subhead, 0.5, { left: -100, autoAlpha: 0 }, "-=0.25") // added -0.25 seconds prior to end this.of timeline
			.from(this.feature, 0.5, { scale: .5, autoAlpha: 0 }, "feature") // added 0.5 seconds after end of timeline
			.from(this.description, 0.5, { left: 100, autoAlpha: 0 }, "feature+=0.25")
			.staggerFrom(this.icons, 0.2, { scale: 0, autoAlpha: 0 }, 0.1); //animate all icons with 0.1 second stagger
	}

	render(){
		return <StyledTimeline>
		<div className="container">
			<div className="row">
				<div className="col-12 mt-3">

					<h1 className="text-center">DESIGN YOUR LIFE</h1>
					<br />
                    <p className="lead">Log your <strong>daily activities</strong> and see the 
					<strong> data results</strong> every week with your insights.</p>
					<br />
					<br />
                    <h2>Press Start Below</h2>
					
					{/* WRAPPER */}
					<div className="demoWrapper">

						<div className="bg"></div>

						<div className="content" ref={ div => this.content = div }>
                            <br />
                            <h2 ref={ h1 => this.head = h1 }>Design Your Own Life</h2>
                            <br />
							<p ref={ h2 => this.subhead = h2 }>Based on Stanford's Course, Start building a better future 
							today by logging your new activities and expanding your horizons, all while tracking your data.</p>
							<div className="info">
							<br />
								<img src="https://i2.wp.com/designsbywinther.com/wp-content/uploads/2018/08/blessed.png?resize=350%2C200&ssl=1"
									width="200px"
									height="96px"
									className="feature"
									alt="img"
									ref={ img => this.feature = img }
								/>
								<p className="description" ref={ p => this.description = p }>
                                Start building a better future today by logging your new activities and 
                                expanding your horizons, Personal, Professional, Health, and Creative.
                             </p>
							</div>

							<div className="navItem">
								{ iconsArray.map( (icon, index) => {
									const { src, width, height } = icon;
									return <img
										key={`icon-${index}`}
										src={src} width={width} height={height}
										ref={ img => this.icons[index] = img }
									/>;
								})}
							</div>

						</div>

					</div>

					{/* BUTTONS */}
					<div className="my-3 btn-group">
						<button
							className="btn gsap-btn"
							onClick={() => this.logoTl.play()}
						>Start</button>
						{/*<button
							className="btn gsap-btn"
							onClick={() => this.logoTl.reverse()}
						>Reload</button>*/}
					</div>

				</div>
			</div>
		</div>
	</StyledTimeline>
	}
}

export default TimelineSequence;