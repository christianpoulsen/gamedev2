import dataParser from './dataParser';

//0  1    2    3      4      5      6         7    8
export const fundingCsvString = `Id,Text,Type,Next 1,Next 2,Next 3,Happiness,Days,Funding,Check,Yes,No
0,Founders Funding,TASK,1,,,,,,,,
1,How much money should each founder contribute with?,DILEMMA,2,3,4,,,,,,
2,Each founder should contribute with $1000 adding up to $3000 in total,OPTION,5,,,,-1,,,,
5,You agree on $1000 each,RESULT,,,,,,3000,,,
3,Each founder should contribute with $1500 adding up to $4500 in total,OPTION,6,,,,-1,,,,
6,You agree on $1500 each,RESULT,,,,,,4500,,,
4,Each founder should contribute with $2500 adding up to $7500 in total,OPTION,7,,,,-1,,,,
7,Your fellow co-founders think it’s way too much. What do you do?,DILEMMA,8,9,,,,,,,
8,Push through. We need the money,OPTION,10,,,,,,,,
10,It quickly turns into a loud and messy argument. You’ll have to settle on $1000 each founder,RESULT,,,,-2,,3000,,,
9,Try to push back and settle on $1500 per founder,OPTION,11,,,,,,,,
11,You only just managed to avoid a big argument and settle on $1500,RESULT,,,,-1,,4500,,,
12,"FFF Funding (Friends, Family and Fools)",TASK,13,,,,,,,,
13,Who would you ask for to help fund your new venture?,DILEMMA,14,15,,,,,,,
14,Your family,OPTION,16,,,,-1,,,,
16,How much would you ask for?,DILEMMA,17,18,,,,,,,
17,$2500,OPTION,19,,,,,,,,
19,Your family wish you the best of luck and transfers the money to your account.,RESULT,,,,,,2500,,,
18,$5000,OPTION,20,,,,,,,,
20,They agree on one condition – you’ll have to carry out some gardening work for them?,DILEMMA,21,22,,,,,,,
21,You cannot waste valuable time on gardening work,OPTION,23,,,-1,,2500,,,
23,Your family are clearly disappointed with your decision. They’ll support you with $2500,RESULT,,,,,,,,,
22,You agree to help out in the garden,OPTION,24,,,,-5,,,,
24,"$5000 and a bit of bird song, fresh air and some exercise – what’s not to like",RESULT,,,,1,,5000,,,
15,Your 3 best friends,OPTION,25,,,,-1,,,,
25,How much would you like them to contribute?,DILEMMA,26,27,,,,,,,
26,$500 each friend. $1500 in total,OPTION,28,,,,,,,,
28,They wish you the best of luck and tell you that they hope you’ll still have time to hang out now and then,RESULT,,,,,,1500,,,
27,$1000 each friend. $3000 in total.,OPTION,29,,,,,,,,
29,They think that’s a little too much. They’ll do it if you swap with your playstation.,DILEMMA,30,31,,,,,,,
30,No way. You and your co-founders will continue to play video games when you have a break,OPTION,32,,,,,,,,
32,Your friends would still like to support your adventure and they all chip in with $250,RESULT,,,,,,750,,,
31,Alright. We will swap the Playstation and find something else to do in our breaks.,OPTION,33,,,,,,,,
33,Your co-founders are really not happy with your decision,RESULT,,,,-2,,3000,,,
34,Business Angel,TASK,35,,,,,,,,
35,Unfortunately you do not know any business angel. How will you get in contact with one?,DILEMMA,36,37,,,,,,,
36,Make a investor pitch deck and share it with business angle associations,OPTION,38,,,,-10,,,,
37,Pick up your phone and start cold calling business angels,OPTION,38,,,,-10,,,,
38,Has a company been registered?,STATECHECK,,,,,,,REGISTERED_COMPANY,39,40
39,A business angel is interested in meeting you for a 15 minues cup of coffee. If she’s interested in investing she would like around 20% ownership and she want you to prepare a valuation of the company. What’s your valuation?,DILEMMA,41,42,43,,,,,,
41,The company is valued around $50.000. She’ll have to pay $10.000 for 20%,OPTION,44,,,,,,,,
42,The company is valued around $250.000. She’ll have to pay $50.000 for 20%,OPTION,44,,,,,,,,
43,The company is valued around $750.000. She’ll have to pay $150.000 for 20%,OPTION,44,,,,,,,,
44,"You meet and present your business and your valuation for the business angel. She’s not interested, as you have no customer validation and sold no products. She wished you the best of luck and left.",RESULT,,,,-1,,,,,
40,"Non of the business angels are interested, as you have not registered a legal company yet.",RESULT,,,,,,,,,
`

const fundingTasks = dataParser(fundingCsvString);

export default fundingTasks;
