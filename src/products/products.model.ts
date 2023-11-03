/* eslint-disable prettier/prettier */
export class Product {
    id: string;
    title: string;
    description: string;
    price: number;
    constructor (id: string,
        title: string,
        desc: string,
        price: number){
            this.description =desc, this.id = id, this.title =title, this.price =price
        };
}