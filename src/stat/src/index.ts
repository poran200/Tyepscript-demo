import {MatchReader} from "./MatchReader";
import {Summary} from "./Summary";

const matchReader = MatchReader.fromCsv('src/football.csv');
const consoleReport = Summary.winAnalysisWithConsoleReport('Liverpool');
matchReader.load();
consoleReport.buildReportAndPrint(matchReader.matchData);
