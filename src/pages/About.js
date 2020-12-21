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
            <div className="py-5 px-10">
                <hr className="border-gray-500"/>
            </div>   
            <div className="pb-5">
                <p className="text-white text-2xl">Skills</p>
            </div>
            <div>
                <p className="text-gray-400 text-xl">Languages</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 text-l text-center text-gray-400">
                <div className="py-2"><i className="fab fa-php text-3xl text-green"></i> <p>PHP</p></div>
                <div className="py-2"><i className="fas fa-code text-3xl text-green"></i> <p>TypeScript</p></div>
                <div className="py-2"><i className="fab fa-js text-3xl text-green"></i> <p>JavaScript</p></div>
                <div className="py-2"><i className="fas fa-code text-3xl text-green"></i> <p>Dart</p></div>
                <div className="py-2"><i className="fas fa-code text-3xl text-green"></i> <p>C#</p></div>
                <div className="py-2"><i className="fas fa-code text-3xl text-green"></i> <p>SQL</p></div>
                <div className="py-2"><i className="fab fa-html5 text-3xl text-green"></i> <p>HTML</p></div>
                <div className="py-2"><i className="fab fa-css3-alt text-3xl text-green"></i> <p>CSS</p></div>
                <div className="py-2"><i className="fab fa-sass text-3xl text-green"></i> <p>SASS</p></div>
                <div className="py-2"><i className="fas fa-code text-3xl text-green"></i> <p>XML</p></div>
                <div className="py-2"><i className="fab fa-java text-3xl text-green"></i> <p>Java</p></div>
            </div>  
            <div className="pt-2">
                <p className="text-gray-400 text-xl">Frameworks</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 text-l text-center text-gray-400">
                <div className="py-2"><i className="fab fa-laravel text-3xl text-green"></i> <p>Laravel</p></div>
                <div className="py-2"><i className="fab fa-react text-3xl text-green"></i> <p>React</p></div>
                <div className="py-2"><i className="fab fa-react text-3xl text-green"></i> <p>React Native</p></div>
                <div className="py-2"><i className="fab fa-google text-3xl text-green"></i> <p>Flutter</p></div>
                <div className="py-2"><i className="fas fa-code text-3xl text-green"></i> <p>Gradle</p></div>
                <div className="py-2"><i className="fab fa-angular text-3xl text-green"></i> <p>AngularJS</p></div>
                <div className="py-2"><i className="fab fa-java text-3xl text-green"></i> <p>Spring Boot</p></div>
            </div>
            <div className="pt-2">
                <p className="text-gray-400 text-xl">Testing frameworks</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 text-l text-center text-gray-400">
                <div className="py-2"><i className="fab fa-php text-3xl text-green"></i> <p>PHPUnit</p></div>
                <div className="py-2"><i className="fas fa-code text-3xl text-green"></i> <p>JUnit</p></div>
                <div className="py-2"><i className="fas fa-code text-3xl text-green"></i> <p>NUnit</p></div>
                <div className="py-2"><i className="fab fa-laravel text-3xl text-green"></i> <p>Dusk</p></div>
                <div className="py-2"><i className="fas fa-code text-3xl text-green"></i> <p>XUnit</p></div>
            </div>
        </div>;
    }
}

export default About;