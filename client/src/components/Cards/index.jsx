import CardPaginaInicial from '../CardPaginaInicial';
import styles from './Cards.module.css'

export default function Cards({ mensagemA, botaoA, imagemA, mensagemB, botaoB, imagemB, urlA, urlB }) {
  return (
    <div className={styles.containerCards}>
        <CardPaginaInicial mensagem={mensagemA} botao={botaoA} imagem={imagemA} url={urlA}/>
        <CardPaginaInicial mensagem={mensagemB} botao={botaoB} imagem={imagemB} url={urlB}/>
    </div>
  );
}
