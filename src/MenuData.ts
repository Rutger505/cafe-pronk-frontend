export interface CategoryData {
  id: number;
  name: string;
  dishes: DishData[];
}

export interface DishData {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface BasketMenuItemData {
  item: DishData;
  quantity: number;
}
