import { useState } from 'react';

import styles from './App.module.scss';

function App() {
  const [arrayOfItems, setArrayOfItems] = useState([]);
  const [newItem, setNewItem] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    setArrayOfItems((prevArray) => {
      return [...prevArray, newItem];
    });
    setNewItem('');
  };

  const changeHandler = (e) => {
    setNewItem(e.target.value);
  };

  const deleteListItem = (item) => {
    setArrayOfItems((list) => {
     return list.filter((listItem) => listItem !== item);
    });
  };

  const ShoppingList = () => {
    return(
      <section className={styles.shoppingListSection}>
        <h2>Your Shopping List</h2>
        <ul>
          {arrayOfItems.map((item, index) => {
            return (
              <li key={index}>
                <div>
                  <span>{item}</span>
                  <button type="button" onClick={() => deleteListItem(item)}>X</button>
                </div>
              </li>
            )
          })}
        </ul>
      </section>
    )
  }
 
  return (
    <main className={styles.wholeAppComponent}>
      <section className={styles.addItemSection}>
        <h1>Items to buy</h1>
        <form onSubmit={submitHandler} className={styles.formElement}>
          <input type='text' value={newItem} placeholder='Add a new item' onChange={changeHandler} required/>
          <br/>
          <button>Add</button>
        </form>
      </section>
      {arrayOfItems.length > 0 && <ShoppingList/>}
    </main>
  );
}

export default App;
