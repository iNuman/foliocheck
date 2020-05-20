# My Portfolio

<p align="center"> 
  <kbd>
<img src="https://github.com/iNuman/foliocheck/blob/master/portfolio.gif"></img>
  </kbd>
</p>


## Sections 
✔️ Home\
✔️ Education, Achievements And Certifications \
✔️ Experience\
✔️ Projects\
✔️ Contact me

To view a live example, **[click here](https://www.numansfolio.ml/)**


## Getting Started 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer or use [Docker](https://www.docker.com/products/docker-desktop).

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```

## How To Use 🔧

From your command line, clone and run developerFolio:

```bash
# Clone this repository
$ git clone https://github.com/saadpasta/developerFolio.git

# Go into the repository
$ cd developerFolio

# Install dependencies
$ npm install

```
## Github Setup For Open Source Projects

### Generate a Github personal access token using these [Instructions](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) `Make sure you don't select any scope just generate a simple token`

Copy the token and open Chrome Developer Console to convert your token to base64 so github do not revert your token when you push your token to git

```bash
# Open your Chrome Developer Console console paste the token inside btoa
$ btoa("YOUR GITHUB TOKEN")
```

Copy your converted token and paste it in `/src/portfolio.js`

```javascript
  const openSource = {
  /* Your Open Source Section to View Your Github Pinned Projects */
  /* To know how to get github key look at readme.md */
  
  githubConvertedToken: "Your Github Converted Token",
  githubUserName: "Your Github Username"
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};
```
For the GitHub profile, set true or false to show Contact profile using Github, defaults to false.

## Change and customize every section according to your need.

### To Change website content go to `/src/portfolio.js` & modify it as per your need.

#### Using Emojis

For adding emoji 😃 into the texts in Portfolio.js, use the `emoji()` function and pass the text you need as an argument. This would help in keeping Emojis compatible across different browsers and platforms.

```javascript
/* Change this file to get your Personal Porfolio */

const greeting = {
  /* Your Summary And Greeting Section */
  title: "Hi all I'm Numan",
  subTitle: emoji("A passionate Front End Software Developer 🚀 along with working on building ML and Mobile applications with Python,    Android Kotlin and Java and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/iNuman",
  linkedin: "https://www.linkedin.com/in/-inuman/",
  gmail: "i_numn@yahoo.com",
  facebook: "https://www.facebook.com/iNuman51"
};

```


## Technologies used 🛠️

- [React](https://reactjs.org/)
- [graphql](https://graphql.org/) 
- [apollo-boost](https://www.apollographql.com/docs/react/get-started/) 
- [react-twitter-embed](https://github.com/saurabhnemade/react-twitter-embed)
- [react-easy-emoji](https://github.com/appfigures/react-easy-emoji)
- [axios](https://github.com/axios/axios)

## Illustrations
- [UnDraw](https://undraw.co/illustrations)

## Deployment 📦 
Once you have done with your setup. You need to put your website online!
I highly recommend to use [Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) to achieve this on the EASIEST WAY.
if face any issues during deployment run CMD as Administrator.


## Original Devs ✨

Thanks goes to these awesome guys:
- [Saad Pasta](https://github.com/saadpasta/) and - [Ashutosh Hathidara](https://github.com/ashutosh1919/).
- Develop this portfolio of mine by following Saads' guidelines and Ashutosh Hathidara Repo which was according to my needs.
---

