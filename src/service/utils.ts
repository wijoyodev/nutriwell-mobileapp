const groupBy = (list: any[], keyGetter: (x: any) => any) => {
  const map = new Map();
  list.forEach(item => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
};

const getPriceString = (price: number) => {
  return `Rp${price.toLocaleString('id-ID')}`;
};

const Utils = {
  groupBy,
  getPriceString,
}

export default Utils;
