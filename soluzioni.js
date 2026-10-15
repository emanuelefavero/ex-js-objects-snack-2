/** @fileoverview Soluzioni degli esercizi (snacks). */

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
