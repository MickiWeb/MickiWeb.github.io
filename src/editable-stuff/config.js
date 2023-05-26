// Navigation Bar SECTION
const navBar = {
	show: true,
};

// Main Body SECTION
const mainBody = {
	gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
	firstName: "Michaela",
	middleName: "",
	nickName: "Micki",
	lastName: "Hargitai",
	message:
		"  HBSc Candidate majoring in Co-op Population Health with minors in Biology and International Development Studies. ",
	icons: [
		// {
		//   image: "fa-github",
		//   url: "https://github.com/",
		// },
		// {
		//   image: "fa-facebook",
		//   url: "https://www.facebook.com/",
		// },
		// {
		//   image: "fa-instagram",
		//   url: "https://www.instagram.com/",
		// },
		{
			image: "fa-linkedin",
			url: "https://www.linkedin.com/in/micki-hargitai-9a57801a1/",
		},
		// {
		//   image: "fa-twitter",
		//   url: "https://www.twitter.com/",
		// },
	],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
	show: true,
	heading: "About Me",
	imageLink: require("../editable-stuff/micki.png"),
	imageSize: 375,
	message:
		"I'm Michaela Hargitai, an organized and skilled individual experienced in research and academic success. Proficient in various technologies and software, I have supported multiple research studies, showcasing strong organizational, analytical skills, and research abilities. I'm pursuing an Honours Bachelor of Science degree with a major in Co-op Population Health and minors in Biology and International Development, and I'm eager to contribute my exceptional skills and experiences to make a positive impact.",
	resume: require("../editable-stuff/resume.pdf"),
};

// SKILLS SECTION
const skills = {
	show: false,
	heading: "Skills",
	hardSkills: [],
	softSkills: [
		{ name: "Goal-Oriented", value: 80 },
		{ name: "Collaboration", value: 90 },
		{ name: "Positivity", value: 75 },
		{ name: "Adaptability", value: 85 },
		{ name: "Problem Solving", value: 75 },
		{ name: "Empathy", value: 90 },
		{ name: "Organization", value: 70 },
		{ name: "Creativity", value: 90 },
	],
};

// GET IN TOUCH SECTION
const getInTouch = {
	show: true,
	heading: "Get In Touch",
	email: "micki.hargitai@mail.utoronto.ca",
};

const work = {
	show: true,
	heading: "Work Experiences",
	shortcut: "work",
	data: [
		{
			name: "Program Assistant, First Year Communications and Educational Outreach",
			date: "May 2022 - Present",
			icon: "fa-users",
			location: "University of Toronto Scarborough, Scarborough, ON",
			list: [
				"Assisted in the development of e-learning modules and digital educational materials.",
				"Edited video recordings of FirstYear@UTSC live webinars/workshops.",
				"Updated existing learning modules for current onboarding information/content.",
				"Assisted in the planning and facilitation of educational workshops and outreach initiatives.",
			],
		},
		{
			name: "Research Assistant (Full-time Co-op Student)",
			date: "September 2021 – April 2022",
			icon: "fa-stethoscope",
			location:
				"St. Michael’s Hospital & St. Joseph’s Hospital Nephrology Research, Toronto, ON",
			list: [
				"Obtained patient study data from medical records and clinical staff.",
				"Processed blood samples and tissue smears.",
				"Recruited patients for various studies and obtained informed consent.",
				"Conducted baseline and follow-up visits and assessments.",
				"Assisted in keeping the In-centre Hemodialysis team informed and updated medication information.",
				"Conducted follow-up questionnaires with patients.",
				"Involved in multiple research studies.",
			],
		},
		{
			name: "Program Assistant, First Year Experience Program",
			date: "May 2021 – August 2021",
			icon: "fa-users",
			location: "University of Toronto Scarborough, Scarborough, ON",
			list: [
				"Collected and synthesized data for First Year Experience programs.",
				"Provided administrative support for the programs, including work-orders and room bookings.",
				"Assisted in organizing and facilitating First Year Experience events.",
				"Liaised with student organizations and campus partners for event coordination.",
			],
		},
		{
			name: "First-Year Peer Advisor: Work Study Program",
			date: "May 2020 - April 2021",
			icon: "fa-user-tie",
			location: "University of Toronto Scarborough, Scarborough, ON",
			list: [
				"Supported and guided first-year students through online advising and transition programs.",
				"Assisted students with course enrollment and provided tutorials.",
				"Collaborated with Student Life and Academic Advising & Career Centre for online orientation.",
				"Organized social events and campaigns to enhance student involvement.",
			],
		},
		{
			name: "Transplant Clinic Co-op Placement",
			date: "February 2018 - June 2018",
			icon: "fa-user-md",
			location:
				"St. Michael’s Hospital, Nephrology Renal Transplant Clinic, Toronto, ON",
			list: [
				"Shadowed healthcare professionals to learn about different roles and responsibilities.",
				"Organized patient demographics in the patient database.",
				"Managed patient blood work charts and assisted with file coordination.",
			],
		},
	],
};

const volunteer = {
	show: true,
	heading: "Volunteer Experiences",
	shortcut: "volunteer",
	data: [
		{
			name: "DramaWay",
			date: "February 2023 - Present",
			icon: "fa-theater-masks",
			location: "1712 Ellesmere Rd, Scarborough, ON",
			list: [
				"Skilled in working with individuals with special needs through creative drama and theatre activities.",
				"Demonstrated ability to create a safe and inclusive environment for participants of all abilities.",
				"Adept at working collaboratively with other volunteers and staff members to ensure the program's success.",
				"Proficient in using drama games and theatre techniques to promote life skills and self-awareness in participants.",
			],
		},
		{
			name: "Project START! Science Volunteer",
			date: "September 2020 - April 2021",
			icon: "fa-flask",
			location: "University of Toronto Scarborough, Scarborough, ON",
			list: [
				"Providing elementary students interactive and collaborative STEM experiences.",
				"Creating presentations and videos to educate students on human biology.",
			],
		},
		{
			name: "Assistant with the Ontario Pancreatic Cancer Study",
			date: "July 2018 - August 2018",
			icon: "fa-ribbon",
			location:
				"Mount Sinai Hospital, Zane Cohen Centre for Digestive Diseases, Toronto, ON",
			list: [
				"Supporting research professionals in patient data collection and treatment plan documentation.",
				"Organizing patient charts and genetic pedigree data for efficient file screening.",
				"Providing administrative support for the research division.",
			],
		},
		{
			name: "Meal Tray Delivery and Collection Volunteer",
			date: "September 2015 - February 2018",
			icon: "fa-utensils",
			location: "St. John’s Sunnybrook Rehab Centre, Toronto, ON",
			list: [
				"Coordinating and delivering dinner to 50 patients weekly according to their dietary needs.",
				"Organizing patients' table area and returning meal trays to ensure cleanliness and efficiency.",
				"Interacting with patients during deliveries with compassion and care.",
			],
		},
	],
};

const extracurricular = {
	show: true,
	heading: "Extracurricular Experiences",
	shortcut: "extracurricular",
	data: [
		{
			name: "MEDLIFE UTSC: Vice President Operations",
			date: "June 2022 - Present",
			icon: "fa-users-cog",
			location: "University of Toronto Scarborough, Scarborough, ON",
			list: [
				"Responsible for closely working with the Co-Presidents, Secretary, Finance Officer, Finance Assistant, and Academic Ambassadors.",
				"Oversees all events and initiatives.",
				"Provides guidance to multiple directors and workstream leads.",
				"Ensures sufficiency of funds and smooth operation of the chapter.",
			],
		},
		{
			name: "Sexual Health Peer Program",
			date: "May 2022 - Present",
			icon: "fa-heart",
			location:
				"Health and Wellness Centre, University of Toronto Scarborough, Scarborough, ON",
			list: [
				"Provides awareness on healthy relationships, birth control, barrier methods, STIs, and HIV prevention.",
				"Facilitating events online and on-campus to foster education on sexual health.",
			],
		},
		{
			name: "MEDLIFE UTSC: Academic Ambassador",
			date: "August 2021 – April 2022",
			icon: "fa-hands-helping",
			location: "University of Toronto Scarborough, Scarborough, ON",
			list: [
				"Organized and led premedical workshops, MCAT Prep Sessions, and grad/medical school seminars.",
				"Ensured successful execution of all academic events and initiatives.",
				"Reported and accountable to VP Operations.",
			],
		},
		{
			name: "Nutritional Health Peer Program",
			date: "April 2021 – April 2022",
			icon: "fa-apple-alt",
			location:
				"Health and Wellness Centre, University of Toronto Scarborough, Scarborough, ON",
			list: [
				"Provided awareness and education on Canada’s Food Guide, dieting, metabolism, vegetarianism, and healthy eating.",
				"Became a key resource to students on campus by contributing to health promotion activities.",
			],
		},
	],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
	navBar,
	mainBody,
	about,
	skills,
	getInTouch,
	work,
	volunteer,
	extracurricular,
};
