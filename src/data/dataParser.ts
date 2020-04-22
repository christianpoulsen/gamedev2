import papaparse from 'papaparse';
import { Task, Tasks, Dilemma, Option, Result, StateCheck, SupportedChecks, Check } from "../store/taskActions";

export const dataParser = (csvString: string) => {

    const parsedData = papaparse.parse(csvString).data;

    const headers: string[] = parsedData[0];

    const arrayToJson = (row: string[]) => {
        const json: { [key: string]: string } = {};
        row.forEach((val, i) => json[headers[i]] = val);
        return json;
    }

    const tasks: Array<{ [key: string]: string }> = parsedData.filter((row: string[]) => row[2] === Tasks.TASK).map(arrayToJson);
    const dilemmas: Array<{ [key: string]: string }> = parsedData.filter((row: string[]) => row[2] === Tasks.DILEMMA).map(arrayToJson);
    const options: Array<{ [key: string]: string }> = parsedData.filter((row: string[]) => row[2] === Tasks.OPTION).map(arrayToJson);
    const results: Array<{ [key: string]: string }> = parsedData.filter((row: string[]) => row[2] === Tasks.RESULT).map(arrayToJson);
    const stateChecks: Array<{ [key: string]: string }> = parsedData.filter((row: string[]) => row[2] === Tasks.STATECHECK).map(arrayToJson);

    const checkSupportedCheck = (stateCheck: string): Check => {
        switch (stateCheck) {
            case SupportedChecks.REGISTERED_COMPANY:
                return stateCheck;
            case SupportedChecks.RIGHT_VP:
                return stateCheck;
            default:
                throw (new Error(`The following kind of state check is not supported: ${stateCheck}`))
        }
    }

    const getStateCheck = (id: string): StateCheck => {
        console.log("Get Result", id);
        const stateCheck = stateChecks.find(json => json["Id"] === id);

        if (stateCheck) {
            const yesDilemma = dilemmas.find(json => json["Id"] === stateCheck["Yes"]);
            const yesResult = results.find(json => json["Id"] === stateCheck["Yes"]);
            const yes = yesDilemma ? getDilemma(yesDilemma["Id"]) : yesResult ? getResult(yesResult["Id"]) : undefined;
            if (!yes) throw (new Error(`Couldn't find the Yes of StateCheck by Id: ${id}`));

            const noDilemma = dilemmas.find(json => json["Id"] === stateCheck["No"]);
            const noResult = results.find(json => json["Id"] === stateCheck["No"]);
            const no = noDilemma ? getDilemma(noDilemma["Id"]) : noResult ? getResult(noResult["Id"]) : undefined;
            if (!no) throw (new Error(`Couldn't find the No of StateCheck by Id: ${id}`));

            return {
                id: stateCheck["Id"],
                type: Tasks.STATECHECK,
                check: checkSupportedCheck(stateCheck["Check"]),
                yes: yes,
                no: no,
            } as StateCheck
        } else throw (new Error(`Couldn't find the StateCheck by Id: ${id}`))
    }

    const getResult = (id: string): Result => {
        console.log("Get Result", id);
        const result = results.find(json => json["Id"] === id);

        

        if (result) {
            return {
                id: result["Id"],
                text: result["Text"],
                type: Tasks.RESULT,
                consequence: {
                    happiness: Number(result["Happiness"]),
                    days: Number(result["Days"]),
                    funding: Number(result["Funding"])
                },
            } as Result
        } else throw (new Error(`Couldn't find the Result by Id: ${id}`))
    }

    const getOption = (id: string): Option => {
        console.log("Get Option", id);
        const option = options.find(json => json["Id"] === id);

        if (option) {
            const dilemma = dilemmas.find(json => json["Id"] === option["Next 1"]);
            const result = results.find(json => json["Id"] === option["Next 1"]);
            const stateCheck = stateChecks.find(json => json["Id"] === option["Next 1"]);

            const next: Dilemma | Result | StateCheck | undefined = dilemma ? getDilemma(dilemma["Id"]) : result ? getResult(result["Id"]) : stateCheck ? getStateCheck(stateCheck["Id"]) : undefined;

            if (!next) throw (new Error(`Couldn't find Next of Option by Id: ${id}`));

            return {
                id: option["Id"],
                text: option["Text"],
                type: Tasks.OPTION,
                consequence: {
                    happiness: Number(option["Happiness"]),
                    days: Number(option["Days"]),
                    funding: Number(option["Funding"])
                },
                next: next,
            } as Option
        } else throw new Error((`Couldn't find the Option by Id: ${id}`))
    }

    const getDilemma = (id: string): Dilemma => {
        console.log("Get Dilemma", id);
        const dilemma = dilemmas.find(json => json["Id"] === id);

        if (dilemma) {
            const optionIds = [ dilemma["Next 1"], dilemma["Next 2"], dilemma["Next 3"] ].filter(v => v);
            return {
                id: dilemma["Id"],
                text: dilemma["Text"],
                type: Tasks.DILEMMA,
                options: optionIds.map(oId => getOption(oId)),
            } as Dilemma
        } else {
            throw (new Error(`Couldn't find the Dilemma by Id: ${id}`))
        }
    }

    const dataTree: Task[] = tasks.map(json => ({
        id: json["Id"],
        text: json["Text"],
        type: Tasks.TASK,
        dilemma: getDilemma(json["Next 1"]),
    }))

    return dataTree;
}

export default dataParser;
