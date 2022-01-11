import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';
import Banner from './Banner'

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<link rel='shortcut icon' href='/favicon.png' type='image/x-icon' />
				<meta
					name='keywords'
					content='Web Development, HTML5, CSS3, CSS, JavaScript, RSS News Feeds, ReactJS, NextJS'
				/>
			</Head>
			<Navbar />
			<div className='wrapper'>
				{children}	
			</div>
			<Footer />
		</>
	);
};

export default Layout;
