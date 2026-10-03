export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  addQuality(item:Item):void{
    item.quality +=1;
  }

  downQuality(item:Item):void{
    item.quality -=1;
  }

  updateQuality():Array<Item>{
    const passes="Backstage passes to a TAFKAL80ETC concert";
    const sulfuras="Sulfuras, Hand of Ragnaros";
    const agedBrie="Aged Brie";
    const maxQuality = 50;
    const minQuality = 0;

    for (let item of this.items) {
      if (item.name != sulfuras) { item.sellIn -= 1; }
      if ( item.name != agedBrie && item.name != passes && item.name != sulfuras ) {
        if (item.quality > minQuality) {
          this.downQuality(item);
          if (item.sellIn < 0 && item.quality > minQuality) {this.downQuality(item);}
        }
      } else {
        if (item.quality <= maxQuality) {
          if (item.name === agedBrie) {
            if (item.quality < maxQuality) { this.addQuality(item); }
            if (item.sellIn < 0 && item.quality < maxQuality) { this.addQuality(item); }
          }
          
          if (item.name === passes) {
            if ( item.sellIn < 0 ) {
              item.quality = minQuality;
            } else {
              if (item.quality < maxQuality) { this.addQuality(item); }
              if (item.sellIn < 10 && item.quality < maxQuality) { this.addQuality(item); }
              if (item.sellIn < 5 && item.quality < maxQuality) { this.addQuality(item); }
            }
          }
          
        }
      }
      
    }

    return this.items;
  }
}
