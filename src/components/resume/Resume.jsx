import "./resume.css";
import React from 'react';
// import { Viewer } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import the styles
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
// import { Worker } from '@react-pdf-viewer/core'; // install this library
// import pic from "../../img/ralph-resume.png";


function App() {

	return (
		<div className="App">

			<div id="pdf">
				<div id="header">
					<div id="header-left">
						<div>
							<i class="fa fa-envelope"></i> <a href="mailto:mrralphpierre@gmail.com">mrralphpierre@gmail.com</a>
						</div>
						<div>
							<i class="fa fa-phone"></i> <a href="tel:754-242-7030">(754) 242 - 7030</a>
						</div>
					</div>
					<div id="header-middle">
						<p>Ralph Pierre</p>
					</div>
					<div id="header-right">
						<div>
							<a href="https://github.com/rpierr33">GitHub</a> <i class="fa fa-github"></i>
						</div>
						<div>
							<a href="https://www.linkedin.com/in/ralph-pierre-01147863/">linkedin</a> <i class="fa fa-linkedin"></i>
						</div>
						<div>
							<a href="https://61de591372f731add810c189--confident-benz-8f7d18.netlify.app/">portfolio</a> <i class="fa fa-globe"></i>
						</div>
					</div>
				</div>
				<div class="section">
					<div class="section-header">
						<i class="fa fa-graduation-cap"></i> EDUCATION
					</div>
					<div class="item">
						<div class="item-header">
							<div class="item-title">University of Miami - Miami, Florida
              					<ul>
									<li>Full Stack Web Development</li>
								</ul>
							</div>
							<div class="item-date">Jun 2021 - Nov 2021</div>
						</div>

						<div class="item-header">
							<div class="item-title">Florida International University - Miami, Florida
              					<ul>
									<li>Bachelor of Health Services Administration</li>
								</ul>
							</div>
							<div class="item-date">Jan 2014 - Dec 2015</div>
						</div>

					</div>
				</div>

				<div class="section">
					<div class="section-header">
						<i class="fa fa-code"></i> INDEPENDENT PROJECTS
					</div>

				</div>



				<div class="item">
					<div class="item-header">
						<div class="item-title">ReadMyLips Game</div>
					</div>
					<ul>
						<li>An online game for friends and Family which allows players to 
							generate a random giphy or a random joke, and the other players 
							must guess what the gihpy or joke is by reading the initial 
							player’s lips</li>
						<li>Built using HTML, CSS, JS, Bulma, Figma, J Query</li>
						<li>Used 2 apis, Giphy and Jokes</li>
					</ul>

					<div class="item">
						<div class="item-header">
							<div class="item-title">Adventure Social Platform</div>
						</div>
						<ul>
							<li>App built as a social media platform</li>
							<li>Built using HTML, Bootstrap, & JS for the front-end, nodejs, 
								mysql & sequelize for the back-end and deployed with Heroku</li>
							<li>commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
						velit esse cillum dolore eu fugiat.</li>
							<li>Features include user authentication, user collaboration, 
								and crud functionality</li>
						</ul>
					</div>

					<div class="item">
						<div class="item-header">
							<div class="item-title">BoxIt Packing App</div>
						</div>
						<ul>
							<li>An application made to help keep track of belongings as user is packing, 
								especially after boxes/ packages have been sealed. User receives a barcode, 
								upon scanning the barcode, the number of boxes/packages, as well as the contents 
								of the boxes/packages will be displayed to the user. Making packing and 
								Unpacking a much clearer process.</li>
							<li>Built using React, Tailwind for the frontend, GraphQL with a Node.js and 
								Express.js server, MongoDB and the Mongoose ODM for the database and 
								deployed with Netlify</li>
							<li>Features include user authentication (JWT), user collaboration, 
								and crud functionality using queries and mutations.</li>
						</ul>
					</div>
				</div>



				<div class="section">
					<div class="section-header">
						<i class="fa fa-briefcase"></i> EXPERIENCE
					</div>
					<div class="item">
						<div class="item-header">
							<div class="item-title">2U</div>
							<div class="item-date">Dec 2021 -</div>
						</div>
						<ul>Full Stack Web development Course:
							<li>Javascript / React / Node / TypeScript</li>
							<li>MongoDB / Mongoose / MySQL / GraphQL / Redux PWA</li>
						</ul>
					</div>
					<div class="item">
						<div class="item-header">
							<div class="item-title">Playfit Training Agency, Inc</div>
							<div class="item-date">Oct 2015 - Dec 2021</div>
						</div>
						<ul>Sales Strategist
							<li>Prospect and set meetings with potential business partners</li>
							<li>Schedule and manage appointments for wholesale orders</li>
						</ul>
						<ul>Social Media Specialist
							<li>Design social media strategies to reach targeted audience</li>
							<li>Create and implemented rollout strategies to business partners and sales reps</li>
							<li>Create and Manage high quality content</li>
							<li>Managed new products and content release</li>
							<li>Ensure all social media accounts are current and up to date</li>
						</ul>
					</div>

				</div>


				<div class="section">
					<div class="section-header">
						<i class="fa fa-code"></i> SKILLS
					</div>
					<ul>
						<li>HTML, CSS, JS, Javascript, CSS, JQuery, BootStrap, Tailwind, Bulma,
						Sequelize, Mysql, Nodejs, Heroku, Netlify, Handlebars, React, MongoDB
                and the Mongoose ODM</li>
						<li>Problem Solving, Content creation, Writing</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default App;