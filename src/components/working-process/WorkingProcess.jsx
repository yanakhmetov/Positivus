import React from 'react';
import WorkingProcessCard from '../ui/WorkingProcessCard';
import { workingProccess } from '../../data';
import SectionHeading from '../ui/SectionHeading';
import './WorkingProcess.css'

import { useState } from 'react';

const WorkingProcess = () => {
  const [visibleBlock, setVisibleBlock] = useState(true)

  return (
    <section id="working-process" className="working-process container">
      <div className="" >
        <SectionHeading
          text="Step-by-Step Guide to Achieving Your Business Goals Step-by-Step Guide to Achieving Your Business Goals"
          heading="Working Process"
        />
      </div>
      <div className={`show-items ${visibleBlock? 'show-items-rotate-180': 'show-items-rotate-0'}`} onClick={() => setVisibleBlock(!visibleBlock)}>
        ↓
      </div>
      <div className={visibleBlock? 'working-process-container-items-have' : 'working-process-container-items-none' }>
        {workingProccess.map((proccess) => {
          return (
            <WorkingProcessCard
              visible={visibleBlock ? 'working-process-item-have' : 'working-process-item-none' }
              text={proccess.text}
              title={proccess.title}
              id={proccess.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default WorkingProcess;
