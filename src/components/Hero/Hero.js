import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import Navbar from '../Navbar/Navbar';
import { HeroSection, HeroText, ButtonWrapper } from './HeroStyles';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
	const { ref, inView } = useInView({
		rootMargin: '-80px',
	});

	return (
		<>
			<HeroSection ref={ref} id="hero">
				<Container>
					<MainHeading>Find the Best Events & Meetups with Us</MainHeading>
					<HeroText>We Help you Find all of your Favorite Events in one Place</HeroText>

					<ButtonWrapper>
						<Link to="sign-up">
							<Button big>Find your event</Button>
						</Link>
					</ButtonWrapper>
				</Container>
			</HeroSection>
			<Navbar hide={inView} />
		</>
	);
};

export default Hero;
