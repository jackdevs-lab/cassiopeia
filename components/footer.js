import Link from "next/link"
import Image from "next/legacy/image"

const socialMedia = [
  { name: 'instagram', url: 'https://www.instagram.com', image: '/svgs/instagram.svg' },
  { name: 'whatsapp', url: 'https://www.whatsapp.com', image: '/svgs/whatsapp.svg' },
  { name: 'facebook', url: 'https://www.facebook.com', image: '/svgs/facebook.svg' },
];

const helpAPI = [
  { title: 'Contact us', url: '/contact-us' },
  { title: 'Delivery information', url: '/delivery-information' },
  { title: 'Payment information', url: '/payment-information' },
  { title: 'Customer service', url: '/customer-service' },
  { title: 'FAQ', url: '/faq' }
];

const aboutAPI = [
  { title: 'Our stores', url: '/our-stores' },
  { title: 'Flower care', url: '/flower-care' },
  { title: 'Site map', url: '/site-map' }
];

const legalAPI = [
  { title: 'Privacy policy', url: '/privacy-policy' },
  { title: 'Terms & Conditions', url: '/terms-and-conditions' },
  { title: 'Cookie policy', url: '/cookie-policy' }
];

function Tab(props) {
  return (
    <span>
      <Link href={props.url} passHref>
        {props.title}
      </Link>
    </span>
  )
}

function MediaLink(props) {
  return (
    <a href={props.url} passHref>
      <img src={props.image} alt={props.name} width={24} height={24} />
    </a>
  )
}

export default function Footer() {
  const mediaList = [];
  socialMedia.forEach((item, index) => {
    mediaList.push(
      <MediaLink key={index} name={item.name} url={item.url} image={item.image} />
    );
  });

  const helpList = [];
  helpAPI.forEach((item, index) => {
    helpList.push(
      <Tab key={index} title={item.title} url={item.url} />
    );
  });

  const aboutUs = [];
  aboutAPI.forEach((item, index) => {
    aboutUs.push(
      <Tab key={index} title={item.title} url={item.url} />
    );
  });

  const legal = [];
  legalAPI.forEach((item, index) => {
    legal.push(
      <Tab key={index} title={item.title} url={item.url} />
    );
  });

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__row-1">
          <div className="footer__col-1">
            <div className='footer__contact'>
              <p>Follow us</p>
              <span>+2547 94 756 485</span>
            </div>
            <div className="footer__media">
              {mediaList}
            </div>
          </div>

          <div className="footer__col-2">
            <div className="footer__link">
              <p>Help</p>

              {helpList}
            </div>

            <div className="footer__link">
              <p>About us</p>

              {aboutUs}
            </div>

            <div className="footer__link">
              <p>Legal</p>

              {legal}
            </div>

            <div className='footer__contact footer__hiden'>
              <p>Follow us</p>
              <span>+2547 94 756 485</span>
              <div className="footer__media">
                {mediaList}
              </div>
            </div>
          </div>
        </div>

        <div className="footer__row-2">
          &copy; Copyright,  2025. Developed by <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fmagic-portfolio-for-next-js-zeta-murex.vercel.app%2F%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExYXplSm9qTWJ3MTh4bjA4bHNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR5uOuRjNb2W8Fyaqf4dCt8BleGYUTmR5qJ0qPgKXpvAhTp1ux-ty8TjGcxedw_aem_lIBSJsK24_atEQ6DC0y4dw&h=AT2aOmxq6Dlhz9AS9LhqBUIsTpEGgjSsBth-MmyE6s5kwAOzHFAzwLLhrqhS38h_hJ-uh71R6aKpUQX2x5LX1P6PM9ZnnCt-Si6V2OdL-AC2itUMQmfzsNjrvX216M4_oOxp">Ndegwa</a>
        </div>
      </div>
    </footer>
  )
}