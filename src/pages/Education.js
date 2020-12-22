import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import Content from './Experience/Content';

class Education extends React.Component {
    render() {
        return (
        <div className="text-left">
            <div>
                <p className="text-white text-4xl pb-2">Education</p>
            </div>
            <Timeline align="alternate">
                <Content 
                    last={false}
                    date="2016 - 2019"
                    logoUrl="cardiff.jpg" 
                    name="Cardiff University"
                    role="Applied Software Engineering"
                    description={<div>
                        <p>Bachelor's Degree</p>
                        <p><strong>Grade: </strong> 2:1</p>
                    </div>}
                />
                <Content 
                    last={true}
                    date="2009 - 2016"
                    logoUrl="tbgs.jpg" 
                    name="Torquay Boys' Grammar School" 
                    description={<div className="text-center">
                        <div className="py-2">
                            <strong className="text-gray-600">A-Levels</strong>
                            <ul>
                                <li>Computing</li>
                                <li>Mathematics</li>
                                <li>Business Studies</li>
                                <li>Physics (AS Level)</li>
                            </ul>
                        </div>
                        <div>
                            <strong className="text-gray-600">GCSEs</strong>
                            <p>12 including</p>
                            <ul>
                                <li>Computing</li>
                                <li>Mathematics</li>
                                <li>English Language</li>
                                <li>Further Mathematics</li>
                            </ul>
                        </div>
                    </div>}
                />
            </Timeline>
        </div>
        );
    }
}

export default Education;