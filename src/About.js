import logo from './logo.svg';
import './App.css';

function About() {
  return (
    <div className="Section vertical-center">
        <div className>
            <h1 className='section--subtitle'>Who we are</h1> <br />
            <p className='text-white float-start text-start'>
                Vertical alignment is now very simple by the use of Flexible box layout. Nowadays, this method is supported in a wide range of web browsers except Internet Explorer 8 & 9. Therefore we'd need to use some hacks/polyfills or different approaches for IE8/9.
            </p>
      </div>
    </div>
  );
}

export default About;
