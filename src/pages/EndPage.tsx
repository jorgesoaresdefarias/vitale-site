import "./styles/Colors.css";
import "./styles/EndPage.css";


function EndPage() {
  return (
    <div className="end_page">
        <div className="wrapper">
          <div className="left">
            <img src="/foto_end.png" alt="foto" className="foto_rosto" />
            <img src="/logotipo-s3.svg" alt="logo" className="foto_logo"/>
          </div>
          <div className="right">
              <p>Clique abaixo para acessar!</p>
              <div className="social"><img src="/whats_logo.png" alt="" className="icon"/>(81) 8446-5746</div>
              <div className="social"><img src="/insta_logo.png" alt="" className="icon"/>@vitaleregistrodemarca</div>
              <div className="social"><img src="/tiktok_logo.png" alt="" className="icon"/>@vitaleregistrodemarca</div>
              <div className="social"><img src="/facebook_logo.png" alt="" className="icon"/>Vitale Registro de Marca</div>
              <div className="social"><img src="/email_logo.png" alt="" className="icon"/>vitaleregistrodemarca@gmail.com</div>
          </div>
        </div>
    </div>
  );
}

export default EndPage;
