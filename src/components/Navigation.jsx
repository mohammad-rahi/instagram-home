import '../styles/Navigation.scss';
import { ReactComponent as Logo } from '../assets/icons/logo.svg';
import { ReactComponent as Search } from "../assets/icons/search.svg";
import Menu from './Menu';

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="container">
                <Logo className="logo" />
                <div className="search">
                    <Search className="search_icon" />
                    <input type="text" placeholder='Search' />
                </div>
                <Menu />
            </div>
        </div>
    );
};

export default Navigation;