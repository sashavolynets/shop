import React from 'react';

import Card from '../components/Card/Card';

function Home({
  items,
  searchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading,
}) {
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <div className="content p-40">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand m-20">{searchValue ? `Пошук за запитом: "${searchValue}"` : 'Всі кросовки'}</a>
          <form className="d-flex">
          <input className="form-control me-2" onChange={onChangeSearchInput} value={searchValue} type="search" placeholder="Search" aria-label="Search"/>
          </form>
        </div>
        <div className="d-flex flex-wrap">{renderItems()}</div>
      </nav>
    </div>
  );
}

export default Home;
