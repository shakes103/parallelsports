
const Footer = () => {
  return (
    <div>
    <footer className="mb-2 mt-5 pt-5 bg-dark text-white">

        <div className="footer-top">
        <div className="container">
            <div className="row">

            <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Parallel Sports Coaching</h4>
                <p>
                A108 Adam Street <br/>
                New York, NY 535022<br/>
                United States <br/>
                <strong>Phone:</strong> +1 5589 55488 55<br/>
                <strong>Email:</strong> info@example.com<br/>
                </p>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <form action="" method="post">
                <div className="input-group">
                <input className="px-2" type="email" name="email" placeholder="E-mail" aria-label="Recipient's email"/>
                <button className="btn btn-primary" type="submit">Subscribe</button>
                </div>
                </form>
            </div>

            </div>
        </div>
        </div>

        <div className="container d-md-flex py-4">

        <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
            &copy; Copyright <strong><span>Parallel Sports Coaching</span></strong>. All Rights Reserved
            </div>
            
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
            <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
        </div>
    </footer>
  </div>
  );
}

export default Footer;