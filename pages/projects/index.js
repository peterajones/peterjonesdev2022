import React, {useState, useEffect} from 'react'
import Head from 'next/head';
import Link from 'next/link';
import Banner from '../../Components/Banner'

export default function Code() {
	const [didMount, setDidMount] = useState(false);
	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		window.scrollTo(0, 0);
		setDidMount(true);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	function handleScroll() {
		let scroll = window.scrollY;
		setScroll(scroll);
	}

	return (
		<>
			<Head>
				<title>Peter Jones | Code</title>
			</Head>
			<Banner src="/images/banners/Keyboard.jpg"/>
			<div className='content' style={{ minHeight: '2000px' }}>
				<div className={`fade-in ${didMount && "visible"}`}>
					<h1>Projects</h1>
					<p>This is where all of the projects go!</p>
					<ul>
						<li>
							<Link href='/projects/weather-app'>
								<a>Weather App</a>
							</Link>
						</li>
						<li>
							<Link href='/projects/random-password-generator'>
								<a>Random Password Generator</a>
							</Link>
						</li>
						<li>
							<Link href='/projects/pagination'>
								<a>Pagination</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};
