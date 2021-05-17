import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faTwitterSquare, faFacebook, faYoutube, faGithub, faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";



function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>Product Introduction</h6>
                        <p className='text-justify'>

                        </p>
                    </div>
                    <div className="col-xs-6 col-md-3">
                        <h6>About Us</h6>
                        <em id='team'>Team members</em>
                        <p className="text-justify">
                            <ol>
                                <li>Nguyễn Ngọc Tuân</li>
                                <li>Nguyễn Đồng Đức Anh</li>
                                <li>Nguyễn Đăng Tuấn Anh</li>
                                <li>Nguyễn Đức Tùng</li>
                                <li>Nguyễn Huy Hoàn</li>
                            </ol>
                        </p>
                    </div>
                    <div className="col-xs-6 col-md-3">
                        <h6>Tech</h6>
                        <ul className="footer-links">
                            <li><a href='#'>MongoDB</a></li>
                            <li><a href='#'>ExpressJS</a></li>
                            <li><a href='#'>React</a></li>
                            <li><a href='#'>Node</a></li>
                        </ul>
                    </div>

                </div>
                <hr />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright © 2021 All Rights Reserved by
                <a> NTN company</a>.
              </p>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li><a className="facebook" href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a></li>
                            <li><a className="twitter" href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} /></a></li>
                            <li><a className="github" href="https://github.com/"><FontAwesomeIcon icon={faGithub} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}
export default Footer