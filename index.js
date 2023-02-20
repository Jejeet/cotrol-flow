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
else{console.log(generalSubjects)}