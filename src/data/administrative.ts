import dataParser from './dataParser';

//0  1    2    3      4      5      6         7    8
export const administrativeCsvString = `Id,Text,Type,Next 1,Next 2,Next 3,Happiness,Days,Funding,Check,Yes,No
0,Register your company ,TASK,1,,,,,,,,
1,Do you need a lawyer to speed up the process?,DILEMMA,2,3,,,,,,,
2,Yes,OPTION,4,,,,-2,-1000,,,
3,"No, we will figure it out ourselves",OPTION,4,,,,-7,-100,,,
4,Your company has successfully been registered!,RESULT,,,,,,,,,
5,Name your company,TASK,6,,,,,,,,
6,What kind of name do you want?,DILEMMA,7,9,11,,,,,,
7,Generic name,OPTION,8,,,,,,,,
8,"The name has been chosen as ""Watch the  Watch Inc."" Do you want to trademark the name?",DILEMMA,16,18,,,,,,,
9,Fanciful name,OPTION,10,,,,,,,,
10,"The name has been chosen as ""Wantcherful watches"" Do you want to trademark the name?",DILEMMA,16,18,,,,,,,
11,Weird name,OPTION,12,,,,,,,,
12,"You pick the name ""X Æ A-12"". Do you want to trademark the name?",DILEMMA,13,14,,,,,,,
13,Yes,OPTION,15,,,,,,,,
14,No,OPTION,15,,,,,,,,
15,Elon Musk and Grimes threaten to sue you for using their son's name. You have to pick another name. ,RESULT,,,,,,,,,
16,"Yes, I believe it is important to protect the brand.",OPTION,17,,,,-2,-500,,,
17,Your company name has been created and successfully trademarked,RESULT,6,,,,,,,,
18,"No, I will wait until the company gets bigger.",OPTION,19,,,,,,,,
19,Congratulations. Your company has a name! ,RESULT,,,,,,,,,
20,Create website,TASK,21,,,,,,,,
21,Do you want to hire a web developer freelancer?,DILEMMA,22,26,,,,,,,
22,"No need, Vicki told us she really wants to give it a shot!",OPTION,23,,,2,-4,,,,
23,Is the right value proposition chosen?,STATECHECK,,,,,,,RIGHT_VP,24,25
24,"WOW! Vicki had the idea of placing a fake ""Pre order"" button on the website. Surprinsingly, the analytics tool shows that a lot of people have clicked on it! ",RESULT,,,,,,,,,
25,"Ouch! Vicki had the idea of placing a fake ""Pre order"" button on the website, but the analytics tool shows that nobody has clicked on it yet!",RESULT,,,,,,,,,
26,"Yes, let's leave Vicki with what she is already great at and hire a web developer",OPTION,27,,,-1,-2,-200,,,
27,You finally have your website up and running. Let's hope someone will visit it.,RESULT,,,,,,,,,`

const administrativeTasks = dataParser(administrativeCsvString);

export default administrativeTasks;