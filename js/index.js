const startButtonWeb3 = document.getElementById('web3SectionStart');
const startButtonBlockchain = document.getElementById('blockchainSectionStart');
const startButtonCrytpcurrency = document.getElementById('cryptocurrentSectionStart');
const startButtonCrytowallet = document.getElementById('cryptowalletSectionStart');
const homeButtons = document.getElementById('buttonPage');
const homeHeader = document.getElementById('homePageHeader');
const page1Web3 = document.getElementById('pageOne-webThree-content-container');
const nextButtonWeb3Page1 = document.getElementById('nextButtonWebThreePage1');
const nextButtonWeb3Quiz1 = document.getElementById('nextButtonWebThreeQuiz1');
const quiz1Web3 = document.getElementById('questionOne-webThree-container');
const quiz1Web3Answer1 = document.getElementById('web3QuizOneAnswerOne');
const quiz1Web3Answer2 = document.getElementById('web3QuizOneAnswerTwo');
const quiz1Web3Answer3 = document.getElementById('web3QuizOneAnswerThree');
const quiz1Web3Answer4 = document.getElementById('web3QuizOneAnswerFour');
const page2Web3 = document.getElementById('pageTwo-webThree-content-container');
const quiz1Web3NextButton = document.getElementById('nextButtonWebThreeQuiz1');
const quiz2Web3 = document.getElementById('questionTwo-webThree-container');
const nextButtonWeb2Page2 = document.getElementById('nextButtonWebThreePage2');
const quiz2Web3Answer1 = document.getElementById('web3QuizTwoAnswerOne');
const quiz2Web3Answer2 = document.getElementById('web3QuizTwoAnswerTwo');
const quiz2Web3Answer3 = document.getElementById('web3QuizTwoAnswerThree');
const quiz2Web3Answer4 = document.getElementById('web3QuizTwoAnswerFour');
const quiz2Web3NextButton = document.getElementById('nextButtonWebThreeQuiz2');
const page3Web3 = document.getElementById('pageThree-webThree-content-container');
const nextButtonWeb3Page3 = document.getElementById('nextButtonWebThreePage3');
const page4Web3 = document.getElementById('pageFour-webThree-content-container');
const nextButtonWeb3Page4 = document.getElementById('nextButtonWebThreePage4');
const quiz3Web3 = document.getElementById('questionThree-webThree-container');
const quiz3Web3Answer1 = document.getElementById('web3QuizThreeAnswerOne');
const quiz3Web3Answer2 = document.getElementById('web3QuizThreeAnswerTwo');
const quiz3Web3Answer3 = document.getElementById('web3QuizThreeAnswerThree');
const quiz3Web3Answer4 = document.getElementById('web3QuizThreeAnswerFour');
const quiz3Web3NextButton = document.getElementById('nextButtonWebThreeQuiz3');
const mainPageHeader = document.getElementById('homePageHeader');
const mainPage = document.getElementById('buttonPage');
const correct = document.getElementById('correctBox');
const incorrect = document.getElementById('incorrectBox');




//web3 event listener section
startButtonWeb3.addEventListener('click', startWeb3);
nextButtonWeb3Page1.addEventListener('click', startWeb3QuizOne);
quiz1Web3Answer1.addEventListener('click', quiz1Web3AnswerOne);
quiz1Web3Answer2.addEventListener('click', quiz1Web3AnswerTwo);
quiz1Web3Answer3.addEventListener('click', quiz1Web3AnswerThree);
quiz1Web3Answer4.addEventListener('click', quiz1Web3AnswerFour);
quiz1Web3NextButton.addEventListener('click', web3Page2);
nextButtonWeb2Page2.addEventListener('click', startWeb3QuizTwo);
quiz2Web3Answer1.addEventListener('click', quiz2Web3AnswerOne);
quiz2Web3Answer2.addEventListener('click', quiz2Web3AnswerTwo);
quiz2Web3Answer3.addEventListener('click', quiz2Web3AnswerThree);
quiz2Web3Answer4.addEventListener('click', quiz2Web3AnswerFour);
quiz2Web3NextButton.addEventListener('click', web3Page3);
nextButtonWeb3Page3.addEventListener('click', web3Page4);
nextButtonWeb3Page4.addEventListener('click', startWeb3QuizThree);
quiz3Web3Answer1.addEventListener('click', quiz3Web3AnswerOne);
quiz3Web3Answer2.addEventListener('click', quiz3Web3AnswerTwo);
quiz3Web3Answer3.addEventListener('click', quiz3Web3AnswerThree);
quiz3Web3Answer4.addEventListener('click', quiz3Web3AnswerFour);
quiz3Web3NextButton.addEventListener('click',mainPageFromWeb3)







//end of web3 event listender section

//starts our web3 section
function startWeb3() {
    //this will hide our home page
    homeButtons.classList.add('hide');
    homeHeader.classList.add('hide');
    
    //this will load in our first page of the Web3 Section
    page1Web3.classList.remove('hide');
}


//function for our first quiz in the Web 3 Section
function startWeb3QuizOne() {
    page1Web3.classList.add('hide');
    quiz1Web3.classList.remove('hide');
}

function quiz1Web3AnswerOne() {
    incorrect.classList.remove('hide');
}

function quiz1Web3AnswerTwo() {
    incorrect.classList.remove('hide');
}

function quiz1Web3AnswerThree() {
    correct.classList.remove('hide');
    nextButtonWeb3Quiz1.classList.remove('hide');
}

function quiz1Web3AnswerFour() {
    incorrect.classList.remove('hide');
}
//end of function for our first quiz in web 3 section

//Page 2 of Web 3
function web3Page2() {
    quiz1Web3.classList.add('hide');
    correct.classList.add('hide');
    incorrect.classList.add('hide');
    page2Web3.classList.remove('hide');
}

//Quiz 2 of Web 3 Section
function startWeb3QuizTwo() {
    page2Web3.classList.add('hide');
    quiz2Web3.classList.remove('hide');
}

function quiz2Web3AnswerOne() {
    incorrect.classList.remove('hide');
}

function quiz2Web3AnswerTwo() {
    correct.classList.remove('hide');
    quiz2Web3NextButton.classList.remove('hide');
}

function quiz2Web3AnswerThree() {
    incorrect.classList.remove('hide');
}

function quiz2Web3AnswerFour() {
    incorrect.classList.remove('hide');
}

function web3Page3() {
    incorrect.classList.add('hide');
    correct.classList.add('hide');
    quiz2Web3.classList.add('hide');
    page3Web3.classList.remove('hide');
}

function web3Page4() {
    page3Web3.classList.add('hide');
    page4Web3.classList.remove('hide');
}

function startWeb3QuizThree() {
    page4Web3.classList.add('hide');
    quiz3Web3.classList.remove('hide');
}

function quiz3Web3AnswerOne() {
    incorrect.classList.remove('hide');
}

function quiz3Web3AnswerTwo() {
    incorrect.classList.remove('hide');
}
function quiz3Web3AnswerThree() {
    incorrect.classList.remove('hide');
}
function quiz3Web3AnswerFour() {
    correct.classList.remove('hide');
    quiz3Web3NextButton.classList.remove('hide');
}

function mainPageFromWeb3() {
    correct.classList.add('hide');
    incorrect.classList.add('hide');
    quiz3Web3.classList.add('hide');
    mainPage.classList.remove('hide');
    mainPageHeader.classList.remove('hide');
}