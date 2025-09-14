import "./styles/Colors.css";
import "./styles/AboutPage.css";


function AboutPage() {
  return (
  <div className="about_page">
    <div className="left">
        <div className="title1">
            QUEM SOMOS?
        </div>
        <div className="text">Somos a VITALE, uma empresa especialista no direito de marca, constituída por duas graduandas de Direito da UFPE</div>
        <div className="name"><span>Vit</span>ória Miranda e&nbsp;<span>Ale</span>ssya Saldanha</div>
        <div className="image"><div className="overlay-image"></div></div>
    </div>
    <div className="right">
        <div className="title2">MISSÃO</div>
        <div className="text2">Proteger e fortalecer as marcas dos nossos clientes com segurança e valorização do patrimônio intelectual.</div>
        <div className="text3">NOSSOS VALORES</div>
        <div className="values">
            <div className="first">
                <div className="val">TRANSPARÊNCIA</div>
                <div className="val">COMPROMISSO</div>
            </div>
            <div className="second">
                <div className="val">CONFIANÇA</div>
                <div className="val">INOVAÇÃO</div>
            </div>
            <div className="first">
                <div className="val">EXCELÊNCIA</div>
            </div>
        </div>
    </div>
    <div className="right"></div>
  </div>
  );
}

export default AboutPage;
