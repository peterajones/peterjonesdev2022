import {useState, useEffect} from 'react'
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
// Using static image paths
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
					<h1 className="news page">RSS News Feeds</h1>
					<ul className='items-container'>
						<li className="news item">
							<Link href='/news/cbc-world-news' passHref>
								<div className="item-content">
									<Image src="/images/news/cbc.jpg" width={100} height={100} loader={({src}) => src} />
									<a className='item-title'>CBC World News</a>
								</div>
							</Link>
						</li>
						<li className="news item">
							<Link href='/news/cbc-top-stories' passHref>
								<div className="item-content">
									<Image src="/images/news/cbc.jpg" width={100} height={100} loader={({src}) => src} />
									<a className="item-title">CBC News Top Stories</a>
								</div>
							</Link>
						</li>
						<li className="news item">
							<Link href='/news/cbc-toronto-news' passHref>
								<div className="item-content">
									<Image src="/images/news/cbc.jpg" width={100} height={100} loader={({src}) => src} />
									<a className="item-title">CBC Toronto News</a>
								</div>
							</Link>
						</li>
						<li className="news item">
							<Link href='/news/cbc-technology-news' passHref>
								<div className="item-content">
									<Image src="/images/news/cbc.jpg" width={100} height={100} loader={({src}) => src} />
									<a className="item-title">CBC Technology News</a>
								</div>
							</Link>
						</li>
						<li className="news item">
							<Link href='/news/cnbc-international-news' passHref>
								<div className="item-content">
									<Image src="/images/news/cnbc.jpg" width={100} height={100} loader={({src}) => src} />
									<a className="item-title">CNBC International News</a>
								</div>
							</Link>
						</li>
						<li className="news item">
							<Link href='/news/euro-news' passHref>
								<div className="item-content">
									<Image src="/images/news/euronews.jpg" width={100} height={100} loader={({src}) => src} />
									<a className="item-title">CNBC Euro News</a>
								</div>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default News;
