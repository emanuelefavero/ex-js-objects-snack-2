/** @fileoverview Soluzioni degli esercizi (snacks). */

import { deepClone as deepCloneAdvanced } from './deepCloneAdvanced.js';

console.log('De-commenta i tests di questo file per verificare le soluzioni');

// CODE QUESTION 1
{
  const hamburger = { name: 'Cheese Burger', weight: 250 };
  const secondBurger = hamburger;
  secondBurger.name = 'Double Cheese Burger';
  secondBurger.weight = 500;

  // console.log(hamburger.name); // Double Cheese Burger
  // console.log(secondBurger.name); // Double Cheese Burger
}
/*
- Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
- Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

RISPOSTE:
- Double Cheese Burger in entrambi i log.
- 1 solo oggetto e' stato creato in memoria.

Nota: Essendo un reference type, l'oggetto hamburger viene copiato per riferimento quando viene assegnato a `secondBurger`. Abbiamo quindi 1 solo oggetto in memoria, e qualsiasi modifica fatta tramite `secondBurger` si riflette anche su `hamburger`.
*/

// CODE QUESTION 2
{
  const hamburger = {
    name: 'Cheese Burger',
    weight: 250,
    ingredients: ['Cheese', 'Meat', 'Bread', 'Tomato'],
  };

  const secondBurger = { ...hamburger };
  secondBurger.ingredients[0] = 'Salad';

  // console.log(hamburger.ingredients[0]); // Salad
  // console.log(secondBurger.ingredients[0]); // Salad
}
/*
- Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
- Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

RISPOSTE:
- Salad in entrambi i log.
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
- 3 oggetti: `hamburger`, `secondBurger` e l'array `ingredients` condiviso.

Nota: `secondBurger` è una copia superficiale di `hamburger`, quindi condivide lo stesso array `ingredients`. Gli array in JavaScript sono oggetti e vengono copiati per riferimento.
*/

// CODE QUESTION 3
{
  const hamburger = {
    name: 'Cheese Burger',
    weight: 250,
    maker: {
      name: 'Anonymous Chef',
      restaurant: {
        name: "Hyur's Burgers",
        address: 'Main Street, 123',
        isOpen: true,
      },
      age: 29,
    },
  };

  const secondBurger = structuredClone(hamburger);
  const thirdBurger = structuredClone(hamburger);
}
/*
- Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

RISPOSTA:
- 3 oggetti principali: `hamburger`, `secondBurger`, `thirdBurger` + tutti i loro sotto-oggetti `maker` e `restaurant`. In tutto 9 oggetti.

Nota: `secondBurger` e `thirdBurger` sono copie profonde dell'oggetto `hamburger`, quindi i loro sotto-oggetti non sono condivisi in memoria.
*/

// CODE QUESTION 4
{
  const chef = {
    name: 'Chef Hyur',
    age: 29,
    makeBurger: (num = 1) => {
      console.log(`Ecco ${num} hamburger per te!`);
    },
  };

  const restaurant = {
    name: "Hyur's Burgers",
    address: {
      street: 'Main Street',
      number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
  };
}
/*
- Qual è il metodo migliore per clonare l’oggetto chef, e perché?
- Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?

RISPOSTE:
- shallow copy con lo spread operator, perché chef è un oggetto semplice (un solo livello) e contiene una funzione.
- deep copy con `structuredClone`, perché restaurant contiene oggetti annidati e un oggetto complesso `Date`.

Nota: La shallow copy con spread operator mantiene le funzioni intatte. La deep copy con `structuredClone` mantiene gli oggetti complessi come `Date`, al contrario di `JSON.stringify`/`JSON.parse` che li trasformerebbe in stringhe.
*/

// CODE QUESTION 5
{
  const hamburger = {
    name: 'Cheese Burger',
    weight: 250,
    maker: {
      name: 'Anonymous Chef',
      restaurant: {
        name: "Hyur's Burgers",
        address: 'Main Street, 123',
        isOpen: true,
      },
      age: 29,
    },
  };

  const newRestaurant = { ...hamburger.maker.restaurant };
  newRestaurant.name = "Hyur's II";
  newRestaurant.address = 'Second Street, 12';
  const secondBurger = { ...hamburger };
  secondBurger.maker.restaurant = newRestaurant;
  secondBurger.maker.name = 'Chef Hyur';

  // console.log(hamburger.maker.name); // Chef Hyur
  // console.log(secondBurger.maker.name); // Chef Hyur
  // console.log(hamburger.maker.restaurant.name); // Hyur's II
  // console.log(secondBurger.maker.restaurant.name); // Hyur's II
}
/*
- Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
- Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

RISPOSTE:
- Chef Hyur per i primi due log, Hyur's II per gli ultimi due. Il motivo principale e' che abbiamo usato una shallow copy per `secondBurger`, quindi l'oggetto `maker` è condiviso tra `hamburger` e `secondBurger`, mentre l'oggetto `restaurant` è stato copiato separatamente.
- `hamburger`, `newRestaurant`, `secondBurger` come oggetti principali + `maker` e `restaurant` come sotto-oggetti. In totale 5 oggetti.

Nota: La shallow copy con lo spread operator copia solo il primo livello dell'oggetto. Gli oggetti annidati rimangono condivisi tra l'originale e la copia.
*/

// CODE QUESTION 5
{
  const chef = {
    name: 'Chef Hyur',
    age: 29,
    makeBurger: (num = 1) => {
      console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
      name: "Hyur's Burgers",
      welcomeClient: () => {
        console.log('Benvenuto!');
      },
      address: {
        street: 'Main Street',
        number: 123,
        showAddress: () => {
          console.log('Main Street 123');
        },
      },
      isOpen: true,
    },
  };

  // Funzione ricorsiva per clonare profondamente un oggetto
  const deepClone = obj => {
    if (obj === null || typeof obj !== 'object') return obj;

    if (Array.isArray(obj)) return obj.map(deepClone);

    const clonedObj = {};
    for (const key in obj) clonedObj[key] = deepClone(obj[key]);

    return clonedObj;
  };

  // const clonedChef = deepClone(chef);
  // console.log(clonedChef);
}
/*
- Qual è il metodo migliore per clonare l’oggetto chef, e perché?

RISPOSTA:
- Considerando che questo oggetto contiene proprietà annidate e metodi, il metodo migliore per clonarlo sarebbe utilizzare una deep copy con una funzione ricorsiva o una libreria che supporti la clonazione profonda, come `lodash.cloneDeep`.

Nota: `structuredClone` non copia le funzioni, mentre lo spread operator copia solo il primo livello e non ottimale per oggetti annidati.
*/

// SNACK (Bonus)
{
  // Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni). Usa l’oggetto di Code Question 6 come test.
  // Tip: Serve usare una funzione ricorsiva!

  const deepClone = obj => {
    if (obj === null || typeof obj !== 'object') return obj;

    const clone = Array.isArray(obj) ? [] : {};

    for (const key of Object.keys(obj)) clone[key] = deepClone(obj[key]);

    return clone;
  };

  // const chef = {
  //   name: 'Chef Hyur',
  //   age: 29,
  //   makeBurger: (num = 1) => {
  //     console.log(`Ecco ${num} hamburger per te!`);
  //   },
  //   restaurant: {
  //     name: "Hyur's Burgers",
  //     welcomeClient: () => {
  //       console.log('Benvenuto!');
  //     },
  //     address: {
  //       street: 'Main Street',
  //       number: 123,
  //       showAddress: () => {
  //         console.log('Main Street 123');
  //       },
  //     },
  //     isOpen: true,
  //     openingDate: new Date(2025, 3, 11),
  //   },
  // };

  // // Clonazione profonda ricorsiva semplice
  // const clonedChef = deepClone(chef);
  // console.log(clonedChef);

  // // Clonazione profonda ricorsiva che gestisce anche oggetti complessi
  // const clonedChefAdvanced = deepCloneAdvanced(chef);
  // console.log(clonedChefAdvanced);
}
/*
Steps della funzione deepClone:
1. Controlla se l'oggetto è null o non è di tipo 'object'. In tal caso, restituisci l'oggetto stesso.
2. Se l'oggetto è un array, crea un array vuoto; altrimenti, crea un oggetto vuoto.
3. Itera su tutte le chiavi dell'oggetto originale e assegna a ciascuna chiave del clone il risultato della chiamata ricorsiva a deepClone sul valore corrispondente.
4. Restituisci l'oggetto clonato.
*/
