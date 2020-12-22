import React from 'react';
import MyAge from './About/MyAge';
import Languages from './About/Languages';
import Frameworks from './About/Frameworks';
import TestingFrameworks from './About/TestingFrameworks';

class About extends React.Component {
    render() {
        return <div className="text-left">
            <div>
                <p className="text-white text-4xl pb-2">About me</p>
            </div>
            <div>
                <MyAge />
                <span className="text-gray-500"> / </span>
                <span className="text-green">Software Engineer</span>
            </div>
            <div className="py-5 text-gray-300">
                <p>I am a Software Engineer at Office & Dragons working in Central London. I graduated from Cardiff University with a 2:1 in Applied Software Engineering.</p>
            </div>
            <div className="py-5 px-10">
                <hr className="border-gray-500"/>
            </div>   
            <div className="pb-5">
                <p className="text-white text-2xl">Skills</p>
            </div>
            <div>
                <p className="text-gray-400 text-xl">Languages</p>
            </div>
            <Languages />
            <div className="pt-2">
                <p className="text-gray-400 text-xl">Frameworks</p>
            </div>
            <Frameworks />
            <div className="pt-2">
                <p className="text-gray-400 text-xl">Testing frameworks</p>
            </div>
            <TestingFrameworks />
        </div>;
    }
}

export default About;