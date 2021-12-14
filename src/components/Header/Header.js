import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { useCart } from '../../hooks/useCart';

function Header(props) {
  const { totalPrice } = useCart();

  return (<div className={styles.color}>
  <nav className="m-40 navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/">
            <a class="nav-link active" aria-current="page" href="#">Головна</a>
          </Link>
        </li>
        <li class="nav-item">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="img/cart.svg" alt="Корзина" />
          <span>{totalPrice} руб.</span>
        </li>
        </li>
      </ul>
      <span class="navbar-text">
        Магазин
      </span>
    </div>
  </div>
</nav>
  </div>  
  );
}

export default Header;
