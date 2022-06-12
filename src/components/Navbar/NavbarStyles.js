import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { navbar } from '../../data/GlobalData';

export const Nav = styled.nav`
	background: ${({ hide }) => (hide ? 'transparent' : navbar)};
	margin-top: -80px;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: sticky;
	top: 0;
	z-index: 50;
	width: 100%;
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: start;
	height: 80px;
`;

export const NavLogo = styled(Link)`
	color: yellow;
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	z-index: 50;

	&:hover {
		color: powderblue;
	}
`;

export const NavIcon = styled.img`
	margin-right: 0.2rem;
	width: 3rem;
`;
export const MobileIcon = styled.div`
	display: none;
	z-index: 50;

	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	width: 100%;

	@media screen and (max-width: 960px) {
		flex-direction: column;
		width: 100%;
		height: 100vh;
		position: fixed;
		padding-top: 30%;
		top: 0;
		left: 0;
		opacity: ${({ show }) => (show ? 1 : 0)};
		visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
		transform: translateY(${({ show }) => (show ? '0' : '-10px')});
		transition: opacity 0.5s ease;
		background: linear-gradient(to bottom left, indigo, darkgreen);
	}

	> li:first-child {
		margin-left: auto;
	}
`;

export const NavItem = styled.li`
	height: 80px;
	cursor: pointer;

	@media screen and (max-width: 960px) {
		width: 100%;

		&:hover {
			border: none;
		}
	}
`;

export const NavLinks = styled(LinkScroll)`
	color: lemonchiffon;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;
	&.active {
		text-shadow: 0 0 25px pink, 0 0 20px cyan, 0 0 15px lime;

		@media screen and (min-width: 960px) {
			border-bottom: 2px solid thistle;
		}
	}
	&:hover {
		color: lightpink;
		transition: all 0.3s ease;
	}

	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;

		&:hover {
			color: lightsalmon;
			transition: all 0.3s ease;
		}
	}
`;
