import "./styles/Colors.css";
import "./styles/AttentionPage.css";

function AttentionPage() {
  return (
    <div className="attention_page">
        <img src="/simbolo-4.svg" alt="Fundo" className="background-image" />
        <div className="title">
            <h1>Sua marca, sua história, seu legado!</h1> 
            <img src="/simbolo-5.png" alt="Logo" className="inline-logo" />
        </div>
        <div className="wrapper">
            <div className="left">
                <div className="att_text"><p>FIQUE ATENTO!</p></div>
                <ul>
                    <li>Quem deposita primeiro tem prioridade legal no processo de registro, mesmo que o outro já esteja usando a marca no mercado;</li>
                    <li>O protocolo é apenas o começo: sem acompanhamento e conclusão do processo, a proteção não existe;</li>
                    <li>O registro tem validade de 10 anos e pode ser renovado: um ativo que valoriza sua empresa e impede dores de cabeça futuras.</li>
                </ul>
            </div>
            <div className="right">
                <div className="evite_text">EVITE PREJUÍZOS... INVISTA NA PROTEÇÃO DA SUA MARCA!</div>
                <p>REGISTRO DE MARCA: OU VOCÊ TEM, OU ALGÉM TEM POR VOCÊ</p>
                <ol>
                    <li>Pode perder o nome da empresa mesmo depois de anos de uso</li>
                    <li>Pode ter que mudar toda a identidade visual às pressas</li>
                    <li>Pode ser impedido de expandir (abrir filial, franquia, licenciar...)</li>
                    <li>Pode ser processado por uso indevido</li>
                </ol>
            </div>
        </div>
    </div>
  );
}

export default AttentionPage;
