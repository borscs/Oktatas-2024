import {useRef, useState} from "react";

export default function Login() {
	const [emailIsInvalid, setEmailIsInvalid] = useState(false);

	// const [enteredValues, setEnteredValues] = useState({
	// 	email: '',
	// 	password: '',
	// });

	const email = useRef();
	const password = useRef();

	function  handleSubmit(event) {
		event.preventDefault();
		const enteredEmail = email.current.value
		const enteredPassword = password.current.value;

		if(!enteredEmail.includes('@')){
			setEmailIsInvalid(true);
			return
		}

		setEmailIsInvalid(false);

		console.log('sommetings');
	}



	// function handlerInputChange(identifier, value){
	// 	setEnteredValues((prevElement) => ({
	// 		...prevElement,
	// 		[identifier]: value,
	// 	}));
	// }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

		<div className="control-row">
			<div className="control no-margin">
				<label htmlFor="email">Email</label>
				<input
					id="email"
					type="email"
					name="email"
					ref={email}
					// value={enteredValues.email}
					// onChange={(event ) =>
					//   handlerInputChange('email', event.target.value)}
				/>
			</div>
			<div className="control-error">
				{emailIsInvalid && <p>Please enter a valid email address.</p>}
			</div>
			<div className="control no-margin">
				<label htmlFor="password">Password</label>
				<input
					id="password"
					type="password"
					name="password"
					ref={password}
					// value={enteredValues.password}
					// onChange={(event ) =>
					//   handlerInputChange('password', event.target.value)}
				/>
			</div>
		</div>

		<p className="form-actions">
			<button className="button button-flat">Reset</button>
			<button className="button">Login</button>
      </p>
    </form>
  );
}
