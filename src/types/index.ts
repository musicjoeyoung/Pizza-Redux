export interface Pizza {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    ingredients: string[];
}

export interface CartItem {
    id: number;
    quantity: number;
    name: string;
    price: number;
}

export interface RootState {
    cart: {
        items: CartItem[];
    };
}