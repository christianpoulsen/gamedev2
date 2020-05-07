import dataParser from './dataParser';

//0  1    2    3      4      5      6         7    8
export const talkToCustomersCsvString = `Id,Text,Type,Next 1,Next 2,Next 3,Happiness,Days,Funding,Check,Yes,No
0,Interview potential customers,TASK,1,,,,,,,,
1,You and the team have decided to talk to at least 10 potential customers. How would you find these people?,DILEMMA,2,10,,,,,,,
2,I'll try and find within my and the teams social cirkles.,OPTION,3,,,,,,,,
3,You manage to find 10 acquanintances. How would you like to interview them?,DILEMMA,4,6,,,,,,,
4,Present the smartwatch you are building and why it is a fantastic product. Ask them what they think and if they would consider buying one?,OPTION,5,,,,-5,,,,
5,9 out of 10 people you interviewed told you that the product sounded fantastic and they'll would probably buy one when they are available in stores.,RESULT,,,,,,,,,
6,Ask them about their kids and everyday challenges they experience. Present the smartwatch at the end and ask how it could help them coping with their challenges.,OPTION,7,,,,-5,,,,
7,Is the right value proposition chosen?,STATECHECK,,,,,,,RIGHT_VP,8,9
8,"Based on the interviews, all of your friends and family experienced challenges the watch could help solve and they all got very excited when you told them about the watch.",RESULT,,,,,,,,,
9,"None of the people you interviewed had any problems your smartwatch will help solve. However, when you presented the watch, they told you it sounded like a good idea.",RESULT,,,,,,,,,
10,I'll search for people online and seek out relevant people on the street.,OPTION,11,,,,,,,,
11,You have managed to gather 10 potential customers who agreed to participate in short interviews. How to interview them?,DILEMMA,12,13,,,,,,,
12,Present the smartwatch you are building and why it is a fantastic product. Ask them what they think and if they would consider buying one?,OPTION,5,,,,-5,,,,
13,Ask them about their kids and everyday challenges they experience. Present the smartwatch at the end and ask how it could help them coping with their challenges.,OPTION,14,,,,-5,,,,
14,Is the right value proposition chosen?,STATECHECK,,,,,,,RIGHT_VP,15,16
15,Almost all of the interviewed people has experienced some kind of relevant problems and they could all describe how your smartwatch would be very helpful in everyday life.,RESULT,,,,,,,,,
16,"None of the people interviewed experienced any problems your smartwatch could help solve, and when you presented the watch they did not seem interested.",RESULT,,,,,,,,,
17,Interview relevant family members,TASK,18,,,,,,,,
18,Who would you like to interview?,DILEMMA,19,25,,,,,,,
19,Only family members with younger kids. (5 in total),OPTION,20,,,,-3,,,,
20,How would you carry out the interviews?,DILEMMA,21,23,,,,,,,
21,I would try and get an understanding of the problems they face as parents.,OPTION,22,,,,,,,,
22,"You gain some valuable insights in the many challenges parents daily face. You say a little prayer, that you don't end up in that situation any time soon.",RESULT,,,,,,,,,
23,"I would do a presentation of the watch, all of the features and how it works and ask if it could be interesting.",OPTION,24,,,,,,,,
24,"Your family is thrilled about your product. They don't provide the critical feedback you need, because they are afraid of hurting your feelings.",RESULT,,,,,,,,,
25,"Both family members with and without kids, young and old, the more the merrier. (11 in total)",OPTION,26,,,,-5,,,,
26,How would you carry out the interviews?,DILEMMA,27,29,,,,,,,
27,I would try and get an understanding of the problems they face related to using smartwatches and living a healthy lifestyle,OPTION,28,,,,,,,,
28,"You get a lot of critical feedback. However, most is not related to smartwatches for kids.",RESULT,,,,,,,,,
29,"I would do a presentation of the watch, all of the features and how it works and ask if it could be interesting.",OPTION,30,,,,,,,,
30,"Your family members like the product and give you input for additional features. However, most features are not relevant for  kids. ",RESULT,,,,,,,,,
31,Send out a survey,TASK,32,,,,,,,,
32,How would you send out the survey?,DILEMMA,33,41,,,,,,,
33,I will share an online survey on Facebook groups for parents,OPTION,34,,,,-2,,,,
34,Which groups do you choose?,DILEMMA,35,36,37,,,,,,
35,"""Parents with overweight kids""",OPTION,38,,,,,,,,
36,"""Support group for parents that always lose their kids in the mall""",OPTION,38,,,,,,,,
37,"""Community for parents with elite tennis playing kids""",OPTION,38,,,,,,,,
38,Is the right value proposition chosen?,STATECHECK,,,,,,,RIGHT_VP,39,40
39,"You get over 1000 replies and they are all very relevant, as you have selected your correct target group.",RESULT,,,,,,,,,
40,"You get more than a 1000 answers, but they doesn't fit your value proposition, as you targeted the wrong segment.",RESULT,,,,,,,,,
41,I will hand it out to people on the streets,OPTION,42,,,,-3,,,,
42,You get 50 responses and few are relevant to your customer segment. But it is better than nothing.,RESULT,,,,,,,,,
`

const talkToCustomersTasks = dataParser(talkToCustomersCsvString);

export default talkToCustomersTasks;
