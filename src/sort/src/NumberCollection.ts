export class NumberCollection {
    constructor(public data:number[]) {
    }
   get length():number{
       return  this.data.length;
    }
    compare(left:number, right:number):boolean{
       return this.data[left] < this.data[right];
    }
    swap(left:number, right:number):void{
        const temp = this.data[left];
        this.data[left] = this.data[right];
        this.data[right] = temp;
    }
}
