import { Link } from 'react-router-dom';
import styles from './CardPaginaInicial.module.css'

export default function CardPaginaInicial({ mensagem, botao, imagem, url }) {
  return (
    <div className={styles.cardContainer}>
        <div>
            <img src={imagem} alt='' className={styles.imagem}/>
        </div>
        <div className={styles.textoBackground}>
          <h3 className={styles.texto}>{mensagem}</h3>
        </div>
        <Link to={url} className={styles.botao}>{botao}</Link>
    </div>
  );
}
