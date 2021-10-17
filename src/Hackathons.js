import logo from './logo.svg';
import './App.css';

function Hackathons() {
  const hackathons = [
    {
        name: 'McHacks',
    },
    {
        name: 'Uncommon Hacks'
    },
    {
        name: 'WinHacks',
        img: 'https://winhacks.ca/assets/img/logo_dg.png'
    },
    {
        name: 'Hack The North'
    },
  ]
  return (
    <div className="Section vertical-center">
        <div className>
            <h1 className='section--subtitle'>Hackathons</h1> 
            <br /> <br />
            <div className='row'>
                {hackathons.map(hackathon =>
                    <div className='col'>
                        <div className='card card--hackathon'>
                            <div className='row vertical-center'>
                            <div className='col vertical-center float-right'>
                                <img height='30' className='mx-3' src={hackathon.img}></img>
                            </div>
                            <div className='col vertical-center'>
                            <p className='float-left text-start my-2'>{hackathon.name}</p>
                            </div>
                            </div>
                        </div>
                    </div>    
                )}
            </div>
      </div>
    </div>
  );
}

export default Hackathons;
