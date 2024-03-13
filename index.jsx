import React from "react"
import ReactDOM from "react-dom/client"
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import {HiMail} from 'react-icons/hi';
import image from "./profile-pic.jpg"


function Info() {
	return (
		<>
			<img src={image} alt="profile photo" />
			<section className="content">
			<h3 className="name">Siyabonga Mahlalela</h3>
			<h5 className="job-position">Frontend Developer</h5>
			<a className="personal-website" href="siya-portfolio.netlify.app">my projects</a>
			<div className ="contact-me-btns">
				<a href="mailto:siyabongamahlalela71@gmail.com" className="email-btn">
					<HiMail/>  Email
				</a>
				<a href="https://www.linkedin.com/in/siyabonga-mahlalela-3b130a266/" className="linkedIn-btn">
					<FaLinkedin /> LinkedIn
				</a>
			</div>
			</section>
		</>
	)
}

function About() {
	return (
		<> 
			<section  className="about">
				<h3>About Me</h3>
				<p className="about-me-p">
				I am an aspiring Front-End Developer who enjoys bringing
				creative ideas to life, on the web. I like learning new things,
				and finding better ways to express creative ideas with code.
				</p>
			</section>
		</>
	)
}

function Interests() {
	return (
		<>
			<section className="interests">
				<h3>My Interests</h3>
				<p>
					Art. Music. History. Chess. Rugby. 
				</p>
			</section>
		</>
	)
}

function Footer() {

	return (
	 <>
		<footer>
			<ul>
				<li>
					<a 
						href="https://github.com/vusiSiya" 
						title="My Github Profile"
					>
						<FaGithubSquare/> 
					</a>  
				</li>
				<li>
					<a 
						href="www.linkedin.com/in/siyabonga-mahlalela-3b130a266" 
						title="My LinkedIn Profile"
					>
					 <FaLinkedin/>
					</a> 
				</li>
			</ul>
		</footer>
	</>
	)
}

function App() {
	return (
		<>
		<div className="container">
			<Info />
			<About />
			<Interests/>
			<Footer />
		</div>
		</>
	)
}

ReactDOM.createRoot(document.getElementById("root"))
.render(<App />)




