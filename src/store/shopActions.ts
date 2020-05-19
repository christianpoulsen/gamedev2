import { Action } from 'redux';
import { Consequence } from './taskActions';

import CoffeeBreewerPng from '../assets/Coffee_Breewer.png';
import SolderingPng from '../assets/Soldering.png';
import FridgePng from '../assets/Fridge.png';

// actions

export const BUY = "BUY";

// other constants

export interface ShopThings {
    readonly COFFEE: "COFFEE";
    readonly SOLDERING: "SOLDERING";
    readonly FRIDGE: "FRIDGE";
}

export const shopThings: ShopThings = {
    COFFEE: "COFFEE",
    SOLDERING: "SOLDERING",
    FRIDGE: "FRIDGE",
}
export type ShopThing = keyof ShopThings;

export interface ShopOption {
    id: ShopThing;
    img: string;
    text: string;
    cons: Consequence;
}

export const initialShopOptions: ShopOption[] = [
    {id: shopThings.COFFEE, img: CoffeeBreewerPng, cons: { days: -2, funding: -500, happiness: 0 }, text: "Buy a coffee machine and increase the speed of sourcing components by 10%" },
    {id: shopThings.SOLDERING, img: SolderingPng, cons: { days: -2, funding: -1750, happiness: 0 }, text: "Buy a high power soldering station, a digital oscilloscope and speed up the hardware building process by 20%"},
    {id: shopThings.FRIDGE, img: FridgePng, cons: { days: -2, funding: -2500, happiness: 0}, text: "Buy a fridge and a pallet of sodas and energy drinks. It will speed up the coding process by 40%"}
];

// action types

export interface BuyAction extends Action {
    type: typeof BUY;
    shopThing: ShopThing
}

// action creators

export type BuyThing = (shopThing: ShopThing) => BuyAction;
export const buyThing: BuyThing = shopThing => ({
    type: BUY,
    shopThing
})