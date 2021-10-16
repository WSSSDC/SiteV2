import logo from './logo.svg';
import './App.css';
import './Nav.css';


function Nav(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src={logo} alt="" width="100" height="100"/>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    {props.tabs.map(tab => 
                        <li class="nav-item">
                            <a class="nav-link px-3" aria-current="page" href="#">{tab.title}</a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
        </nav>
  );
}

export default Nav;
