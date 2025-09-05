
import "./styles/Colors.css";
import "./styles/HomePage.css";

function HomePage() {
  return (
    <div className="first_page">
        <div className="left_wrapper">
            <h1>PROTEJA SUA MARCA!</h1>
            <h2>VITALE</h2>
            <p>Registro de Marca</p>
        </div>
        <div className="right_wrapper">
           <div className="side">
             <div className="text-with-logo">
              <p>Sua marca é única e nós garantimos que ela continue sendo <span>só sua</span></p>
              <img src="/simbolo-5.png" alt="Logo" className="inline-logo" />
             </div>
                <div className="form">
                  <form action="submit" method="post">
                    <h2>SOLICITE SEU ORÇAMENTO:</h2>
                    <input type="text" name="name" id="name" placeholder="Nome completo..."/>
                    <input type="text" name="brand" id="brand" placeholder="Nome da marca..."/>
                    <input type="email" name="email" id="email" placeholder="Seu melhor e-mail"/>
                    <input type="number" name="tel" id="tel" placeholder="DDD + Whatsapp"/>
                    <button type="submit">ENVIAR</button>
                  </form>
                </div>
           </div>
        </div>
        <a href="https://wa.me/5581984465746" target="_blank" className="whatsapp-float">
          <img src="/whatsapp.png" alt="WhatsApp" />
        </a>
    </div>
  );
}

export default HomePage;
