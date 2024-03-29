import './footerV.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_links">
          <div className="footer_block">
            <p className="footer_heading">shop</p>
            <Link to="/" className="footer_text">
              New in
            </Link>
            <Link to="/" className="footer_text">
              Sale
            </Link>
            <Link to="/" className="footer_text">
              Clothing
            </Link>
            <Link to="/" className="footer_text">
              Shoes
            </Link>
            <Link to="/" className="footer_text">
              Accessories
            </Link>
            <Link to="/" className="footer_text">
              Face&Body
            </Link>
            <Link to="/" className="footer_text">
              Topshop
            </Link>
            <Link to="/" className="footer_text">
              Brands
            </Link>
            <Link to="/" className="footer_text">
              Outlet
            </Link>
            <Link to="/" className="footer_text">
              Marketplace
            </Link>
          </div>

          <div className="footer_block">
            <p className="footer_heading">Help & Information</p>
            <Link to="/" className="footer_text">
              Customer Service
            </Link>
            <Link to="/" className="footer_text">
              My Account
            </Link>
            <Link to="/" className="footer_text">
              Store Locator
            </Link>
            <Link to="/" className="footer_text">
              Become a member
            </Link>
            <Link to="/" className="footer_text">
              Legal & Privacy
            </Link>
            <Link to="/" className="footer_text">
              Contact
            </Link>
            <Link to="/" className="footer_text">
              Gift Cards
            </Link>
            <Link to="/" className="footer_text">
              Cookie Settings
            </Link>
          </div>

          <div className="footer_block">
            <p className="footer_heading">about us</p>
            <Link to="/" className="footer_text">
              Career at focus
            </Link>
            <Link to="/" className="footer_text">
              About brand
            </Link>
            <Link to="/" className="footer_text">
              Investor Relations
            </Link>
            <Link to="/" className="footer_text">
              Press
            </Link>
            <Link to="/" className="footer_text">
              Corporate Governance
            </Link>
          </div>
        </div>

        <div className="social">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            href="https://www.instagram.com/"
          >
            <path
              d="M15 10.6313C12.5813 10.6313 10.6313 12.6 10.6313 15C10.6313 17.4 12.6 19.3687 15 19.3687C17.4 19.3687 19.3687 17.4 19.3687 15C19.3687 12.6 17.4 10.6313 15 10.6313ZM28.125 15C28.125 13.1812 28.125 11.4 28.0312 9.58125C27.9375 7.48125 27.45 5.60625 25.9125 4.0875C24.375 2.55 22.5188 2.0625 20.4188 1.96875C18.6 1.875 16.8188 1.875 15 1.875C13.1812 1.875 11.4 1.875 9.58125 1.96875C7.48125 2.0625 5.60625 2.55 4.0875 4.0875C2.55 5.625 2.0625 7.48125 1.96875 9.58125C1.875 11.4 1.875 13.1812 1.875 15C1.875 16.8188 1.875 18.6 1.96875 20.4188C2.0625 22.5188 2.55 24.3937 4.0875 25.9125C5.625 27.45 7.48125 27.9375 9.58125 28.0312C11.4 28.125 13.1812 28.125 15 28.125C16.8188 28.125 18.6 28.125 20.4188 28.0312C22.5188 27.9375 24.3937 27.45 25.9125 25.9125C27.45 24.375 27.9375 22.5188 28.0312 20.4188C28.1437 18.6188 28.125 16.8188 28.125 15ZM15 21.7313C11.2688 21.7313 8.26875 18.7313 8.26875 15C8.26875 11.2688 11.2688 8.26875 15 8.26875C18.7313 8.26875 21.7313 11.2688 21.7313 15C21.7313 18.7313 18.7313 21.7313 15 21.7313ZM22.0125 9.5625C21.15 9.5625 20.4375 8.86875 20.4375 7.9875C20.4375 7.10625 21.1313 6.4125 22.0125 6.4125C22.8937 6.4125 23.5875 7.10625 23.5875 7.9875C23.5922 8.19288 23.5548 8.39705 23.4773 8.58734C23.3999 8.77763 23.2843 8.95 23.1375 9.09375C22.9937 9.24051 22.8214 9.35618 22.6311 9.43359C22.4408 9.511 22.2366 9.54849 22.0312 9.54375L22.0125 9.5625Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            href="https://www.youtube.com/"
          >
            <path
              d="M27.9395 8.1242C27.7771 7.51923 27.4586 6.96753 27.0159 6.52432C26.5733 6.08111 26.022 5.76193 25.4172 5.59873C23.1911 5 14.2675 5 14.2675 5C14.2675 5 5.34395 5 3.11783 5.59554C2.5128 5.75821 1.96122 6.07721 1.51849 6.52051C1.07575 6.9638 0.75745 7.51578 0.595541 8.12102C-1.21487e-07 10.3503 0 15 0 15C0 15 -1.21487e-07 19.6497 0.595541 21.8758C0.923567 23.1051 1.89172 24.0732 3.11783 24.4013C5.34395 25 14.2675 25 14.2675 25C14.2675 25 23.1911 25 25.4172 24.4013C26.6465 24.0732 27.6115 23.1051 27.9395 21.8758C28.535 19.6497 28.535 15 28.535 15C28.535 15 28.535 10.3503 27.9395 8.1242ZM11.4331 19.2675V10.7325L18.8217 14.9682L11.4331 19.2675Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            href="https://www.pinterest.com/"
          >
            <path
              d="M15.0029 1.875C7.75488 1.875 1.87793 7.75195 1.87793 15C1.87793 20.373 5.1123 24.9902 9.73535 27.0234C9.70019 26.1094 9.72949 25.0078 9.96387 24.0117C10.2158 22.9453 11.6514 16.8574 11.6514 16.8574C11.6514 16.8574 11.2295 16.0195 11.2295 14.7832C11.2295 12.8379 12.3545 11.3848 13.7607 11.3848C14.9561 11.3848 15.5303 12.2812 15.5303 13.3535C15.5303 14.5547 14.7627 16.3477 14.3701 18.0117C14.042 19.4062 15.0674 20.5371 16.4443 20.5371C18.9287 20.5371 20.6045 17.3438 20.6045 13.5586C20.6045 10.6816 18.665 8.53125 15.1436 8.53125C11.165 8.53125 8.68066 11.502 8.68066 14.8184C8.68066 15.9609 9.02051 16.7695 9.54785 17.3906C9.78809 17.6777 9.82324 17.7949 9.73535 18.123C9.6709 18.3633 9.53027 18.9434 9.46582 19.1777C9.37793 19.5117 9.1084 19.6289 8.80957 19.5059C6.97559 18.7559 6.12012 16.752 6.12012 14.4902C6.12012 10.7637 9.2666 6.29297 15.501 6.29297C20.5107 6.29297 23.8096 9.91992 23.8096 13.8105C23.8096 18.9609 20.9443 22.8047 16.7256 22.8047C15.3076 22.8047 13.9775 22.0371 13.5205 21.1699C13.5205 21.1699 12.7588 24.1934 12.5947 24.7793C12.3193 25.793 11.7744 26.8008 11.2764 27.5918C12.4845 27.9482 13.7375 28.1297 14.9971 28.1309C22.2451 28.1309 28.1221 22.2539 28.1221 15.0059C28.1221 7.75781 22.251 1.875 15.0029 1.875Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            href="https://www.facebook.com/"
          >
            <path
              d="M26.8011 2H3.44885C3.06459 2 2.69607 2.15265 2.42436 2.42436C2.15265 2.69607 2 3.06459 2 3.44885V26.8015C2.0001 27.1857 2.15279 27.5541 2.42449 27.8258C2.69619 28.0974 3.06466 28.25 3.44885 28.25H16.0208V18.0847H12.5999V14.1231H16.0208V11.2014C16.0208 7.81073 18.0916 5.96484 21.1162 5.96484C22.5651 5.96484 23.8101 6.0724 24.1732 6.12089V9.66427L22.0754 9.66537C20.4304 9.66537 20.1121 10.447 20.1121 11.594V14.1235H24.0351L23.5243 18.0851H20.1121V28.25H26.8015C27.1857 28.2499 27.5541 28.0972 27.8258 27.8255C28.0974 27.5538 28.25 27.1853 28.25 26.8011V3.44885C28.25 3.06459 28.0974 2.69607 27.8256 2.42436C27.5539 2.15265 27.1854 2 26.8011 2Z"
              fill="white"
            />
          </svg>
        </div>
        <p className="footer_text footer_end">United States | $</p>
      </div>
    </>
  );
};

export default Footer;
