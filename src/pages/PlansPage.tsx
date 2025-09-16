import "./styles/Colors.css";
import "./styles/PlansPage.css";

function PlansPage() {
  return (
    <div className="plan_page">
        <div className="title">Planos<img src="/simbolo-5.png" alt="Logo" className="inline-logo" /></div>
        <p>Selecione o plano de acordo com o nível de personalização que você deseja.</p>
        <div className="wrapper">
            <div className="left">
                <div className="di">
                    <h2>Básico</h2>
                    <div className="card">
                    <div className="wrapper_text"><img src="/icon_accept.png" alt="Logo" className="icon" /><p>Análise de viabilidade e diagnóstico da marca</p></div>
                    <div className="wrapper_text"><img src="/icon_accept.png" alt="Logo" className="icon" /><p>Estratégia consolidada para protocolo</p></div>
                    <div className="wrapper_text"><img src="/icon_accept.png" alt="Logo" className="icon" /><p>Protocolo do registro</p></div>
                    <div className="wrapper_text"><img src="/icon_accept.png" alt="Logo" className="icon" /><p>Acompanhamento e envio de relatórios mensais</p></div>
                </div>
                </div>
                <a href="https://wa.me/5581984465746" target="_blank"><div className="button">SOLICITE SEU ORÇAMENTO</div></a>
            </div>
           <div className="mid">
                <h2>Completo</h2>
                <div className="card">
                    <div className="wrapper_text">
                        <img src="/icon_accept.png" alt="Logo" className="icon" />
                        <p>Análise de viabilidade e diagnóstico da marca</p>
                    </div>
                    <div className="wrapper_text">
                        <img src="/icon_accept.png" alt="Logo" className="icon" />
                        <p>Estratégia consolidada para protocolo</p>
                    </div>
                    <div className="wrapper_text">
                        <img src="/icon_accept.png" alt="Logo" className="icon" />
                        <p>Protocolo do registro</p>
                    </div>
                    <div className="wrapper_text">
                        <img src="/icon_accept.png" alt="Logo" className="icon" />
                        <p>Acompanhamento e envio de relatórios mensais</p>
                    </div>
                    <div className="wrapper_text">
                        <img src="/icon_accept.png" alt="Logo" className="icon" />
                        <p>Elaboração de manifestação a oposição</p>
                    </div>
                    <div className="wrapper_text">
                        <img src="/icon_accept.png" alt="Logo" className="icon" />
                        <p>Elaboração de recurso contra o indeferimento</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <h2>Premium</h2>
                <div className="card">
                    <div className="wrapper_text"><img src="/icon_accept.png" alt="Logo" className="icon" /><p>Análise de viabilidade e diagnóstico da marca</p></div>
                    <div className="wrapper_text"><img src="/icon_accept.png" alt="Logo" className="icon" /><p>Estratégia consolidada para protocolo</p></div>
                    <div className="wrapper_text"><img src="/icon_accept.png" alt="Logo" className="icon" /><p>Protocolo do registro</p></div>
                    <div className="wrapper_text"><img src="/icon_accept.png" alt="Logo" className="icon" /><p>Acompanhamento e envio de relatórios mensais</p></div>
                    <div className="wrapper_text"><img src="/icon_accept.png" alt="Logo" className="icon" /><p>Elaboração de manifestação a oposicação</p></div>
                    <div className="wrapper_text"><img src="/icon_accept.png" alt="Logo" className="icon" /><p>Elaboração de recurso contra o indeferimento</p></div>
                    <div className="wrapper_text"><img src="/icon_accept.png" alt="Logo" className="icon" /><p>Protocolo extra em caso de indeferimento do seu registro de marca</p></div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default PlansPage;
