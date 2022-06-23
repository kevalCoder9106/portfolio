import emoji from "react-easy-emoji";

export const greetings = {
	name: "Keval Maru",
	title: "Hi all, I'm Keval",
	description:
		"I'm passionate Full Stack web developer having an experience of web applications with React.js, Next.js.",
	resumeLink:
		"https://drive.google.com/file/d/1YhtTEaWSHjP-tSikMwGQ2UzwQHvZ0CoE/view?usp=sharing",
};

export const openSource = {
	githubUserName: "kevalCoder9106",
};

export const contact = {};

export const socialLinks = {
	instagram: "https://www.instagram.com/keval_xoxo/",
	twitter: "https://twitter.com/CoderKeval",
	github: "https://github.com/kevalCoder9106",
	linkedin: "https://twitter.com/CoderKeval",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"ENTHUSIASTIC FULL STACK DEVELOPER",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive web apps in React.js"
				),
				emoji("⚡ Building high performance server in Express.js"),
				emoji(
					"⚡ Experice in MongoDB and MySQL"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},

				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
				
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on heroku with postgresql"),
			],
			softwareSkills: [
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "mySQl",
					fontAwesomeClassname: "logos:mysql",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "MongoDB",
					fontAwesomeClassname: "logos:mongodb"
				}
				
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "70", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "90",
	},
	{
		Stack: "Programming",
		progressPercentage: "75",
	},
];

export const educationInfo = [
	{
		schoolName: "Government Polytechnic Gandhinagar, Sector 26 Gandhinagar Gujarat",
		subHeader: "Diploma in IT",
		duration: "March 2018 - July 2021",
	},
];

export const experience = [
	{
		role: "Machine Learning Developer",
		company: "Prayatna Cheritable Trust, Tinkering India",
		companylogo: "https://blog.tinkering.in/wp-content/uploads/2021/09/logo-header-1.png",
		date: "Sept 2021 – Dec 2021",
		desc: "I worked as project developer on Machine Learning projects in python.",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
];

export const projects = [
	{
		name: "Face Recognition ",
		desc: "This web app can detect human faces available in the image link provided",
		link: "https://kevalcoder9106.github.io/face-recognition/",
	},
	{
		name: "Password Generator",
		desc: "This web app will generate password, according to parameters users provide.",
		link: "https://password-generator-kevalcoder9106.vercel.app/",
	},
	{
		name: "Hand Detection, Cursor Controller",
		desc: "The Hand detection program will detect hands from the webcam.The cursor controller program will give functionality to the user to control the cursor using the tip of the index finger.",
		link: "https://github.com/kevalCoder9106/hand-detection-in-python",
	},
	{
		name: "Sleep tracker",
		desc: "So many people aren't aware about how many hours they sleep, so i've build this web-app for people who want to track their sleep time. This web-app basically tracks how many hours you have slept per day. And will show a graph and average amount of sleep you take everday.",
		link: "https://sleep-tracker-drab.vercel.app/"
	}
];

export const feedbacks = [
	
];
