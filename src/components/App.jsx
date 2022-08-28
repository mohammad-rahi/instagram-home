import '../styles/App.scss';
import Navigation from './Navigation';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navigation />
                <main>
                    <div className="container">
                        <Routes>
                            <Route path='/' exact element={<HomePage />} />
                            <Route path='/profile' element={<ProfilePage />} />
                        </Routes>
                    </div>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
