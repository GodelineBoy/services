export class Cocktails {
        
    name: string 
    price: string 
    img: string 

    constructor(public valName: string, valPrice: string, valImg: string){
        this.name = valName
        this.price = valPrice
        this.img = valImg
    }
}