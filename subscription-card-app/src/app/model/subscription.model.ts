import { Offer } from "./offer.model";

export interface Subscription{
    type : string,
    title : string,
    price : number,
    offers : Offer[]
}