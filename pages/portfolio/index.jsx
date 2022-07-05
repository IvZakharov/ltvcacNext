import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Ticker from '../../Components/Ticker/Ticker';
import HeroAdvantages from '../../Components/HeroAdvantages/HeroAdvantages';
import ProjectCard from './[id]';
import {projects} from '../../data/projects';


export const portfolio = () => {
  return (
    <>

      <Hero title={'Our cases'} subtitle={'Some of the projects we worked on. Feel free to request for more!'}
            heroImg={'imgFourths'}/>
      <Ticker/>
      <HeroAdvantages/>
      <div className="portfolio-grid">
        <div className="container p-0">
          <div className="row">
            {projects.map((obj) => (
              <ProjectCard
                key={obj.id}
                id={obj.id}
                title={obj.title}
                subtitle={obj.subtitle}
                tags={obj.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}


