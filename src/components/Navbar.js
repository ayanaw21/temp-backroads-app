import logo from "../images/logo.svg";
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} className="nav-logo" alt="backroads" />
					<button
						type="button"
						className="nav-toggle"
						id="nav-toggle"
					>
						<i className="fas fa-bars"></i>
					</button>
				</div>
				{/* <!-- left this comment on purpose --> */}
				

				{/* <ul className="nav-links" id="nav-links">
				{pageLinks.map((link)=>{
					const {id,href,text} = link;
					return (
						<li key={id}>
							<a href={href} className="nav-link">
								{text}
							</a>
						</li>
					);
				})} */}
				<PageLinks parentClass="nav-links" itemClass="nav-link" />
			

				<ul className="nav-icons">
					{socialLinks.map((link)=>{
						return (
							<li key = {link.id}>
								<a href={link.href} target="_balnk" className="nav-icon" >
									<i className={link.icon} ></i>
								</a>
							</li>
						);
					})}
					
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
