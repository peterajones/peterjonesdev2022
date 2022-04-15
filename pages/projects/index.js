import {useState, useEffect} from 'react'
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
				<title>Peter Jones | Projects</title>
			</Head>
			<Banner src="/images/banners/Keyboard.jpg"/>
			<div className='content' style={{ minHeight: '2000px' }}>
				<div className={`fade-in ${didMount && "visible"}`}>
					<h1>Projects</h1>
					<p>This is where all of the projects go!</p>
					<ul className='items-container'>
						<li className='item'>
							<Link href='/projects/weather-app'>
								<a>Weather App</a>
							</Link>
						</li>
						<li className='item'>
							<Link href='/projects/random-password-generator'>
								<a>Random Password Generator</a>
							</Link>
						</li>
						<li className='item'>
							<Link href='/projects/pagination'>
								<a>Pagination</a>
							</Link>
						</li>
						<li className='item'>
							<Link href='/projects/checkbox-styling'>
								<a>Checkbox Styling</a>
							</Link>
						</li>
						<li className='item'>
							<Link href='/projects/pizza-pie'>
								<a>Pizza Pie</a>
							</Link>
						</li>
						<li className='item'>
							<Link href='/projects/rollup-counter'>
								<a>Rollup Counter</a>
							</Link>
						</li>
						<li className='item'>
							<Link href='/projects/js-clock'>
								<a>React Twelve Hour Clock</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};
