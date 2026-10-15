/** @fileoverview Soluzioni degli esercizi (snacks). */

console.log('De-commenta i tests di questo file per verificare le soluzioni');

// CODE QUESTION 1
const hamburger = { name: 'Cheese Burger', weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

// console.log(hamburger.name); // 'Double Cheese Burger'
// console.log(secondBurger.name); // 'Double Cheese Burger'

/*
Risposte:
- 'Double Cheese Burger' in entrambi i log.
- 1 solo oggetto e' stato creato in memoria.

Essendo un reference type, l'oggetto hamburger viene copiato per riferimento quando viene assegnato a `secondBurger`. Abbiamo quindi 1 solo oggetto in memoria, e qualsiasi modifica fatta tramite `secondBurger` si riflette anche su `hamburger`.
*/
