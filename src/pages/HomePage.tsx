import "./styles/Colors.css";
import "./styles/HomePage.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function HomePage() {
  const form = useRef<HTMLFormElement | null>(null);
  const service = ""
  const template = ""
  const api = ""
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // evita que a página recarregue
    emailjs
      .sendForm(
        service,
        template,
        form.current!,
        api
      )
      .then(
        (result) => {
          alert("E-mail enviado com sucesso!");
        },
        (error) => {
          alert("Erro ao enviar e-mail: " + service);
          console.log(service)
          console.log(template)
          console.log(api)
        }
      );
  };

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
                  <form ref={form} onSubmit={sendEmail} action="submit" method="post">
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
