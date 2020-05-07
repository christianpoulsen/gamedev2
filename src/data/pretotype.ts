import dataParser from './dataParser';

//0  1    2    3      4      5      6         7    8
export const pretotypeCsvString = `Id,Text,Type,Next 1,Next 2,Next 3,Happiness,Days,Funding,Check,Yes,No
0,The Mechanical Turk Prototype,TASK,1,,,,,,,,
1,How do you want to develop your Mechanical Turk?,DILEMMA,2,4,,,,,,,
2,We will draw sketches of the smartwatch interface in a paper pad and manually flip the pages when potential customers test the pretotype,OPTION,3,,,,-2,,,,
3,Your simple pretotype helps you getting useful feedback as users are not afraid of criticising the interface.,RESULT,,,,,,,,,
4,"We will 3D print a smartwatch case and attach a tiny non-touch screen. When users interact with the smartwatch, we play a simple slideshow on the screen to illustrate the interface",OPTION,5,,,,-7,-500,,,
5,The prototype was time consuming. But it is very helpful to get feedback from kids.,RESULT,,,,,,,,,
6,The Fake Door Test,TASK,7,,,,,,,,
7,"You add a ""Buy Now"" button to your website and promotes the site on social media. What does the ""Buy Now"" button lead to?",DILEMMA,8,10,12,,,,,,
8,"""404 page doesn't exist""",OPTION,9,,,,1,-100,,,
9,"You find out that 300 customers clicked the button and were interested in purchasing the product. But now, they probably never will... ",RESULT,,,,,,,,,
10,"""Sign up for our newsletter and get notified when the product is ready"" ",OPTION,11,,,,1,-100,,,
11,"You find out that 300 customers are interested. You can now contact them for surveys, crowdfunding and notify them when the product is ready.",RESULT,,,,,,,,,
12,Direct to cat videos on YouTube,OPTION,13,,,,1,-100,,,
13,Who doesn't like a cat video? ... Your investors.,RESULT,,,,,,,,,
`

const pretotypeTasks = dataParser(pretotypeCsvString);

export default pretotypeTasks;
