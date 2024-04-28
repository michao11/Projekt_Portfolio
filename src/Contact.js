import React, { useState } from "react";
import RedditIcon from "./reddit_icon.png"
import GithubIcon from "./github_icon.png"
import InstagramIcon from "./instagram_icon.png"
import TwitterIcon from "./twitter_icon.png"
import { collection, addDoc } from "firebase/firestore"; 
import db from "./firebase-config";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSendForm = async () => {
        if(name !== "" && email !== "" && message !== "") {
            const docRef = await addDoc(collection(db, "contact-messages"), {
                UserName : name,
                UserEmail : email,
                UserMessage : message
            });
            console.log("Document written with ID: ", docRef.id);
            
            const formMessage = document.getElementById("contact-response");
            formMessage.textContent = "Message has been sent";
            setName("");
            setEmail("");
            setMessage("");
        }
    }

    return (
        <section className="contact-for hidden">
            <div className="contact-div">
                <div className="contact-data">
                    <h1>Send me a message!</h1>
                    <h3>Got a question or proposal, or just want to say hello? Go ahead</h3>
                </div>
                <div className="contact-email">
                    <input className="input-email" type="text" value={name} placeholder="Enter your name" onChange={(e) => setName(e.target.value)}></input>
                    <input className="input-email" type="email" value={email} placeholder="Enter your email adress" onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className="contact-message">
                    <input className="input-message" type="text" value={message} placeholder="Enter your message" onChange={(e) => setMessage(e.target.value)}></input>
                    <button className="contact-button" onClick={handleSendForm}>Send message</button>
                </div>
                <div id="contact-response">
                   <p></p> 
                </div>
                <div className="media">
                    <div className="contact-media">
                        <h3>You can also find me on: </h3>
                    </div>
                    <div className="contact-images">
                        <a href="https://www.reddit.com/user/Michao_/"><img className="contact-img" src={RedditIcon} alt="Reddit"></img></a>
                        <a href="https://github.com/michao11"><img className="contact-img" src={GithubIcon} alt="Github"></img></a>
                        <a href="https://www.instagram.com/its.shadow.313/"><img className="contact-img" src={InstagramIcon} alt="Instagram"></img></a>
                        <a href="twitter.com/its_shadow_313"><img className="contact-img" src={TwitterIcon} alt="Twitter"></img></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
