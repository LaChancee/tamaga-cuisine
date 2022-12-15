import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e: {
    currentTarget: string | HTMLFormElement;
    preventDefault: () => void;
  }) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kqkupio",
        "template_xw61eoa",
        e.currentTarget,
        "WfzxcLO2ybjZj1rHQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.currentTarget.reset();
  };

  return (
    <div className="grid place-content-center">
      <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <form
              ref={() => {
                form;
              }}
              onSubmit={sendEmail}
            >
              <label className="label">
                <span className="label-text">Nom</span>
              </label>
              <input
                type="text"
                placeholder="ex: Dupont"
                className="input input-bordered"
                name="user_name"
              />
              <label className="label">
                <span className="label-text">E-mail</span>
              </label>
              <input
                
                placeholder="test@example.com"
                className="input input-bordered"
                type="email" name="user_email" 
              />
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  name="message"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit" value="Send">
                  Enoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
