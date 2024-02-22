import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGit,
    FaGithub,
    FaGithubSquare,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Explore more: Browse our blog for in-depth analysis, exclusive interviews, and behind-the-scenes stories. Join our community: Connect with fellow movie lovers, share your thoughts, and discover new favorites. Stay informed: Sign up for our newsletter to receive the latest movie news, releases, and exclusive offers delivered straight to your inbox. © Zahran 2024 All rights reserved.
                </div>
                <div className="socialIcons">
                    <a href="https://www.facebook.com/profile.php?id=100009296469490"><span className="icon">
                        <FaFacebookF />

                    </span></a>
                    <a href="https://www.instagram.com/mohamedosamazahran77/"><span className="icon">
                        <FaInstagram />

                    </span></a>
                    <a href="https://github.com/ZAHRAN88"> <span className="icon">
                        <FaGithub />

                    </span></a>
                    <a href="https://www.linkedin.com/in/mohamed-zahran-383859222/"> <span className="icon">
                        <FaLinkedin />

                    </span></a>

                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
