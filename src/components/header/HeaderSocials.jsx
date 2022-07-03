import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FaBitbucket} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/amanpreet-kaur94/" target="_blank" title="Linkedin"><BsLinkedin/></a>
      <a href="https://github.com/KaurAmanpreet" target="_blank" title="GitHub"><FaGithub/></a>
      <a href="https://bitbucket.org/Kaur_Amanpreet/" target="_blank" title="Bitbucket"><FaBitbucket/></a>
    </div>
  )
}

export default HeaderSocials
