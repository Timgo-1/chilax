import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FeatureSection = styled.div`
	padding: 140px;
	position: relative;
	margin: 0 auto;
	background: ${({ inverse }) => (inverse ? 'white' : 'conic-gradient(at 0% 30%, navy 10%, deeppink 30%, slateblue 50%);')};

	@media screen and (max-width: 768px) {
		padding: 50px 10px;
	}
`;

export const FeatureTitle = styled.h2`
	text-align: center;
	font-size: clamp(2.1rem, 7vw, 3rem);

	line-height: 1.06;
	letter-spacing: 0.4rem;
	margin: auto;
	color: ${({ inverse }) => (inverse ? 'black' : 'springgreen')};
`;

export const FeatureMainText = styled.p`
	text-align: center;
	font-size: clamp(1rem, 2vw, 1.2rem);
	margin: 2rem auto 0;
	width: 70%;
	color: ${({ inverse }) => (inverse ? 'black' : 'aquamarine')};
`;

export const FeatureTextWrapper = styled(motion.div)`
	position: relative;
	padding: 0 0 20px;
	margin-bottom: 4rem;
	color: ${({ inverse }) => (inverse ? 'black' : 'green')};
`;

export const FeatureWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin-top: 4rem;
	grid-gap: 2rem;

	@media screen and (max-width: 960px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const FeatureColumn = styled(motion.div)`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
`;

export const FeatureImageWrapper = styled.div`
	margin-bottom: 1rem;
	border-radius: 50%;
	background-color: indigo;
	padding: 30px;
`;

export const FeatureImage = styled.img`
	width: 100%;
	height: 4rem;
`;

export const FeatureName = styled.h3`
	font-weight: 600;
	font-size: 1.3rem;
	letter-spacing: 2px;
	color: ${({ inverse }) => (inverse ? 'black' : 'aqua')};

	@media screen and (max-width: 768px) {
		font-weight: 400;
		font-size: 1rem;
		letter-spacing: 1.3px;
	}
`;
export const FeatureText = styled.p`
	margin: 1rem 0 auto;
	text-align: center;
	font-size: 0.9rem;
	line-height: 1.73;
	letter-spacing: 0.5px;
	color: #626881;
	color: ${({ inverse }) => (inverse ? 'red' : 'palegoldenrod')};

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
