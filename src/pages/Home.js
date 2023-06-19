import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import '../styles/Home.css'
import { IconButton} from '@material-ui/core'
import Typing from "react-typing-animation";

const Home = () => {

  const linkedInUrl = 'https://www.linkedin.com/in/sanoj-s-776b04181';
  const gitHubUrl = 'https://github.com/Sanojyolo';
  const recipient = 'sanojsurendran09@gmail.com';
  const subject = '';
  const body = '';
  const gmailUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;


  const handleDownload =()=>{
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/sanoj-resume-one.pdf';
    link.setAttribute('download', 'sanoj-resume.pdf');

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link)
  }
  return (
    <div className="home">
    <div className="about">
      <h2> Hi, I'm Sanoj</h2>
      <div className="prompt">
        <p>I'm a Frontend software developer with a passion for learning and creating</p>
        <IconButton href={linkedInUrl} target='_blank' title='Linkedin'><LinkedInIcon /></IconButton>
        
        <IconButton href={gmailUrl} target='_blank'><EmailIcon /></IconButton>
        <IconButton href={gitHubUrl} target='_blank' title='Github'><GithubIcon /></IconButton>
        
        
      </div>

      <Typing speed={100}>
      <span className='typing'>Console.log("Hello world")</span>
      <Typing.Backspace count={44} />
      <span className='typing'>System.out.println("Hello World")</span>
    </Typing>
    </div>
    <div className="skills">
      <h1> Skills</h1>
      <ol className="list">
        <li className="item">
          <h2> Front-End</h2>
          <span>
            ReactJS, Redux, HTML, CSS, NPM, Sass,
            Ionic, BootStrap, TailwindCSS
          </span>
        </li>
        {/* <li className="item">
          <h2>Back-End</h2>
          <span>
            NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
            MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
          </span>
        </li> */}
        <li className="item">
          <h2>Languages</h2>
          <span>JavaScript,TypeScript, Java</span>
        </li>
        <li className="itemone">
          <button onClick={handleDownload}>Download CV</button>
         
        </li>
      </ol>
    </div>
  </div>
  )
}

export default Home
