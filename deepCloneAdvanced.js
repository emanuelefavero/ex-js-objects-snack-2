/** @fileoverview Esempio di deepClone che gestisce anche oggetti complessi come Date, RegExp, Map, Set e riferimenti circolari */

export const deepClone = (obj, seen = new WeakMap()) => {
  // Primitivi e funzioni
  if (obj === null || typeof obj !== 'object') return obj;

  // Oggetti già clonati (riferimenti circolari)
  if (seen.has(obj)) return seen.get(obj);

  // Date
  if (obj instanceof Date) return new Date(obj.getTime());

  // RegExp
  if (obj instanceof RegExp) {
    const clone = new RegExp(obj.source, obj.flags);
    clone.lastIndex = obj.lastIndex;
    return clone;
  }

  // Map
  if (obj instanceof Map) {
    const clone = new Map();
    seen.set(obj, clone);

    for (const [key, value] of obj) {
      clone.set(deepClone(key, seen), deepClone(value, seen));
    }

    return clone;
  }

  // Set
  if (obj instanceof Set) {
    const clone = new Set();
    seen.set(obj, clone);

    for (const value of obj) {
      clone.add(deepClone(value, seen));
    }

    return clone;
  }

  // Array e oggetti
  const clone = Array.isArray(obj)
    ? []
    : Object.create(Object.getPrototypeOf(obj));

  seen.set(obj, clone);

  for (const key of Reflect.ownKeys(obj)) {
    const descriptor = Object.getOwnPropertyDescriptor(obj, key);

    if ('value' in descriptor) {
      descriptor.value = deepClone(descriptor.value, seen);
    }

    Object.defineProperty(clone, key, descriptor);
  }

  return clone;
};
