import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ExperienceAccordion from '../../containers/experienceAccordion/ExperienceAccordion.js';
// import experience from '../../shared/experience_data.json';
import "./Experience.css";
import { Fade } from "react-reveal";

const experience = {
	title: "Experience",
	subtitle: "Work, Internship and Volunteership",
	description:
		"I have worked with many different on ML and DL Projects as a beginner, Designer and Software Architect. I have also worked with a Software House as an Android Developer along with studies. I love organising events and that is why I am also involved with many opensource communities as a representative.",
	header_image_path: "experience.svg",
	sections: [
		{
			title: "Work",
			experiences: [
		
				{
					title: "Android Developer",
					company: "Khyber Pvt. Ltd.",
					company_url: "https://www.linkedin.com/company/khybercoded/about/",
					logo_path: "freecopy_logo.png",
					duration: "Feb 2019 - Nov 2019",
					location: "Peshawar, Pakistan",
					description:
						"Khyber is the a software organization in , Peshawar, Pakistan. I have worked there as a junior software engineer in Android Devevlopment. I worked on Kotlin Java and developed Accesible Pakistan for a Client using Custom restful services. I learnt the efﬁcient ways of Data communications like Retroﬁt, Room, Architectural Patterns etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
					color: "#fc1f20"
				},
				{
					title: "Android Developer",
					company: "Khyber Pvt. Ltd.",
					company_url: "https://www.linkedin.com/company/khybercoded/about/",
					logo_path: "freecopy_logo.png",
					duration: "Feb 2019 - Nov 2019",
					location: "Peshawar, Pakistan",
					description:
						"Khyber is the a software organization in , Peshawar, Pakistan. I have worked there as a junior software engineer in Android Devevlopment. I worked on Kotlin Java and developed Accesible Pakistan for a Client using Custom restful services. I learnt the efﬁcient ways of Data communications like Retroﬁt, Room, Architectural Patterns etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
					color: "#fc1f20"
				}
			]
		},
		{
			title: "Internships",
			experiences: [
				{
					title: "Android Developer",
					company: "Khyber Pvt. Ltd.",
					company_url: "https://www.linkedin.com/company/khybercoded/about/",
					logo_path: "freecopy_logo.png",
					duration: "Nov 2018 - Feb 2019",
					location: "Peshawar, Pakistan",
					description:
						"Khyber is the a software organization in , Peshawar, Pakistan. I have worked there as a junior software engineer in Android Devevlopment. I worked on Kotlin Java and developed Accesible Pakistan for a Client using Custom restful services. I learnt the efﬁcient ways of Data communications like Retroﬁt, Room, Architectural Patterns etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
					color: "#fc1f20"
				},

				{
					title: "Android Development",
					company: "AMI Apex",
					company_url:
						"",
					logo_path: "intel_logo.jpg",
					duration: "July 2018 - Sep 2018",
					location: "Karachi",
					description:
						"This is Android Developemt Software House. I have been taught about different architectural patterns, UI-Testing and many other tools and technologies"
				}
			]
		},
		{
			title: "Volunteerships",
			experiences: [
	
				{
					title: "Android Development",
					company: "SM Codes",
					company_url: "",
					logo_path: "mozilla_logo.png",
					duration: "May 2020 - PRESENT",
					location: "Working From Home",
					description:
						"My responsibility for this program is to create opensource along with other developers. We have organised multiple hackathons on the problems collected by ordinary people from Different cities.",
					color: "#000000"
				},
				{
					title: "Developer Students Club Member",
					company: "ICS/IT, UAP",
					company_url:
						"",
					logo_path: "dsc_logo.png",
					duration: "Jan 2017 - PRESENT",
					location: "Peshawar Pakistan",
					description:
						"We have well established developer club in college which is directly associated with Other Senior Developers and University Professors. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Web Developement, Machine Learning.",
					color: "#0C9D58"
				},
				{
					title: "Open Source Contributor Team Member",
					company: "Github",
					company_url: "https://github.com/",
					logo_path: "github_logo.png",
					duration: "MArCH 2019 - PRESENT",
					location: "Work From Home",
					description:
						"I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
					color: "#181717"
				}
			]
		}
	]
};

class Experience extends Component {
	render() {
		return (
			<div className="experience-main">
				<Header />
				<div className="basic-experience">
					<Fade bottom duration={1000} distance="40px">
						<div className="experience-heading-div">
							<div className="experience-heading-img-div">
								<img
									src={require(`../../assests/images/${experience["header_image_path"]}`)}
								    alt=""
								/>
							</div>
							<div className="experience-heading-text-div">
								<h1 className="experience-heading-text">{experience.title}</h1>
								<h3 className="experience-heading-sub-text">
									{experience["subtitle"]}
								</h3>
								<p className="experience-header-detail-text subTitle">
									{experience["description"]}
								</p>
							</div>
						</div>
					</Fade>
				</div>
				<ExperienceAccordion sections={experience["sections"]} />
				<Footer />
			</div>
		);
	}
}

export default Experience;
