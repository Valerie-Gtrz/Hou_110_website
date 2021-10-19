import ErrorAlert from "../errors/ErrorAlert";
import { useState } from "react";

function Contact() {
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState("");

  function changeHandler({ target }) {
    setFormData(target);
  }
  console.log(formData);

  return (
    <>
      <ErrorAlert error={errorMessage} />
      <form>
        <label>
          <input
            id="message"
            type="text"
            className="form-control"
            onChange={changeHandler}
            max="300"
          ></input>
        </label>
      </form>
    </>
  );
}

export default Contact;
