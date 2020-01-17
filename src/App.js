import React from 'react';
import './App.css';


const App = () => {
    return ( 
    <div className = "app-wrapper"  >
        <header className = 'header'>
            <img src="" alt=""/>
        </header>
        <nav className ='nav'>
            <div>
                Profile
            </div>
            <div>
                Messages
            </div>
            <div>
                News
            </div>
            <div>
                Music
            </div>
            <div>
                Settings
            </div>
        </nav>
        <div className = 'content'>
            <div>
                <img src="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg" alt=""/>
            </div>
            <div>
                avatar + description
            </div>
            <div>
                my post
                <div>
                    new post
                </div>
                <div>
                    post1
                </div>
                <div>
                    post2
                </div>
            </div>
        </div>
    </div>
    );
}


export default App;