export interface Product{
    id? : number,
    Name? : string,
    type? : string,
    mfg? : Date,
    createdAt? : Date,
    updatedAt? : Date,
    publishedAt? : Date,
}

export interface ProductEntry<T>{
    id? : number,
    attributes : T;
}