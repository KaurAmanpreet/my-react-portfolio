import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/myportfolio.jpg';
import IMG2 from '../../assets/portfolio.jpg';
import IMG3 from '../../assets/portfolio.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'My Portfolio using React Js',
    github: "https://github.com" ,
    demo: '#'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Coming Soon',
    // github: "https://github.com" ,
    // demo: 'https://dribbble.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Coming Soon',
    // github: "https://github.com" ,
    // demo: 'https://dribbble.com'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      {/* <h5>My Work</h5> */}
      <h2>My Work</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article key = {id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt=""/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">Github</a>
                  <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
