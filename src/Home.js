import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function Home() {

  const [timeUntilString, setTimeUntil] = useState('');

  function timeUntilNextMeeting() {
    const nextMeeting = new Date();
    nextMeeting.setDate(nextMeeting.getDate() + (((1 + 7 - nextMeeting.getDay()) % 7) || 7));
    nextMeeting.setHours(11);
    nextMeeting.setMinutes(0);
    nextMeeting.setSeconds(0);
    const timeDifference = nextMeeting - new Date();
    var hours = timeDifference/3.6e6 | 0;
    var mins  = timeDifference%3.6e6 / 6e4 | 0;
    var secs  = Math.round(timeDifference%6e4 / 1e3);
    return hours + ':' + mins + ':' + (secs < 10 ? '0' : '') + secs;
  }

  useEffect(() => {
    setTimeUntil((_) => timeUntilNextMeeting());
    const interval = setInterval(() => {
      console.log('This will run every second!');
      setTimeUntil((_) => timeUntilNextMeeting());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Home">
        <div className='m-auto'>
            <h1 className='text-white main-title gotham-bold'>WSDC</h1>
            <h1 className='text-white'>Westdale Software Development Club</h1>
            <div className='row'>
                <div className='col'>
                    <p className='text-white mb-0 float-end'>Next Meeting</p> <br />
                    <p className='text-white float-end'>{timeUntilString}</p>
                </div>
                <div className='col'>
                    <button className='add-to-calendar float-start gotham-medium pt-2'>ADD TO <br/> CALENDAR</button>
                </div>
            </div>
      </div>
    </div>
  );
}

export default Home;
