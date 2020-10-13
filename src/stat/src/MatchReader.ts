import {MatchResult} from "./MatchResult";
import {dateStringToDate} from "./utils";
import {MatchData} from "./MatchData";
import {CsvFileReader} from "./CsvFileReader";

interface DataReader {
    read():void;
    data:string[][];
}


export class MatchReader  {
    matchData: MatchData[] = [];
    constructor(public reader:DataReader) {
    }
    static fromCsv(filename:string):MatchReader {
        return new MatchReader(new CsvFileReader(filename));
    }
    load():void{
        this.reader.read();
       this.matchData = this.reader.data
        .map((row:string[]):MatchData =>{
           return [
               dateStringToDate(row[0]),
               row[1],
               row[2],
               parseInt(row[3]),
               parseInt(row[4]),
               row[5] as MatchResult,
               row[6]
           ];
        });
    }

}
