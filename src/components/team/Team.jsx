import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import TeamCard from '../ui/TeamCard';
import { teamMembers } from '../../data';
import Button from '../ui/Button';
import './Team.css'


const Team = () => {
  return (
    <section id='team' className="container team-block">
      <div>
        <SectionHeading
          text="Meet the skilled and experienced team behind our successful digital marketing strategies"
          heading="Team"
        />
      </div>

      
        <div className="team-cards">
          {teamMembers.map((member) => {
            return (
              <div className="team-card-animation">
                <TeamCard
                  name={member.name}
                  position={member.position}
                  bio={member.bio}
                  key={member.id}
                  gif={member.gif}
                />
              </div>
            );
          })}
        </div>

          <Button
            text="See All Members"
            className="team-block-button"
          />
        
    </section>
  );
};

export default Team;
