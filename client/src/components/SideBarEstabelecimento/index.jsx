import { BiRestaurant } from 'react-icons/bi';
import { BsGraphUp } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { MdFoodBank, MdDiscount } from 'react-icons/md';
import { LiaUserCircle } from 'react-icons/lia';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import styles from './SideBarEstabelecimento.module.css'
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function SideBar({ children, nome, id, dentroDoEstabelecimento }) {
  const [selecionado, setSelecionado] = useState(false);

  const alternar = () => setSelecionado(!selecionado);

  const menuItem = [
    {
      path: `estabelecimento/${id}/pedidos`,
      name: 'Pedidos',
      icon: <BiRestaurant />
    },
    {
      path: `estabelecimento/${id}/estoque`,
      name: 'Estoque',
      icon: <MdFoodBank/>
    },
    {
      path: `estabelecimento/${id}/graficos`,
      name: 'Gráficos',
      icon: <BsGraphUp />
    },
    {
      path: `estabelecimento/${id}/promocoes`,
      name: 'Promoções',
      icon: <MdDiscount/>
    },
    {
      path: `estabelecimento/${id}/funcionarios`,
      name: 'Funcionários',
      icon: <LiaUserCircle />
    },
  ];

  return (
    <div className={styles.container}>
      <div style={{ width: selecionado ? '300px' : '50px' }} className={styles.sidebar}>
        <div className={styles.sessao_top}>
          <h1 style={{ display: selecionado ? 'block' : 'none' }} className={styles.logo}>{nome}</h1>
          <div style={{ marginLeft: selecionado ? '30px' : '0px' }} className={styles.bars}>
            <FaBars onClick={alternar}/>
          </div>
        </div>
        <div className={styles.link_container}>
          {menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className={styles.link}>
              <div className={styles.icone}>{item.icon}</div>
              <div style={{ display: selecionado ? 'block' : 'none' }} className={styles.link_texto}>{item.name}</div>
            </NavLink>
          ))}
          <Link onClick={() => {window.location.href = '/estabelecimentos'; dentroDoEstabelecimento = false}} className={styles.link}>
            <div className={styles.icone}><AiOutlineArrowLeft/></div>
            <div style={{ display: selecionado ? 'block' : 'none' }} className={styles.link_texto}>Deixar restaurante</div>
          </Link>
        </div>
      </div>
      <main>{children}</main>
    </div>
  )
}
