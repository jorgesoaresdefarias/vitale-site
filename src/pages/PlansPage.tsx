import "./styles/Colors.css";
import "./styles/PlansPage.css";

function PlansPage() {
  return (
    <div className="plan_page">
        <div className="title">Planos<img src="/simbolo-5.png" alt="Logo" className="inline-logo" /></div>
        <p>Selecione o plano de acordo com o nível de personalização que você deseja.</p>
        <div className="wrapper">
            <div className="left">
                <h2>Básico</h2>
                <div className="card">
                    <p>Análise de viabilidade e diagnóstico da marca</p>
                    <p>Estratégia consolidada para protocolo</p>
                    <p>Protocolo do registro</p>
                    <p>Acompanhamento e envio de relatórios mensais</p>
                </div>
                <a href=""><div className="button">SOLICITE SEU ORÇAMENTO</div></a>
            </div>
            <div className="mid">
                <h2>Completo</h2>
                <div className="card">
                    <p>Análise de viabilidade e diagnóstico da marca </p>
                    <p>Estratégia consolidada para protocolo</p>
                    <p>Protocolo do registro</p>
                    <p>Acompanhamento e envio de relatórios mensais</p>
                    <p>Elaboração de manifestação a oposicação</p>
                    <p>Elaboração de recurso contra o indeferimento</p>
                </div>
            </div>
            <div className="right">
                <h2>Premium</h2>
                <div className="card">
                    <p>Análise de viabilidade e diagnóstico da marca</p>
                    <p>Estratégia consolidada para protocolo</p>
                    <p>Protocolo do registro</p>
                    <p>Acompanhamento e envio de relatórios mensais</p>
                    <p>Elaboração de manifestação a oposicação</p>
                    <p>Elaboração de recurso contra o indeferimento</p>
                    <p>Protocolo extra em caso de indeferimento do seu registro de marca</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default PlansPage;
