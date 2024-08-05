import './header.css'
import { useNavigate } from 'react-router-dom';

function Header () {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
      };
   
   return (
<>
<div className='logo'>
<img  onClick={handleClick}
 className='logo__img' src='./images/Logo.png' alt="logo" />
<h1 className='header'> your vocabulary to learn
        </h1>
</div>
<nav>
<a href="/">Home</a>
        <a href="cards">Cards</a>
        <a href="table">Table</a>
</nav>
            </>
            )
}
export default Header;