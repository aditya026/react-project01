import React from 'react';
import '../styles/contact.scss';

const Contact = () => {
  return (
    <div className="contact">

        <main>
            <h1>CONTACT US</h1>
            <form action="">
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" required placeholder='abc'/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" id="" required placeholder='abc@xyz.com'/>
                </div>
                <div>
                    <label>Message</label>
                    <input type="text" id="" required placeholder='tell us about your query...'/>
                </div>

                <button type='submit'>send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact
