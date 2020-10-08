import * as faker from "faker";

export class Company {
    companyName:string;
    catchParches:string;
    location:{
        lat:number;
        lng:number;
    }
    constructor() {
        this.companyName = faker.company.companyName();
        this.catchParches = faker.company.catchPhrase();
        this.location ={
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
    markerContent():string{
        return `Company name : ${this.companyName} `;
    }
}
