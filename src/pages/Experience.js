import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import '../styles/Experience.css'
import { IconButton} from '@material-ui/core'

const Experience = () => {

  const linkedInUrl = 'https://www.linkedin.com/in/sanoj-s-776b04181';
  const gitHubUrl = 'https://github.com/Sanojyolo';
  const recipient = 'sanojsurendran09@gmail.com';
  const subject = '';
  const body = '';
  const gmailUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const instagramUrl= 'https://www.instagram.com/sanojyolo/'
  return (
    
    <div className="contact">
    <div className="socialMedia">
      <h1>Let's Connect!</h1>
      
      <IconButton href={linkedInUrl} target='_blank' title='Linkedin'><LinkedInIcon /></IconButton>
        
        <IconButton href={gmailUrl} target='_blank'><EmailIcon /></IconButton>
        <IconButton href={gitHubUrl} target='_blank' title='Github'><GithubIcon /></IconButton>
        <IconButton href={instagramUrl} target='_blank' title='Github'><InstagramIcon /></IconButton>
        
    </div>
    
  </div>
  )
}

export default Experience
