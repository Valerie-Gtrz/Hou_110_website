import ErrorAlert from "../errors/ErrorAlert";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Contact() {
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState("");

  const history = useHistory();

  //controlled inputs
  function changeHandler({ target }) {
    setFormData(target.value);
  }
  //console.log(formData);  //test

  //this function will be the onSubmit handler for the form element int the JSX
  // function submitHandler(event){
  //     event.preventDefault();
  //     //have to validate (separate fxn)
  //     postMessage(inputData)
  //       .then(() => history.push(`/home`))
  //       .catch(setErrorMessage);
  // }

  return (
    <>
      <ErrorAlert error={errorMessage} />
      <div className="d-flex justify-content-center">
        <div className="element">
          <form id="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control mb-2"
                onChange={changeHandler}
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control mb-2"
                onChange={changeHandler}
                aria-describedby="emailHelp"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message(Max 250 characters)</label>
              <textarea
                id="message"
                type="text"
                className="form-control"
                onChange={changeHandler}
                max="300"
                rows="5"
                maxLength="250"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
