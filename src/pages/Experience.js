import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';

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
                            <Paper elevation={3} className="md:flex p-2">
                                <div className="w-3/4 md:w-1/4 pr-2">
                                    <img src={process.env.PUBLIC_URL + '/work-logos/o&d.webp'} />
                                </div>
                                <div className="w-full md:w-3/4">
                                    <h1 className="text-2xl">
                                        Office & Dragons
                                    </h1>
                                    <p>Software Engineer</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in enim laoreet, sollicitudin nibh vehicula, pretium ipsum. Donec feugiat elit nec justo efficitur aliquet. Proin eget pulvinar neque. Maecenas non dapibus arcu. Fusce mattis nisl quam, ut auctor elit rhoncus vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec tellus velit, hendrerit sed nisl sit amet, tincidunt ornare velit. Sed suscipit imperdiet magna et eleifend.</p>
                                </div>
                            </Paper>
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
                            <Paper elevation={3} className="md:flex p-2">
                                <div className="w-3/4 md:w-1/4 pr-2">
                                    <img src={process.env.PUBLIC_URL + '/work-logos/netcompany.jpg'} />
                                </div>
                                <div className="w-full md:w-3/4">
                                    <h1 className="text-2xl">
                                        Netcompany
                                    </h1>
                                    <p>Software Development Consultant</p>
                                    <p>Liasing with the project manager to give updates on team progression, preparing releases, and leading the team in the PM’s absence.
                                        Setup the first official football club in the UK
                                    </p>
                                </div>
                            </Paper>
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
                            <Paper elevation={3} className="md:flex p-2">
                                <div className="w-3/4 md:w-1/4 pr-2">
                                    <img src={process.env.PUBLIC_URL + '/work-logos/cashcalc.png'} />
                                </div>
                                <div className="w-full md:w-3/4">
                                    <h1 className="text-2xl">
                                        CashCalc
                                    </h1>
                                    <p>Software Engineer (Part time)</p>
                                    <p>Alongside my studies at university, I worked for CashCalc developing and maintaining their site.
                                        Building new features and bug fixing
                                        Automated testing (Both front & back end)
                                    </p>
                                </div>
                            </Paper>
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
                            <Paper elevation={3} className="md:flex p-2">
                                <div className="w-3/4 md:w-1/4 pr-2">
                                    <img src={process.env.PUBLIC_URL + '/work-logos/cashcalc.png'} />
                                </div>
                                <div className="w-3/4 pr-2">
                                    <h1 className="text-2xl">
                                        CashCalc
                                    </h1>
                                    <p>Software Engineer Intern</p>
                                    <p>I began as an intern at CashCalc and was then offered part-time work to complete during my third year of University</p>
                                </div>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        );
}

export default Experience;