import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
    return (
        <footer id="footer">
                <div>
                    <h4>email</h4>
                    <p><Link to="mailto:webstoryboy@naver.com">webstoryboy@naver.com</Link></p>
                </div>
                <div>
                    <h4>Kakao</h4>
                    <p><Link to="/">@webstupis</Link></p>
                </div>
                <div>
                    <h4>social</h4>
                    <ul>
                        <li><a href="/">Youtube</a></li>
                        <li><a href="/">Instargram</a></li>
                        <li><a href="/">Github</a></li>
                        <li><a href="/">Cafe</a></li>
                        <li><a href="/">Referecne</a></li>
                        <li><a href="/">Tutorials</a></li>
                        <li><a href="/">CSS</a></li>
                    </ul>
                </div>
            </footer>
    )
}

export default Footer;