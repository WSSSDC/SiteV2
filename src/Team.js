import logo from './logo.svg';
import './App.css';

function Team() {
  const team = [
    {
        name: 'Arjun'
    },
    {
        name: 'Bram'
    },
    {
        name: 'Connor'
    },
    {
        name: 'Sam'
    },
    {
        name: 'Loic'
    },
  ]

  return (
    <div className="Section vertical-center">
        <div className>
            <h1 className='section--subtitle text-start'>Team</h1> 
            <br /><br />
            <div className='row'>
                {team.map(member =>
                    <div className='col'>
                        <div className='card card--team pb-0'>
                            <img className='mt-2' src='https://image.shutterstock.com/image-vector/business-man-cell-phone-his-260nw-508516348.jpg'></img>
                            <p className='pt-3 pb-0 mb-0'>{member.name}</p>
                        </div>
                    </div>    
                )}
            </div>
      </div>
    </div>
  );
}

export default Team;
