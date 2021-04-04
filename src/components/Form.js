import React from "react"

const Form = () => {
  return (
    <div class="form">
      <div class="login-box">
        <h2>Contact me</h2>
        <form name="contact" data-netlify="true" method="POST">
          <div class="user-box">
            <input type="text" name="name" required="true" />
            <label>Name</label>
          </div>

          <div class="user-box">
            <input type="email" name="email" required="true" />
            <label>Email</label>
          </div>
          <div class="user-box">
            <input type="text" name="message" required="false" />
            <label>Message</label>
          </div>
          <a>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <button type="submit ">Submit</button>
          </a>
        </form>
      </div>
    </div>
  )
}

export default Form
