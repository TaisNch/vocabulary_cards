import style from "./header.module.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/");
	};

	return (
		<>
			<img
				onClick={handleClick}
				className={style.logo__img}
				src="/images/Logo.svg"
				alt="logo"
			/>
			<nav className={style.nav}>
				<Link className={style.nav__link} to="/">
					Home
				</Link>
				<Link className={style.nav__link} to="/cards">
					Cards
				</Link>
				<Link className={style.nav__link} to="/table">
					Table
				</Link>
			</nav>
			<h1 className={style.header}> your vocabulary to learn</h1>
		</>
	);
}
export default Header;
