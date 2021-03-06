import dataParser from './dataParser';

//0  1    2    3      4      5      6         7    8
export const socializeCsvString = `Id,Text,Type,Next 1,Next 2,Next 3,Happiness,Days,Funding,Check,Yes,No
0,Board Game Night,TASK,1,,,,,,,,
1,Which game would you like to play?,DILEMMA,2,4,6,,,,,,
2,Monopoly,OPTION,3,,,,-1,,,,
3,You had a fun evening with your team without talking too much about your startup.,RESULT,,,,1,,,,,
4,Jumanji,OPTION,5,,,,-1,,,,
5,Your team got sucked into the Jumanji World and spent a long time before solving the game. But meeting Robin Williams was the highlight of the year.,RESULT,,,,3,-20,,,,
6,Cards Against Humanity,OPTION,7,,,,-1,,,,
7,"""Instead of presents, Santa Claus will now give kids _____""",DILEMMA,8,9,10,,,,,,
8,15 minutes of humiliation on X-Factor ,OPTION,11,,,,,,,,
9,His collection of nails,OPTION,11,,,,,,,,
10,A PowerPoint Presentation,OPTION,11,,,,,,,,
11,"No matter how dark your humour is, your team always laughs. Good for you!",RESULT,,,,1,,,,,
12,Activity Day,TASK,13,,,,,,,,
13,What's the priority?,DILEMMA,14,20,,,,,,,
14,It's all about the fun.,OPTION,15,,,,,,,,
15,What activity to choose?,DILEMMA,16,17,18,,,,,,
16,Go do some outdoor climbing and abseiling,OPTION,19,,,,-2,-500,,,
17,Sign up for a cocktail course.,OPTION,19,,,,-2,-250,,,
18,Go play laser tag.,OPTION,19,,,,-2,-400,,,
19,Wow. You managed to not talk work related stuff for a full day!,RESULT,,,,1,,,,,
20,Teamwork and personal development is key.,OPTION,21,,,,,,,,
21,What activity to choose?,DILEMMA,22,23,,,,,,,
22,4 day survival course,OPTION,24,,,,-4,-800,,,
23,Mindfullness and Meditation,OPTION,25,,,,-2,-200,,,
24,You feel like Bear Grylls!,RESULT,,,,2,,,,,
25,NAMASTE,RESULT,,,,1,,,,,
26,Host a friday bar,TASK,27,,,,,,,,
27,Choose a theme for your bar,DILEMMA,28,30,32,,,,,,
28,Game of Thrones theme party,OPTION,29,,,,,-100,,,
29,HODOR!,RESULT,,,,1,,,,,
30,Oktober Fest,OPTION,31,,,,,-100,,,
31,PROST!,RESULT,,,,1,,,,,
32,Champagne and oysters,OPTION,33,,,,,-300,,,
33,Santé,RESULT,,,,2,,,,,
`

const socializeTasks = dataParser(socializeCsvString);

export default socializeTasks;
