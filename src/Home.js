import logo from './logo.svg';
import './App.css';

function Home() {
  return (
    <div className="Home">
        <div>
            <h1 className='text-white main-title'>WSDC</h1>
            <h1 className='text-white'>Westdale Software Development Club</h1>
            <div className='row'>
                <div className='col'>
                    <p className='text-white mb-0 float-end'>Next Meeting</p> <br />
                    <p className='text-white float-end'>00:00:00</p>
                </div>
                <div className='col'>
                    <button className='add-to-calendar float-start'>ADD TO <br/> CALENDAR</button>
                </div>
            </div>
      </div>
    </div>
  );
}

export default Home;
