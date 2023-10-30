import { useState } from 'react';
import styles from './CriaEstabelecimento.module.css';
import { Link } from 'react-router-dom';

export default function CriaEstabelecimento() {

  const [inputs, setInputs] = useState({
    nome: '',
    endereco: '',
    descricao: ''
  });

  const { nome, endereco, descricao } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  const inputVazio = (valor) => {
    return /^\s*$/.test(valor);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (inputVazio(nome) || inputVazio(endereco) || inputVazio(descricao)) {
      alert('Um ou mais campos estão vazios.');
      return;
    }

    try {

      const body = { nome, endereco, descricao };
      // let token = localStorage.token
      const response = await fetch('http://localhost:5000/estabelecimento/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'token': localStorage.token },
        body: JSON.stringify(body)
      });

      // eslint-disable-next-line
      const parseRes = await response.json();

      window.location.href = '/estabelecimentos';

    } catch (err) {
      console.error(err.message);
    }
  }
  return (
    <section className={styles.container}>
      <h1 className={styles.titulo}>Criar estabelecimento</h1>
      <form className={styles.form} onSubmit={e => onSubmitForm(e)}>

        <label>Nome do estabelecimento<strong style={{ color: 'red' }}>*</strong></label>
        <input type='text' className={styles.input} name={'nome'} value={nome} onChange={e => onChange(e)} />

        <label>Endereço<strong style={{ color: 'red' }}>*</strong></label>
        <input type='text' className={styles.input} placeholder='Rua/Avenida...' name={'endereco'} value={endereco} onChange={e => onChange(e)} />

        <label>Descrição<strong style={{ color: 'red' }}>*</strong></label>
        <input type='text' className={styles.input} style={{ padding: '50px 10px', fontSize: 15 }} placeholder='Coloque sobre seu lugar para todos verem!' name={'descricao'} value={descricao} onChange={e => onChange(e)} />

        <div className={styles.opcoes}>
          <Link to='/estabelecimentos' className={styles.opcao} style={{ backgroundColor: '#FFF', color: '#000' }}>Cancelar</Link>
          <button className={styles.opcao} style={{ backgroundColor: '#7C0B0B' }}>Confirmar</button>
        </div>
      </form>
    </section>
  );
}