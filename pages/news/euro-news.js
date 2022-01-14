import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/News.module.scss';

const FEED_URL = 'https://www.cnbc.com/id/100727362/device/rss/rss.html';
const CORS_PROXY = 'https://my-dev-proxy-server.herokuapp.com/';
const URL_TO_FETCH = CORS_PROXY + FEED_URL;

const CNBCEuroNews = () => {
	const [theme, setTheme] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const theme = localStorage.getItem('theme');
		setTheme(theme);
		fetch(URL_TO_FETCH)
			.then(response => response.text())
			.then(str => new window.DOMParser().parseFromString(str, 'text/xml'))
			.then(data => {
				const items = data.querySelectorAll('item');
				setIsLoading(false);
				let html = ``;
				items.forEach(el => {
					html += `
              <article>
                <p class='${styles.pubData}'>${
						el.querySelector('pubDate').textContent
					}
              </p>
              <h3><a href=${
								el.querySelector('link').textContent
							} target="_new">${el.querySelector('title').textContent}</a></h3>
                <p>
                ${el.querySelector('description').textContent}
                </p>
              </article>
            `;
				});
				const articles = document.getElementsByClassName('feeds-container')[0];
				articles.insertAdjacentHTML('beforeend', html);
				let imgEl = document.querySelectorAll('img');
				for (let i = 1; i < imgEl.length; i++) {
					imgEl[i].setAttribute('loading', 'lazy');
				}
			});
	}, []);

	return (
		<>
			<Head>
				<title>Peter Jones | CNBC Euro News</title>
			</Head>
			<div className='feeds-container content'>
				<div className={styles.newsfeedHeader}>
					<Image
						src='/images/news/euronews.jpg'
						alt='cnbc euro news'
						width='100'
						height='100'
						layout='fixed'
					/>{' '}
					<h2>CNBC Euro News</h2>
				</div>
				{isLoading && theme === 'light' ? (
					<>
						<Image
							src='/images/spinner-light.gif'
							alt='loading'
							width='64'
							height='64'
						/>
						<p>Proxy server is warming up...</p>
					</>
				) : isLoading && theme === 'dark' ? (
					<>
						<Image
							src='/images/spinner-dark.gif'
							alt='loading'
							width='64'
							height='64'
						/>
						<p>Proxy server is warming up...</p>
					</>
				) : (
					''
				)}
			</div>
		</>
	);
};

export default CNBCEuroNews;
