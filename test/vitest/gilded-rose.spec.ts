import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('Créer la taverne avec un stock', () => {
    const item1 = new Item('foo', 0, 0);
    const gildedRose = new GildedRose([item1]);
    
    expect(gildedRose.updateQuality()).toStrictEqual([item1]);
  });
  it("Temps avant la date de péremption de l'article qui diminue", () =>{
    const item1 = new Item('foo', 10, 50);
    const item2 = new Item('foo', 9, 49);
    const gildedRose = new GildedRose([item1]);

    expect(gildedRose.updateQuality()).toStrictEqual([item2]);
  });
  it("Qualité de l'article qui diminue", () =>{
    const item1 = new Item('foo', 10, 50);
    const item2 = new Item('foo', 9, 49);
    const gildedRose = new GildedRose([item1]);

    expect(gildedRose.updateQuality()).toStrictEqual([item2]);
  });
  it("Une fois que la date de péremption est passée, la qualité se dégrade deux fois plus rapidement.", () =>{
    const item1 = new Item('foo', 0, 50);
    const item2 = new Item('foo', -1, 48);
    const gildedRose = new GildedRose([item1]);

    expect(gildedRose.updateQuality()).toStrictEqual([item2]);
  });
  it("La qualité (quality) d'un produit ne peut jamais être négative.", () =>{
    const item1 = new Item('foo', 0, 0);
    const item2 = new Item('foo', -1, 0);
    const gildedRose = new GildedRose([item1]);

    expect(gildedRose.updateQuality()).toStrictEqual([item2]);
  });
  it("Aged Brie augmente sa qualité (quality) plus le temps passe.", () =>{
    const item1 = new Item('Aged Brie', 15, 0);
    const item2 = new Item('Aged Brie', 14, 1);
    const gildedRose = new GildedRose([item1]);

    expect(gildedRose.updateQuality()).toStrictEqual([item2]);
  });
  it("La qualité d'un produit n'est jamais de plus de 50.", () =>{
    const item1 = new Item('Aged Brie', 15, 50);
    const item2 = new Item('Aged Brie', 14, 50);
    const gildedRose = new GildedRose([item1]);

    expect(gildedRose.updateQuality()).toStrictEqual([item2]);
  });
});
