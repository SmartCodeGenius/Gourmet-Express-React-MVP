import { Link } from 'react-router-dom';
import styles from './CriaProduto.module.css';
import { useContext, useState } from 'react';
import { EstabelecimentoContext } from '../../Context/EstabelecimentoMode';

export default function CriaProduto() {
  const { id_estabelecimento } = useContext(EstabelecimentoContext);

  const [inputs, setInputs] = useState({
    nome: '',
    preco: '',
    ingredientes: ''
  });

  const { nome, preco, ingredientes } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { nome, preco, ingredientes };
      
      const response = await fetch('http://localhost:5000/produtos/criaProduto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'token': localStorage.token, 'Estabelecimento-ID': id_estabelecimento },
        body: JSON.stringify(body)
      });
  
      const parseRes = await response.json();
      console.log(parseRes);
  
      window.history.back();
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <section className={styles.container}>
      <h1 className={styles.titulo}>Criar produto</h1>
      <form className={styles.form} onSubmit={e => onSubmitForm(e)}>

        <label>Nome do produto<strong style={{ color: 'red' }}>*</strong></label>
        <input type='text' className={styles.input} name={'nome'} value={nome} onChange={e => onChange(e)}/>

        <label>Preço<strong style={{ color: 'red' }}>*</strong></label>
        <input type='number' className={styles.input} name={'preco'} value={preco} onChange={e => onChange(e)} />

        <label>Ingredientes<strong style={{ color: 'red' }}>*</strong></label>
        <input type='text' className={styles.input} name={'ingredientes'} value={ingredientes} onChange={e => onChange(e)} style={{ padding: '50px 10px', fontSize: 15 }} />

        <div className={styles.opcoes}>
          <Link to={`/estabelecimento/${id_estabelecimento}/estoque`} className={styles.opcao} style={{ backgroundColor: '#FFF', color: '#000' }}>Cancelar</Link>
          <button className={styles.opcao} style={{ backgroundColor: '#7C0B0B' }}>Confirmar</button>
        </div>
      </form>
    </section>
  )
}
