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
24,Market Research,TASK,25,,,,,,,,
25,How will you assess the current market situation?,DILEMMA,26,34,,,,,,,
26,It's the 21st century - I'll do some desktop research.,OPTION,27,,,,,,,,
27,What search engine would you use to search for competing products?,DILEMMA,28,29,30,,,,,,
28,I will always use Bing.,OPTION,31,,,,-1,,,,
29,"Google, of course.",OPTION,31,,,,-1,,,,
30,Good old Yahoo.,OPTION,31,,,,-1,,,,
31,Is the right value proposition chosen?,STATECHECK,,,,,,,RIGHT_VP,32,33
32,You quickly realize that you are not the alone on the market. You find a few products with similar features aimed at kids.,RESULT,,,,,,,,,
33,"You spend a day searching for similar products, but find nothing - seems like no one got this idea before you.",RESULT,,,,,,,,,
34,It's important to get out there - I'll go visit shops and have a look at the products out there.,OPTION,35,,,,,,,,
35,Where do you go to look for competing products?,DILEMMA,36,37,,,,,,,
36,Toy Stores,OPTION,38,,,,-3,,,,
37,Stores selling electronics,OPTION,38,,,,-3,,,,
38,Is the right value proposition chosen?,STATECHECK,,,,,,,RIGHT_VP,39,40
39,Quite a few of the stores you visit have products with similar features and the shop assistants can tell you that they are popular products.,RESULT,,,,,,,,,
40,"You go from store to store, but find no similar products. You end up talking to at least 10 shop assistants, but hey cannot help you.",RESULT,,,,,,,,,
`

const analyzeTasks = dataParser(analyzeCsvString);

export default analyzeTasks;

