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
            <h1 className='section--subtitle'>Team</h1> 
            <br /><br />
            <div className='row'>
                {team.map(member =>
                    <div className='col'>
                        <div className='card card--team'>
                            <p>{member.name}</p>
                        </div>
                    </div>    
                )}
            </div>
      </div>
    </div>
  );
}

export default Team;
