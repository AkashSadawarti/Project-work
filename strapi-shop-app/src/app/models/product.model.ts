export interface Product{
    id? : number,
    Name? : string,
    createdAt? : Date,
    updatedAt? : Date,
    publishedAt? : Date,
}

export interface ProductEntry<T>{
    id? : number,
    attributes : T;
}