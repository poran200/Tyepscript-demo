interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
}
interface Reportable {
    summary(): string;
}
const oldCivic={
    name: "civic",
    year: 200,
    broken: false,
    summary():string{
        return `The name of car ${this.name}`;
    }

}

const printCivic =(vehicle: Vehicle)=>{
    console.log(vehicle);
}
const printSummary =(item:Reportable): void =>{
    console.log(item.summary());
}

printCivic(oldCivic);
printSummary(oldCivic);

