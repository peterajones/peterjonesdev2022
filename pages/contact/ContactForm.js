// import { useState } from "react";
// import { Redirect } from 'react-router-dom';

// const encode = data => {
// 	return Object.keys(data)
// 		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
// 		.join("&");
// };

export default function ContactForm(props) {
	console.log(props);
	// const [data, setData] = useState({
	// 	name: "",
	// 	email: "",
	// 	message: "",
	// });

	/* Here’s the juicy bit for posting the form submission */

	// const handleSubmit = e => {
	// 	console.log({ ...data });
	// 	fetch("/", {
	// 		method: "POST",
	// 		headers: { "Content-Type": "application/x-www-form-urlencoded" },
	// 		body: encode({ "form-name": "contact", ...data }),
	// 	})
	// 		.then(() =>
	// 			setData({
	// 				name: "",
	// 				email: "",
	// 				message: "",
	// 			})
	// 		)
	// 		.catch(error => alert(error));
	// 	e.preventDefault();
	// 	props.history.push("/contact/thank-you");
	// };

	// const handleChange = e => {
	// 	const { name, value } = e.target;
	// 	setData({
	// 		...data,
	// 		[name]: value,
	// 	});
	// };

	return (
		<form
			name="contact"
			action="/contact/success"
			method="POST"
			data-netlify-recaptcha="true"
			data-netlify="true"
			style={{ minHeight: "400px" }}
			// onSubmit={handleSubmit}
		>
			<input type="hidden" name="form-name" value="contact" />
			<p>
				<label htmlFor="name">
					Your Name:{" "}
					<input
						type="text"
						name="name"
						id="name"
						// value={data.name}
						required
						// onChange={handleChange}
					/>
				</label>
			</p>
			<p>
				<label htmlFor="email">
					Your Email:{" "}
					<input
						type="email"
						name="email"
						id="email"
						// value={data.email}
						required
						// onChange={handleChange}
					/>
				</label>
			</p>
			<p>
				<label htmlFor="message">
					Message:{" "}
					<textarea
						name="message"
						id="message"
						// value={data.message}
						required
						// onChange={handleChange}
					/>
				</label>
			</p>
			<div data-netlify-recaptcha="true" />
			<p>
				<button className="btn-submit" type="submit">
					Send
				</button>
			</p>
		</form>
	);
};
