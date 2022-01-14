import React, {useState, useEffect} from 'react'
import Head from 'next/head';
import Link from 'next/link';
import Banner from '../../Components/Banner';

const News = () => {
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
				<title>Peter Jones | News Feeds</title>
			</Head>
			<Banner src="/images/banners/News.jpg" />
			<div className='content' style={{ minHeight: '2000px' }}>
				<div className={`fade-in ${didMount && "visible"}`}>
					<h1>News</h1>
					<p>This is the index page of the news section...</p>
					<ul>
						<li>
							<Link href='/news/cbc-world-news'>
								<a>CBC World News</a>
							</Link>
						</li>
						<li>
							<Link href='/news/cbc-top-stories'>
								<a>CBC News Top Stories</a>
							</Link>
						</li>
						<li>
							<Link href='/news/cbc-toronto-news'>
								<a>CBC Toronto News</a>
							</Link>
						</li>
						<li>
							<Link href='/news/cbc-technology-news'>
								<a>CBC Technology News</a>
							</Link>
						</li>
						<li>
							<Link href='/news/cnbc-international-news'>
								<a>CNBC International News</a>
							</Link>
						</li>
						<li>
							<Link href='/news/euro-news'>
								<a>CNBC Euro News</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default News;
