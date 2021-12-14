import React from 'react';
import axios from 'axios';
import { useCart } from '../../hooks/useCart';

import styles from './Drawer.module.scss';


function Drawer({ onClose, onRemove, items = [], opened }) {

  
  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''} ` }>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Корзина
           <button onClick={onClose} type="button" class="btn btn-outline-primary">X</button>
        </h2>

        {items.length > 0 &&(
          <div className="d-flex flex-column flex">
            <div className="items flex">
              {items.map((obj) => (
                <div key={obj.id} className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"></div>

                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <button onClick={() => onRemove(obj.id)} type="button" className="btn btn-outline-dark">X</button>
                </div>
              ))}
            </div>
          </div>
        ) }
      </div>
    </div>
  );
}

export default Drawer;
