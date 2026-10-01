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
  it("Sulfuras, étant un objet légendaire, n'a pas de date de péremption et ne perd jamais en qualité (quality)", () =>{
    const item1 = new Item('Sulfuras, Hand of Ragnaros', 0, 80);
    const item2 = new Item('Sulfuras, Hand of Ragnaros', 0, 80);
    const gildedRose = new GildedRose([item1]);

    expect(gildedRose.updateQuality()).toStrictEqual([item2]);
  });
  it("Backstage passes  to a TAFKAL80ETC concert, comme le Aged Brie, augmente sa qualité (quality) plus le temps passe (sellIn) ; La qualité augmente de 2 quand il reste 10 jours ou moins et de 3 quand il reste 5 jours ou moins, mais la qualité tombe à 0 après le concert.", () =>{
    

    //entre 10 et 5 jour
    const item1 = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 48);
    const item2 = new Item('Backstage passes to a TAFKAL80ETC concert', 9, 50);
    const gildedRose = new GildedRose([item1]);
    expect(gildedRose.updateQuality()).toStrictEqual([item2]);



    //entre j-5 et jour j
    const item3 = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 47);
    const item4 = new Item('Backstage passes to a TAFKAL80ETC concert', 4, 50);
    const gildedRose1 = new GildedRose([item3]);
    expect(gildedRose1.updateQuality()).toStrictEqual([item4]);

    //post show
    const item5 = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 48);
    const item6 = new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0);
    const gildedRose2 = new GildedRose([item5]);
    expect(gildedRose2.updateQuality()).toStrictEqual([item6]);

  });
});
