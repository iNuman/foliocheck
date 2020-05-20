/* Change this file to get your personal Porfolio */
import emoji from "react-easy-emoji";
const theme = {
  primaryTheme: "#6C63FF",
  secondaryTheme: "#55198b",
  easing: "cubic-bezier(0.645, 0.045, 0.355, 1)"
};



const greeting = {
  /* Your Summary And Greeting Section */
  username: "Numan Ali",
  title: emoji("Hi all 👋, it's Numan"),
  subTitle: emoji("A passionate Front End Software Developer 🚀 along with working on building ML and Mobile applications with Python, Android Kotlin and Java and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1R1KlWhhTZOvyoygAGibDp4vkC-LNDWUm/view"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/iNuman",
  linkedin: "https://www.linkedin.com/in/-inuman/",
  gmail: "flopy6663@gmail.com",
  facebook: "https://www.facebook.com/iNuman51",
  instagram: "https://www.instagram.com/inoumn/"

};


const skills = {
  data: [
    {
      title: "Data Science & AI",
      imagePath: "data_science.svg",
      skills: [
        emoji("⚡ Currently Working on Data Science and AI to polish my skills"),
        emoji("⚡ Currently working with Computer Vision and NLP projects"),
        emoji("⚡ Currently Working on Cleansing and Preprocessing of different as I know this is one of the most important part to apply ML Algorithms.")
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000"
          }
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB"
          }
        }
      ]
    },
    {
      title: "Android And Web Development",
      imagePath: "fullstack.svg",
      skills: [
        "⚡ Building resposive Android Apps using Android Studio IDE",
        "⚡ Developing mobile applications using Kotlin, Java",
        "⚡ Creating application backend in Firebase, Restful Apis' & Room"
      ],
      softwareSkills: [
        {
          skillName: "ML",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26"
          }
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6"
          }
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699"
          }
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E"
          }
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB"
          }
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933"
          }
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837"
          }
        },
        {
          skillName: "Room",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB"
          }
        },
        {
          skillName: "Retrofit",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399"
          }
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B"
          }
        }
      ]
    },
    {
      title: "UI/UX Design",
      imagePath: "ui_ux_design.svg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience"
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2"
          }
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E"
          }
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00"
          }
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000"
          }
        }
      ]
    }
  ]
};

const degrees = {
  degrees : [
    {
      title: "Institute of Computer Science and Information Technology UAP",
      subtitle: "BS in Computer science",
      logo_path: "iiitk_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics."
      ],
      website_link: "https://www.aup.edu.pk/"
    }
  ]
}

const certifications = {
	certifications: [
		{
			title: "Machine Learning",
			subtitle: "- Andrew Ng",
			logo_path: "stanford_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
			alt_name: "Stanford University",
			color_code: "#8C151599"
		},
		{
			title: "Deep Learning",
			subtitle: "- Andrew Ng",
			logo_path: "deeplearning_ai_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
			alt_name: "deeplearning.ai",
			color_code: "#00000099"
		},

		{
			title: "DL on Tensorflow",
			subtitle: "- Laurence Moroney",
			logo_path: "deeplearning_ai_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
			alt_name: "deeplearning.ai",
			color_code: "#00000099"
		},
		{
			title: "Android Development",
			subtitle: "- AMI-Apex",
			logo_path: "gcp_logo.png",
			certificate_link:
				"https://drive.google.com/file/d/1qz5pSGEuwODNzAri3hvRzU-NBV-a9dwQ/view",
			alt_name: "GCP",
			color_code: "#4285F499"
		}
	]
};

const openSource = {
  githubConvertedToken: "IDcyNDY5NmNlNzBlYTg5MGY5N2E0YWMxMTkxNjYzNzFlODUzMDcwYmY=",
  githubUserName: "iNuman",
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3127746663",
  email_address: "flopy6663@gmail.com"
};

export { theme, greeting, socialMediaLinks, skills, degrees, certifications, openSource, contactInfo};

