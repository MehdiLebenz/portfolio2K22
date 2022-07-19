/* eslint-disable no-irregular-whitespace */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/react-in-jsx-scope */

import React from 'react';
import {
  Text,
} from '@chakra-ui/react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork } from 'react-icons/md';

export default function Timeline() {
  return (

    <VerticalTimeline>
      <Text fontWeight="bold" mt={8} fontSize="3xl" textAlign="center"> Experience Timeline Resume </Text>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#dd6b20', color: 'black' }}
        contentArrowStyle={{ borderRight: '7px solid  #dd6b20' }}
        date="2022 - Present"
        iconStyle={{ background: '#dd6b20', color: '#fff' }}
        icon={<MdWork />}
      >
        <h3
          style={{
            fontFamily: 'Papyrus', fontWeight: 'bold', fontSize: '20px', color: 'black',
          }}
          className="vertical-timeline-element-title"
        >
          Senior Product Manager | Agile Consultant | University Teacher
        </h3>
        <h4 className="vertical-timeline-element-subtitle">IGA Tunisie | Konexia Consulting | Polytech Tunis </h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2019 - 2022"
        iconStyle={{ background: 'Gray', color: '#fff' }}
        icon={<MdWork />}
      >
        <h3
          style={{
            fontFamily: 'Papyrus', fontWeight: 'bold', fontSize: '20px', color: 'black',
          }}
          className="vertical-timeline-element-title"
        >
          Operations and projects Manager
        </h3>
        <h4 style={{ color: 'black' }} className="vertical-timeline-element-subtitle">Oyez</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2018 - 2019"
        iconStyle={{ background: 'Gray', color: '#fff' }}
        icon={<MdWork />}
      >
        <h3
          style={{
            fontFamily: 'Papyrus', fontWeight: 'bold', fontSize: '20px', color: 'black',
          }}
          className="vertical-timeline-element-title"
        >
          Scrum Master, Product Owner , MOA
        </h3>
        <h4
          style={{
            color: 'black',
          }}
          className="vertical-timeline-element-subtitle"
        >
          Oyez

        </h4>
        <p>
          Scrum , Kanban , Waterfall, V cycle
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2016 - 2018"
        iconStyle={{ background: 'Gray', color: '#fff' }}
        icon={<MdWork />}
      >
        <h3
          style={{
            fontFamily: 'Papyrus', fontWeight: 'bold', fontSize: '20px', color: 'black',
          }}
          className="vertical-timeline-element-title"
        >
          IT Project Manager
        </h3>
        <h4 style={{ color: 'black' }} className="vertical-timeline-element-subtitle">FTAV</h4>
        <p>
          User Experience,Project Management, Budget Management, Team Management
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2015 - 2016"
        iconStyle={{ background: 'Gray', color: '#fff' }}
        icon={<MdWork />}
      >
        <h3
          style={{
            fontFamily: 'Papyrus', fontWeight: 'bold', fontSize: '20px', color: 'black',
          }}
          className="vertical-timeline-element-title"
        >
          Web Developper
        </h3>
        <h4 style={{ color: 'black' }} className="vertical-timeline-element-subtitle">Clynisys</h4>
        <p>
          Wordpress|Javascript|PHP
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#dd6b20', color: 'black' }}
        contentArrowStyle={{ borderRight: '7px solid  #dd6b20' }}
        iconStyle={{ background: '#dd6b20', color: '#fff' }}
        date="2012 - 2015 "
        icon={<MdWork />}
      >
        <h3
          style={{
            fontFamily: 'Papyrus', fontWeight: 'bold', fontSize: '20px', color: 'black',
          }}
          className="vertical-timeline-element-title"
        >
          Technical support help desk
        </h3>
        <h4 style={{ color: 'black' }} className="vertical-timeline-element-subtitle">Concentrix</h4>
        <p>
          Technical Troubleshooting
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>

  );
}
