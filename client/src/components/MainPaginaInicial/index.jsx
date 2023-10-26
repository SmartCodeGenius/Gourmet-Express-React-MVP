import tomateMap from './tomateMap.svg';
import styles from './MainPaginaInicial.module.css'
import Cards from '../Cards';
import cardImg1 from './cardImg1.svg'
import cardImg2 from './cardImg2.svg'
import cardImg3 from './cardImg3.svg'
import cardImg4 from './cardImg4.svg'

export default function MainPaginaInicial() {

  return (
      <section className={styles.container}>
        <Cards mensagemA={'É sua primeira vez no Gourmet?'} botaoA={'Cadastre-se'} imagemA={cardImg1} mensagemB={'Conheça a equipe por trás do sistema!'} botaoB={'Visitar'} imagemB={cardImg2} urlA={'/cadastro'} urlB={'/quemsomos'}/>
           <img src={tomateMap} alt="Tomate andando" className={styles.tomate} />
        <Cards mensagemA={'Descubra os nossos planos!'} botaoA={'Acessar'} imagemA={cardImg3} mensagemB={'Entre em contato com o suporte!'} botaoB={'Contatar'} imagemB={cardImg4} urlA={'/planos'} urlB={'/suporte'}/>
      </section>
  );
}
