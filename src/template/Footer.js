import { faFacebook, faInstagram,faTwitter} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <footer className="bg-footer-color ">
      <div className="d-flex justify-content-center">
        <div className="py-5">
          <h5 className="text-center mb-3">Follow us on social media</h5>
          <div className="d-flex justify-content-evenly social-media-icon">
               <a href="https://facebook.com" >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.instagram.com" >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://twitter.com" >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                
          </div>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
