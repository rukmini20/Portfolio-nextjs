import emoji from "react-easy-emoji";

export const greetings = {
	name: "Rukmini Kalel",
	title: "Hi all, I'm Rukmini",
	description:
		"I'm passionate Full Stack web developer having an experience of web applications with Python, Angular.js, React.js, Next.js and Mongo,Node.js.",
	resumeLink:
		"https://drive.google.com/file/d/1zDKgQGz1YKGQcc4ucyxiH49J6CTJAgV6/view?usp=sharing",
};

export const openSource = {
	githubUserName: "rukmini20",
};

export const contact = {};

export const socialLinks = {
	instagram: "https://www.instagram.com/its.miniii/",
	github: "https://github.com/rukmini20",
	linkedin: "https://www.linkedin.com/in/rukmini-kalel",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("⚡ Building responsive static websites using Next.js"),
				emoji(
					"⚡ Building RESTful APIs in Django & Django REST Framework"
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
					skillName: "Nodejs",
					fontAwesomeClassname: "logos:nodejs-icon",
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
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
				),
			],
			softwareSkills: [
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:microsoft-azure",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
				{
					skillName: "Cloudinary",
					fontAwesomeClassname: "logos:cloudinary",
				},
				{
					skillName: "Nginx",
					fontAwesomeClassname: "logos:nginx",
				},
				{
					skillName: "Sentry",
					fontAwesomeClassname: "logos:sentry-icon",
				},
			],
		},
		// {
		// 	title: "Blockchain",
		// 	lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
		// 	skills: [
		// 		emoji(
		// 			"⚡ Experience in developing Smart Contract using Solidity & Ethereum"
		// 		),
		// 		emoji(
		// 			"⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
		// 		),
		// 		emoji(
		// 			"⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
		// 		),
		// 		emoji(
		// 			"⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"
		// 		),
		// 		emoji(
		// 			"⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
		// 		),
		// 	],
		// 	softwareSkills: [
		// 		{
		// 			skillName: "Ethereum",
		// 			fontAwesomeClassname: "logos:ethereum",
		// 		},
		// 		{
		// 			skillName: "Solidity",
		// 			fontAwesomeClassname: "logos:solidity",
		// 		},
		// 		{
		// 			skillName: "Web3js",
		// 			fontAwesomeClassname: "logos:web3js",
		// 		},
		// 		{
		// 			skillName: "Metamask",
		// 			fontAwesomeClassname: "logos:metamask-icon",
		// 		},
		// 		{
		// 			skillName: "Ganache",
		// 			fontAwesomeClassname: "logos:ganache-icon",
		// 		},
		// 	],
		// },
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "Pune University",
		subHeader: "Master of Computer Science(MCA)",
		duration: "2015 - 2018",
		//desc: "Participated in the research of XXX and published 3 papers.",
	},
];

export const experience = [
	{
		role: "Software Engineer",
		company: "Invimatic Solutions",
		companylogo: "/img/icons/common/Invimatic.jpg",
		date: "Apr 2019 – Oct 2021",
		desc: "I worked as Full stack Developer with tech stack ReactJs,Nodejs,mysql.",
	},
	{
		role: "Development Engineer",
		company: "CalsoftInc Private Limited",
		companylogo: "/img/icons/common/calsoft.png",
		date: "Dec 2021 - Till now",
		desc: "I am working as development Engineer with tech stack Frontend Angular.js and React.js,Kubernatives,D3Js,c#.",
	},
];

export const projects = [
	{
		name: "Kansas City’s Medicine Cabinet (Healthcare domain)",
		desc: "Experience in working on SPFX components using ReactJS. Deployed SPFX components in MS Teams. Experience in working Rest API to communicate with SPFX components/SharePoint Online. I had direct interaction with the client on a daily basis.",
	    TechStack: "React.js, TypeScript"
	},
	{
		name: "Shopping Cart",
		desc: "It’s a React.js app which displays the products in grid format and the user can increment/decrement the quantity of the selected products. On checkout page, it displays the products along with their quantities and calculates the price.",
		TechStack: "React.js, TypeScript and Redux.",
		github: "https://github.com/rukmini20/Shopping-Cart-Redux",
	},
	{
		name: "Orders Dashboard",
		desc: "It displays the dashboard of the orders placed from a third party API. It also displays chart bar, pie chart and table dynamically from the API.",
		TechStack: "React.js, TypeScript and Redux.",
		github: "https://github.com/rukmini20/Dashboard-Charts-Table-React",
	},
	{
		name: "Weather App",
		desc: "The weather App provides a national and local weather forecast for cities.",
		TechStack: "React.js, TypeScript and Redux.",
		github: "https://github.com/rukmini20/Weather-App",
	},
	{
		name: "Report Analytics",
		desc: "Report Analytics in order to monitor how different computer configurations are performing .",
		TechStack: "Angular.js,D3Js,Kafka,Web components,Stencil.js,ML.",
	},
	{
		name: "Developer-Portfolio",
		desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
		github: "https://github.com/rukmini20/Portfolio-nextjs",
		link: "https://rukmini-kalel-portfolio.netlify.app/",
	},
];
