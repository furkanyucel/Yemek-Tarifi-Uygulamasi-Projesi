import Style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={Style.main}>
      <div className={Style.copyright}>
        <p>Copyright © 2024 furkanyucel.com Tüm hakları saklıdır.</p>
      </div>
      <div className={Style.social}>
        <a href="mailto:furkanyucelux@gmail.com"><i className="far fa-envelope"></i></a>
        <a href="https://www.linkedin.com/in/furkanyucel" target="_blank"><i className="fab fa-linkedin-in"></i></a>
        <a href="https://www.behance.net/yucelfurkan" target="_blank"><i className="fab fa-behance"></i></a>
        <a href="https://github.com/furkanyucel" target="_blank"><i className="fab fa-github"></i></a>
      </div>
    </div>
  )
}

export default Footer;