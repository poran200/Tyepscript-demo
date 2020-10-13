import {MatchData} from "./MatchData";
import {WinsAnalyzer} from "./analyzer/WinsAnalyzer";
import {HtmlReport} from "./outputTarget/HtmlReport";
import {ConsoleReport} from "./outputTarget/ConsoleReport";

export interface Analyzer {
  run(matches:MatchData[]):string;
}

export interface OutputTarget {
    print(report:string):void;
}
export class Summary{
    constructor(public analyzer:Analyzer,public outputTarget:OutputTarget) {}
    static winAnalysisWithHtmlReport(teamName:string):Summary{
       return  new Summary(new WinsAnalyzer(teamName),new HtmlReport());
    }
    static winAnalysisWithConsoleReport(teamName:string):Summary{
        return  new Summary(new WinsAnalyzer(teamName),new ConsoleReport());
    }
    buildReportAndPrint(matches:MatchData[]):void{
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }

}
