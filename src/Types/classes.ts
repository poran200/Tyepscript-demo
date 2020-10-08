class Person {

    constructor(private _id: number,
                private  _name: string,
                private _age: number) {
        this._id = _id;
        this._name = _name;
        this._age = _age;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    protected walk():void{
        console.log(`walk : ${this.name}`);
    }
}

class Student extends Person  {

    constructor(id: number, name: string, age: number) {
        super(id, name, age);
    }

    healthPossess():void{
        this.walk();
    }
}

const student = new Student(123,"poran",32);
student.healthPossess();
student.age = 35;
console.log(student);
