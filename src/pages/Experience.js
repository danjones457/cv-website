import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Content from './Experience/Content';

function Experience() {
  return (
            <div className="text-left">
                <div>
                    <p className="text-white text-4xl pb-2">Experience</p>
                </div>
                <Timeline align="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <p className="text-white text-sm">
                                January 2021 - Present
                            </p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot className="border-green" variant="outlined" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Content 
                                logoUrl="o&d.webp" 
                                companyName="Office & Dragons" 
                                role="Software Engineer"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in enim laoreet, sollicitudin nibh vehicula, pretium ipsum. Donec feugiat elit nec justo efficitur aliquet. Proin eget pulvinar neque. Maecenas non dapibus arcu. Fusce mattis nisl quam, ut auctor elit rhoncus vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec tellus velit, hendrerit sed nisl sit amet, tincidunt ornare velit. Sed suscipit imperdiet magna et eleifend."
                            />
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <p className="text-white text-sm">
                                August 2019 - December 2020
                            </p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot className="border-green" variant="outlined" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Content 
                                logoUrl="netcompany.jpg" 
                                companyName="Netcompany" 
                                role="Software Development Consultant"
                                description="Liasing with the project manager to give updates on team progression, preparing releases, and leading the team in the PM’s absence.
                                Setup the first official football club in the UK"
                            />
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <p className="text-white text-sm">
                                September 2018 - April 2019
                            </p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot className="border-green" variant="outlined" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Content 
                                logoUrl="cashcalc.png" 
                                companyName="CashCalc" 
                                role="Software Engineer (Part time)"
                                description="Alongside my studies at university, I worked for CashCalc developing and maintaining their site.
                                Building new features and bug fixing
                                Automated testing (Both front & back end)"
                            />
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <p className="text-white text-sm">
                                June 2018 - September 2018
                            </p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot className="border-green" variant="outlined" />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Content 
                                logoUrl="cashcalc.png" 
                                companyName="CashCalc" 
                                role="Software Engineer Intern"
                                description="I began as an intern at CashCalc and was then offered part-time work to complete during my third year of University"
                            />
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        );
}

export default Experience;