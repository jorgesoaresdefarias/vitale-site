import "./styles/Colors.css";
import "./styles/KnowPage.css";
function KnowPage() {
  return (
   <div className="know_page">
        <h1 className="title">CONHEÇA NOSSO PORTIFÓLIO DE SERVIÇOS</h1>
        <div className="wrapper">
        <div className="left">
            <div className="card_container">
                <div className="card">pesquisa de viabilidade</div>
                <div className="card_hide">verifica se a marca pode ser registrada sem riscos.</div>
            </div>
            <div className="card_container">
                <div className="card">protocolo do pedido</div>
                <div className="card_hide">preparamos a documentação e registramos no INPI.</div>
            </div>
            
            <div className="card_container">
                <div className="card">acompanhamento completo</div>
                <div className="card_hide">monitoramos todas as etapas até a decisão final.</div>
            </div>

            <div className="card_container">
                <div className="card">defesa e recursos</div>
                <div className="card_hide">atuação em oposições, exigências e indeferimentos.</div>
            </div>

            <div className="card_container">
                <div className="card">monitoramento de colidência</div>
                <div className="card_hide">vigiamos marcas semelhantes que possam afetar a sua.</div>
            </div>

            <div className="card_container">
                <div className="card">renovação de registro</div>
                <div className="card_hide">garantimos a renovação do seu registro a cada 10 anos.</div>
            </div>

            <div className="card_container">
                <div className="card">transferência e licenciamento</div>
                <div className="card_hide">registramos cessões e contratos de uso da marca.</div>
            </div>

            <div className="card_container">
                <div className="card">consultoria estratégica</div>
                <div className="card_hide">orientamos sobre classificação e expansão internacional.</div>
            </div>
            <div className="card_container">
                <div className="card">notificação extrajudicial</div>
                <div className="card_hide">envio de notificação em caso de uso indevido de marca.</div>
            </div>

            <a href=""><div className="button">DESEJO UM DESSES SERVIÇOS</div></a>
        </div>
        <div className="right">
            <div className="img">
            </div>
            <div className="text"><p>Passo a Passo do seu registro de marca</p> <div className="logo"></div></div>
            <div className="step_by_step">
                <div className="first">
                    <div className="card2">1) pesquisa de viabilidade</div>
                    <div className="arrow"></div>
                    <div className="card2">2) protocolo do INPI</div>
                </div>
                <div className="arrow3"></div>
                <div className="second">
                    <div className="card2">4) concessão</div>
                    <div className="arrow2"></div>
                    <div className="card2">3) Acompanhamento</div>
                </div>
            </div>
        </div>
        </div>
   </div>
  );
}

export default KnowPage;
