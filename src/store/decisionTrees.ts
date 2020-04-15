import papaparse from 'papaparse';
import { Task, Tasks } from "./taskActions";

export const funding: Task[] = [
    {name: "Founders Funding", type: Tasks.TASK, dilemma: null as any },
    {name: "FFF Funding (Friends, Family and Fools)", type: Tasks.TASK, dilemma: null as any },
    {name: "Business Angel", type: Tasks.TASK, dilemma: null as any },
]

export const csvString = `Id,Text,Type,Next 1,Next 2,Next 3,Happiness,Days,Funding
0,Founders Funding,TASK,1,,,,,
1,How much money should each founder contribute with?,DILEMMA,2,3,4,,,
2,Each founder should contribute with $1000 adding up to $3000 in total,OPTION,5,,,,1,
5,You agree on $1000 each,RESULT,,,,,,3000
3,Each founder should contribute with $1500 adding up to $4500 in total,OPTION,6,,,,1,
6,You agree on $1500 each,RESULT,,,,,,4500
4,Each founder should contribute with $2500 adding up to $7500 in total,OPTION,7,,,,1,
7,Your fellow co-founders think it’s way too much. What do you do?,DILEMMA,8,9,,,,
8,Push through. We need the money,OPTION,10,,,,,
10,It quickly turns into a loud and messy argument. You’ll have to settle on $1000 each founder,RESULT,,,,-2,,3000
9,Try to push back and settle on $1500 per founder,OPTION,11,,,,,
11,You only just managed to avoid a big argument and settle on $1500,RESULT,,,,-1,,4500`

