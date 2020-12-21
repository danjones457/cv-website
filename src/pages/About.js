import React from 'react';
import '../App.css';

class About extends React.Component {
    render() {
        return <div className="text-left">
            <div>
                <p className="text-white text-2xl">About me</p>
            </div>
            <div>
                <span className="text-green">
                    23 years old
                </span>
                <span className="text-gray-500"> / </span>
                <span className="text-green">Software Engineer</span>
            </div>
            <div className="py-5 text-gray-300">
                <p>I am a Software Consultant at Office & Dragons working in Central London. I graduated from Cardiff University with a 2:1 in Applied Software Engineering.</p>
            </div>
        </div>;
    }
}

export default About;