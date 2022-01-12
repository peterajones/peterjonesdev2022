import Head from 'next/head';
import Link from 'next/link';
import Banner from '../../Components/Banner'

export default function Code() {
	return (
		<>
			<Head>
				<title>Peter Jones | Code</title>
			</Head>
			<Banner src="/images/banners/Keyboard.jpg"/>
			<div className='content' style={{ minHeight: '2000px' }}>
				<h1>Projects</h1>
				<p>This is where all of the projects go!</p>
				<ul>
					<li>
						<Link href='/projects/weather-app'>
							<a>Weather App</a>
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};
