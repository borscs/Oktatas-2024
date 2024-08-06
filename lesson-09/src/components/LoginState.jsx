import {useState} from "react";
import Input from "./Input.jsx";
import {hasMinLength, isEmail, isNotEmpty} from "../util/validation.js";

export default function Login() {

	const [enteredValues, setEnteredValues] = useState({
		email: '',
		password: '',
	});

	const [didEdit, setDidEdit] = useState({
		email: false,
		password: false,
	});

	const emailValidator = didEdit.email && !isNotEmpty(enteredValues.email) && !isEmail(enteredValues.email);
	const passwordIsInvalid = didEdit.password && !hasMinLength(enteredValues.password, 6);

	function  handleSubmit(event) {
		event.preventDefault();
		console.log(enteredValues);
	}

	function handlerInputChange(identifier, value){
		setEnteredValues((prevElement) => ({
			...prevElement,
			[identifier]: value,
		}));
		setDidEdit((prevElement) => ({
			...prevElement,
			[identifier]: false,
		}));
	};

	function handlerEmailChange(identifier){
		setDidEdit((prevElement) => ({
			...prevElement,
			[identifier]: true,
		}));
	};

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        {/*<div className="control no-margin">*/}
          {/*<label htmlFor="email">Email</label>*/}
          {/*<input*/}
			{/*  id="email"*/}
			{/*  type="email"*/}
			{/*  name="email"*/}
			{/*  onBlur={ () => handlerEmailChange('email')}*/}
			{/*  value={enteredValues.email}*/}
			{/*  onChange={(event ) =>*/}
			{/*	  handlerInputChange('email', event.target.value)}*/}
		  {/*/>*/}
			<Input
				label="Email"
				id="email"
				type="email"
				name="email"
				error={emailValidator && 'Please enter a valid email!'}
				onBlur={() => handlerEmailChange('email')}
				value={enteredValues.email}
				onChange={(event) =>
					handlerInputChange('email', event.target.value)}
				/>

        {/*</div>*/}
		  {/*<div className="control-error">*/}
			{/*  {emailValidator && <p>Please enter a valid email.</p>}*/}
		  {/*</div>*/}
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <Input
			  id="password"
			  type="password"
			  name="password"
			  value={enteredValues.password}
			  error={passwordIsInvalid && 'Please enter a valid password!' }
			  onBlur={ () => handlerEmailChange('password')}
			  onChange={(event ) =>
				  handlerInputChange('password', event.target.value)}
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
