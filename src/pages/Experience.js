import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import Content from './Experience/Content';

function Experience() {
    return (
        <div className="text-left">
            <div>
                <p className="text-white text-4xl pb-2">Experience</p>
            </div>
            <Timeline align="alternate">
                <Content 
                    last={false}
                    date="January 2021 - Present"
                    logoUrl="o&d.webp" 
                    name="Office & Dragons" 
                    role="Software Engineer"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in enim laoreet, sollicitudin nibh vehicula, pretium ipsum. Donec feugiat elit nec justo efficitur aliquet. Proin eget pulvinar neque. Maecenas non dapibus arcu. Fusce mattis nisl quam, ut auctor elit rhoncus vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec tellus velit, hendrerit sed nisl sit amet, tincidunt ornare velit. Sed suscipit imperdiet magna et eleifend."
                />
                <Content 
                    last={false}
                    date="August 2019 - December 2020"
                    logoUrl="netcompany.jpg" 
                    name="Netcompany" 
                    role="Software Development Consultant"
                    description="Liasing with the project manager to give updates on team progression, preparing releases, and leading the team in the PM’s absence.
                    Setup the first official football club in the UK"
                />
                <Content 
                    last={false}
                    date="September 2018 - April 2019"
                    logoUrl="cashcalc.png" 
                    name="CashCalc" 
                    role="Software Engineer (Part time)"
                    description="Alongside my studies at university, I worked for CashCalc developing and maintaining their site.
                    Building new features and bug fixing
                    Automated testing (Both front & back end)"
                />
                <Content 
                    last={true}
                    date="June 2018 - September 2018"
                    logoUrl="cashcalc.png" 
                    name="CashCalc" 
                    role="Software Engineer Intern"
                    description="I began as an intern at CashCalc and was then offered part-time work to complete during my third year of University"
                />
            </Timeline>
        </div>
    );
}

export default Experience;