//3
let scienceSubjects = "Physics,Chemistry,Biology, Technical Drawing"
let socialScienceSubjects ="Accounting, Commerce,Marketing,Geography"
let artsSubjects ="Government, Economics,Literature, History"
let generalSubjects =" English ,Mathematics"

let studyCourse =artsSubjects

if (studyCourse == artsSubjects){
    console.log(artsSubjects + generalSubjects)
}
else if(studyCourse == scienceSubjects){
    console.log(scienceSubjects + generalSubjects)
} 
else if(studyCourse == socialScienceSubjects){
    console.log(socialScienceSubjects + generalSubjects)
} 
else{console.log(generalSubjects)} // output Government, Economics,Literature, History English ,Mathematics


//5

let lastValue;
for (let i = 2; i < 36; i = i**2) {
  lastValue = i;
}

console.log(lastValue); //output is 16