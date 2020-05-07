import dataParser from './dataParser';

//0  1    2    3      4      5      6         7    8
export const analyzeCsvString = `Id,Text,Type,Next 1,Next 2,Next 3,Happiness,Days,Funding,Check,Yes,No
0,Analog Antilog Analysis,TASK,1,,,,,,,,
1,"Do you want to compare your business model to similar, successful companies or similar failing companies?",DILEMMA,2,10,,,,,,,
2,Similar successful companies (analog),OPTION,3,,,,,,,,
3,Who do you want to compare your business with?,DILEMMA,4,6,8,,,,,,
4,"A tech giant based in Silicon Valley that design computers, smartphones and smartwatches",OPTION,5,,,,-5,,,,
5,Who do you think you are? You cannot compare your tiny startup to the most successful tech entrepreneur that is resting in peace above the iClouds,RESULT,,,,,,,,,
6,A small company that produce smartwatches for kids,OPTION,7,,,,-3,,,,
7,You gain some insightful knowledge on how to structure your value chain and customer segmentation,RESULT,,,,,,,,,
8,A small company that produce smartwatches for FBI agents,OPTION,9,,,,-3,,,,
9,"The selected company does not offer the same value proposition as you, so you gain no relevant insights.",RESULT,,,,,,,,,
10,Similar failed companies (antilog),OPTION,11,,,,,,,,
11,Who do you want to compare your business with?,DILEMMA,12,14,,,,,,,
12,"Jawbone, a wearable device company that failed",OPTION,13,,,,-3,,,,
13,"You learn that overfunding can also be a challenge, if you don't have your product ready ",RESULT,,,,,,,,,
14,Your uncle's  restaurant that closed after 200 guests got food poisoning,OPTION,15,,,,-1,,,,
15,You meet with your uncle and ask questions about his failed business. Later that evening you get diarrhoea.,RESULT,,,,-1,,,,,
16,Market Estimation,TASK,17,,,,,,,,
17,What do you want to estimate?,DILEMMA,18,20,22,,,,,,
18,The total potential market opportunity,OPTION,19,,,,-1,,,,
19,Last year 50 million smartwatches were sold worldwide.,RESULT,,,,,,,,,
20,Your Segment Addressable Market,OPTION,21,,,,-1,,,,
21,Last year 2 million smartwatches were sold to your segment group in your continent.,RESULT,,,,,,,,,
22,Your Estimated Share of Segment Addressable Market,OPTION,23,,,,-1,,,,
23,You expect a share of 2% of the segment addressable market. So you expect to sell around 40.000 units,RESULT,,,,,,,,,
`

const analyzeTasks = dataParser(analyzeCsvString);

export default analyzeTasks;
