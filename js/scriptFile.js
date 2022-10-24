'use strict'
// This ensures that errors will be thrown if there are mistakes in our code, rather than
// just failing silently.

let questionsArr = [
  {
    question: 'What tag would be used to link to a seperate HTML file?',
    allAnswers: ['&lt;a&gt;', '&lt;link&gt;', '&lt;em&gt;', '&lt;cite&gt;'],
    correctAnswer: '<a>',
    showAnswer: "<h3 style='color:green'>&lt;a&gt;</h3>",
    type: 'html',
  },
  {
    question: "What does the 'ol' tag stand for?",
    allAnswers: [
      'On License',
      'Over Layout',
      'Unordered List',
      'None of the above',
    ],
    correctAnswer: 'None of the above',
    showAnswer: "<h3 style='color:green'>None of the above</h3>",
    type: 'html',
  },
  {
    question: 'What tag is used to create a supplemented number/letter?',
    allAnswers: ['&lt;strong&gt;', '&lt;sup&gt;', '&lt;em&gt;', '&lt;sub&gt;'],
    correctAnswer: '<sup>',
    showAnswer: "<h3 style='color:green'>&lt;sup&gt;</h3>",
    type: 'html',
  },
  {
    question: 'Which tag creates the biggest text?',
    allAnswers: ['&lt;h6&gt;', '&lt;p&gt;', '&lt;em&gt;', '&lt;h1&gt;'],
    correctAnswer: '<h1>',
    showAnswer: "<h3 style='color:green'>&lt;h1&gt;</h3>",
    type: 'html',
  },
  {
    question: "What does the 'td' tag stand for?",
    allAnswers: ['Top Data', 'Table Data', 'Top Date', 'Table Date'],
    correctAnswer: 'Table Data',
    showAnswer: "<h3 style='color:green'>Table Data</h3>",
    type: 'html',
  },
  {
    question: 'Using CSS, how do you create UPPERCASE text?',
    allAnswers: [
      'text-transform: uppercase',
      'text-transform: capitalize',
      'text-decoration: uppercase',
      'font-weight: bold',
    ],
    correctAnswer: 'text-transform: uppercase',
    showAnswer: "<h3 style='color:green'>text-transform: uppercase</h3>",
    type: 'css',
  },
  {
    question:
      'What does the "0.5" represent in: background-color: rgba(0,0,0,0.5)',
    allAnswers: ['Hue', 'Opacity', 'Saturation', 'Color'],
    correctAnswer: 'Opacity',
    showAnswer: "<h3 style='color:green'>Opacity</h3>",
    type: 'css',
  },
  {
    question:
      'Which one would be an example of selecting a direct child element?',
    allAnswers: ['p a {}', 'li>a {}', 'h3~p {}', 'h1+p {}'],
    correctAnswer: 'li>a {}',
    showAnswer: "<h3 style='color:green'>li>a {}</h3>",
    type: 'css',
  },
  {
    question: 'What does CSS stand for?',
    allAnswers: [
      'Cascade Style Sheets',
      'Cascade Size Style',
      'Call Style Shadows',
      'Javascript',
    ],
    correctAnswer: 'Cascade Style Sheets',
    showAnswer: "<h3 style='color:green'>Cascade Style Sheets</h3>",
    type: 'css',
  },
  {
    question: '16px is equal to:',
    allAnswers: ['1rem', '50%', '48pt', '1em'],
    correctAnswer: '1em',
    showAnswer: "<h3 style='color:green'>1em</h3>",
    type: 'css',
  },
  {
    question:
      'Looking at document.write(\'Good Morning\'), what does "Good Morning" represent?',
    allAnswers: ['Method', 'Member operator', 'Parameter', 'Object'],
    correctAnswer: 'Parameter',
    showAnswer: "<h3 style='color:green'>Parameter</h3>",
    type: 'javascript',
  },
  {
    question: 'What layer does Javascript represent in web-development?',
    allAnswers: [
      'Behavior layer',
      'Content layer',
      'Presentation layer',
      'Architectural layer',
    ],
    correctAnswer: 'Behavior layer',
    showAnswer: "<h3 style='color:green'>Behavior layer</h3>",
    type: 'javascript',
  },
  {
    question: 'At what point does Javascript run?',
    allAnswers: [
      'When the page loads',
      'Never',
      'After the page loads',
      'The point it is found in the document',
    ],
    correctAnswer: 'The point it is found in the document',
    showAnswer:
      "<h3 style='color:green'>The point it is found in the document</h3>",
    type: 'javascript',
  },
  {
    question: 'What do the [] brackets represent?',
    allAnswers: ['Array', 'Object', 'Method', 'Function'],
    correctAnswer: 'Array',
    showAnswer: "<h3 style='color:green'>Array</h3>",
    type: 'javascript',
  },
  {
    question: 'When using Math.ceil, your number will...',
    allAnswers: [
      'Round Down',
      'Round Up',
      'Give Whole Numbers Only',
      'Only Give Two Decimal Places',
    ],
    correctAnswer: 'Round Up',
    showAnswer: "<h3 style='color:green'>Round Up</h3>",
    type: 'javascript',
  },
  {
    question:
      'Which method inserts content inside the selected element(s) before the closing tag?',
    allAnswers: ['.prepend()', '.after()', '.before()', '.append()'],
    correctAnswer: '.append()',
    showAnswer: "<h3 style='color:green'>.append()</h3>",
    type: 'jquery',
  },
  {
    question: 'How would you hide all of the matched elements of your choice?',
    allAnswers: ['.focusout()', ':hidden Selector', '.hide()', '.get()'],
    correctAnswer: '.hide()',
    showAnswer: "<h3 style='color:green'>.hide()</h3>",
    type: 'jquery',
  },
  {
    question: 'What does the ("*") selector select?',
    allAnswers: [
      'First Element',
      'Last Child Element',
      'Parent Element',
      'All Elements',
    ],
    correctAnswer: 'All Elements',
    showAnswer: "<h3 style='color:green'>All Elements</h3>",
    type: 'jquery',
  },
  {
    question:
      'What would you use to perform a custom animation of a set of CSS properties?',
    allAnswers: ['.playAnimation()', '.animate()', '.GIF()', '.play()'],
    correctAnswer: '.animate()',
    showAnswer: "<h3 style='color:green'>.animate()</h3>",
    type: 'jquery',
  },
  {
    question:
      'How would you get the value of a computed style property for the first element in the set of matched elements or set one or more CSS properties for every matched element.',
    allAnswers: ['#css(', '.style()', '.css()', '.change()'],
    correctAnswer: '.css()',
    showAnswer: "<h3 style='color:green'>.css()</h3>",
    type: 'jquery',
  },
  {
    question: 'What tag is used to create a button group?',
    allAnswers: [
      '&lt;row&gt;',
      '&lt;div&gt;',
      '&lt;button&gt;',
      '&lt;input&gt;',
    ],
    correctAnswer: '<div>',
    showAnswer: "<h3 style='color:green'>&lt;div&gt;</h3>",
    type: 'bootstrap',
  },
  {
    question:
      "All textual 'input', 'textarea', and 'select' elements with class .form-control have a width of?",
    allAnswers: ['80%', '10%', '100%', 'undefined'],
    correctAnswer: '100%',
    showAnswer: "<h3 style='color:green'>100%</h3>",
    type: 'bootstrap',
  },
  {
    question: 'A dropdown menu must have a class set of?',
    allAnswers: [
      'drop dropdown-toggle',
      'drop dropdown',
      'dropdown toggle',
      'dropdown dropdown-toggle',
    ],
    correctAnswer: 'dropdown dropdown-toggle',
    showAnswer: "<h3 style='color:green'>dropdown dropdown-toggle</h3>",
    type: 'bootstrap',
  },
  {
    question: 'What element must be used to create a jumbotron?',
    allAnswers: [
      '&lt;h1&gt;',
      '&lt;div&gt;',
      '&lt;col&gt;',
      '&lt;jumbotron&gt;',
    ],
    correctAnswer: '<div>',
    showAnswer: "<h3 style='color:green'>&lt;div&gt;</h3>",
    type: 'bootstrap',
  },
  {
    question:
      'Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. What class is used before the "col" class in this system?',
    allAnswers: ['div', 'container', 'col-sm', 'row'],
    correctAnswer: 'row',
    showAnswer: "<h3 style='color:green'>row</h3>",
    type: 'bootstrap',
  },
]

function shuffle() {
  let counter = questionsArr.length
  while (counter > 0) {
    let indexTracker = Math.floor(Math.random() * counter)
    counter--
    let temp = questionsArr[counter]
    questionsArr[counter] = questionsArr[indexTracker]
    questionsArr[indexTracker] = temp
  }
}
shuffle()

/* -------------- DOM references ---------------- */

let content = document.getElementById('content')
let $questionHolder = document.getElementById('question')
let $choicesHolder = document.getElementById('choices')
let $scoreHolder = document.getElementById('score')
let $missedScoreHolder = document.getElementById('missedScore')
let $timeHolder = document.getElementById('time')
let $submitButton = document.getElementById('submit')
let $startButton = document.getElementById('start')
let $optionsButton = document.getElementById('highScore')
let $instructionsButton = document.getElementById('instructions')
let $myForm = document.getElementById('myForm')
let $closeContent = document.getElementById('closeContent')
let $highScoreArr = localStorage.getItem('highScores')
  ? JSON.parse(localStorage.getItem('highScores'))
  : []
let $submitName = document.getElementById('submitName')

/*--------------------------------------------------------------------*/

let result
let missedArr = []
let indexTracker = 0
let myScore = 0
let myName = ''
let missedScore = 0
let wasQuestionAsked = true

/* ----------- START ------------ */
$('#start').on('click', function () {
  $('h1').hide()
  $('#start').hide()
  $('#myForm').show()
  $('#content').show()
  $('#highScore').hide()
  $('#instructions').hide()
  $('#help').show()
  $('div.html-logo').css('transform', 'rotateY(180deg)')
  $('div.css-logo').css('transform', 'rotateY(180deg)')
  $('div.javascript-logo').css('transform', 'rotateY(180deg)')
  $('div.jquery-logo').css('transform', 'rotateY(180deg)')
  $('div.bootstrap-logo').css('transform', 'rotateY(180deg)')
})

/* ------------ INSTRUCTIONS ------------- */
$('#instructions').on('click', function () {
  viewInstructions()
  $('h1').hide()
  $('#start').hide()
  $('#submit').show()
  $('#content').show()
  $('#closeBtn').show()
  $('#highScore').hide()
  $('#instructions').hide()
})

/* ------------- HIGHSCORES --------------- */
$('#highScore').on('click', function () {
  $('h1').hide()
  $('#start').hide()
  $('#submit').show()
  $('#content').show()
  $('#closeBtn').show()
  $('#instructions').hide()
  highScore()
})

/* ------------- HELP ------------- */
$('#help').on('click', function () {
  $('h1').hide()
  $('#start').hide()
  $('#alert').hide()
  $('#submit').hide()
  $('#content').hide()
  $('#closeBtn').hide()
  $('#highScore').hide()
  $('#modal-boxes2').show()
  $('#instructions').hide()

  /*----------HELP---CONTINUE BUTTON-----------*/
  $('#continue2').on('click', function () {
    $('#submit').show()
    $('#content').show()
    $('#closeBtn').show()
    $('#modal-boxes2').hide()
    $('#submit').hide()
  })
})

/* -------------- CLOSE -------------- */
$('#closeContent').on('click', function () {
  $('h1').hide()
  $('#start').hide()
  $('#alert').hide()
  $('#submit').hide()
  $('#content').hide()
  $('#closeBtn').hide()
  $('#highScore').hide()
  $('#modal-boxes').show()
  $('#instructions').hide()

  /*--------CLOSE---YES OR NO BUTTONS--------*/
  $('#quit').on('click', function () {
    reset()
  })
  $('#continue').on('click', function () {
    if (myName === '') {
      $('#content').show()
      $('#closeBtn').show()
      $('#modal-boxes').hide()
    } else if (indexTracker < questionsArr.length) {
      $('#submit').show()
      $('#content').show()
      $('#closeBtn').show()
      $('#modal-boxes').hide()
    }
  })
})

/* ----------- VIEW INSTRUCTIONS ------------ */
function viewInstructions() {
  content.innerHTML =
    "<h2 class='jumbotron text-center' id='jumbo'>INSTRUCTIONS:</h2>"
  content.innerHTML +=
    "<h4 class=\"text-center\">This quiz is based on the material and knowledge obtained in Track 1 of 'The Last Mile' Program. Upon pressing 'Start' you will notice the top of the screen has tags representing five diffrent catagories. The logo cards at the bottom of the screen will equally keep you informed of the type of question. The tag that blinks will notify you of the type of question being asked so you may properly evaluate the question and choose the correct answer." +
    '<br><br>' +
    "In all, each section has a total of five questions. After selecting your first answer, you will be able to keep track of your 'correct,' and 'missed' questions at the bottom left, and bottom right of the screen. Center of each of those will be the time (20 seconds) in which you have to complete each question. If the time runs out, the current question will be decided against you as 'missed' and tallied as so." +
    '<br><br>' +
    "As you come to the end of the quiz, you will notice at the bottom right of the screen there will be a button labeled 'View Missed' which will allow you to review your missed answers. Please read the question and select your choice carefully. Be aware of the time, and GOOD LUCK!</h4>"
  content.innerHTML +=
    '<br>' +
    "<button class='btn btn-warning mb-5 btn-block' onclick='reset()'>Menu</button>"
}

/* --------- VIEW HIGHSCORES ---------- */
function highScore() {
  $('#highScore').hide()
  $('#content').addClass('background-black')
  content.innerHTML =
    '<h2 class=\'text-center white-text mb-5\' style="text-decoration:underline">High Scores</h2>'
  content.innerHTML +=
    '<table class="float-left table table-dark table-striped" id="scoreBoard"><thead><tr style="text-decoration:underline"><th>Player</th><th>Score</th></tr></thead><tbody id="scoreBody"></tbody></table><table class="champTable float-left table table-dark table-striped"><thead><tr style="text-decoration:underline"><th class="text-center">Champion</th><th class="text-center">Second</th><th class="text-center">Third</th></tr></thead><tbody"><tr><td class="text-center champTrophy" id="champTrophyA" style="background-color:black">🥇</td><td class="text-center champTrophy" id="champTrophyB" style="background-color:black">🥈</td><td class="text-center champTrophy" id="champTrophyC" style="background-color:black">🥉</td><tr><td class="text-center" style="background-color:black"><span id="champNameA"></span></td><td class="text-center" style="background-color:black"><span id="champNameB"></span></td><td class="text-center" style="background-color:black"><span id="champNameC"></span></td></tr></tr></tbody></table>'

  if ($highScoreArr.length === 1) {
    $('#champNameA').append($highScoreArr[0].userName)
  }
  if ($highScoreArr.length === 2) {
    $('#champNameA').append($highScoreArr[0].userName)
    $('#champNameB').append($highScoreArr[1].userName)
  }
  if ($highScoreArr.length === 3) {
    $('#champNameA').append($highScoreArr[0].userName)
    $('#champNameB').append($highScoreArr[1].userName)
    $('#champNameC').append($highScoreArr[2].userName)
  } else if ($highScoreArr.length > 3) {
    $('#champNameA').append($highScoreArr[0].userName)
    $('#champNameB').append($highScoreArr[1].userName)
    $('#champNameC').append($highScoreArr[2].userName)
  }
  let scoreContainer = document.getElementById('scoreBody')
  for (let i = 0; i < $highScoreArr.length; i++) {
    let playerData = '<td id="">' + $highScoreArr[i].userName + '</td>'
    let scoreData = '<td value="' + i + '">' + $highScoreArr[i].score + '</td>'
    scoreContainer.innerHTML += playerData + scoreData
  }
  content.innerHTML +=
    '<br>' +
    "<button class='btn btn-warning mb-5 btn-block' onclick='reset()'>Menu</button>"
}

/* ------ VALIDATE NAME INPUT ------- */
$submitName.addEventListener('click', function () {
  myName = document.querySelector('input').value
  if (myName === '' || myName.length < 2 || myName.length > 12) {
    $('#alert').show()
    return
  } else if (myName.length > 1 && myName.length < 13) {
    $('#myForm').fadeOut('slow', function () {
      $('#submit').show()
      $('div.html-logo').hide()
      $('div.css-logo').hide()
      $('div.javascript-logo').hide()
      $('div.jquery-logo').hide()
      $('div.bootstrap-logo').hide()
      askQ()
    })
  }
})
/* -------- START TIMER --------- */
function runTimer() {
  let count = 20
  let t = setInterval(function () {
    document.getElementById('time').innerHTML =
      '00' + ' ' + ':' + ' ' + count.toString() + ' Seconds'
    if (count < 10) {
      document.getElementById('time').innerHTML =
        '00' + ' ' + ':' + ' ' + '0' + count.toString() + ' Seconds'
    }
    count--

    $('button#submit').on('click', function () {
      if (count > 0) {
        clearInterval(t)
      }
    })
    if (count < 0) {
      clearInterval(t)
      validateAnswer()
    }
    if (indexTracker === questionsArr.length) {
      console.log(indexTracker)
      console.log(questionsArr.length)
      clearInterval(t)
      document.getElementById('time').innerHTML =
        '00' + ' ' + ':' + ' ' + '00' + ' Seconds'
    }
  }, 1000)
}

/* ------- ASK QUESTION FUNCTION --------- */
function askQ() {
  $('#myForm').hide()
  $('#alert').hide()
  $('#help').hide()
  $('#start').hide()
  $('#highScore').hide()
  $('#instructions').hide()
  runTimer()
  let choices = questionsArr[indexTracker].allAnswers
  let loadChoices = ''
  for (let i = 0; i < choices.length; i++) {
    loadChoices +=
      "<input type='radio' name='quiz" +
      indexTracker +
      "' id='choice" +
      (i + 1) +
      "' value='" +
      choices[i] +
      "'>" +
      " <label for='choice" +
      (i + 1) +
      "'>" +
      choices[i] +
      '</label><br>'
  }

  /* ----------------LOAD CURRENT QUESTIONS ------------------- */
  $questionHolder.textContent =
    'Question ' +
    (indexTracker + 1) +
    ':' +
    ' ' +
    questionsArr[indexTracker].question

  /* -------------- ------LOAD UP ANSWERS---------------------- */
  $choicesHolder.innerHTML = loadChoices
  if (indexTracker == 0) {
    $submitButton.textContent = 'Submit Question'
  }

  /* ------------ Change Header Per Question Type ------------- */
  if (questionsArr[indexTracker].type === 'html') {
    $('.HTML-tab').addClass('red-p')
    $('.CSS-tab').removeClass('blue-p')
    $('.Javascript-tab').removeClass('yellow-p')
    $('.JQuery-tab').removeClass('black-p')
    $('.Bootstrap-tab').removeClass('green-p')
    $('.html-logo').show()
    $('.css-logo').show()
    $('.javascript-logo').show()
    $('.jquery-logo').show()
    $('.bootstrap-logo').show()
    $('.html-logo').css('transform', 'rotateY(360deg)')
    $('.css-logo').css('transform', 'rotateY(180deg)')
    $('.javascript-logo').css('transform', 'rotateY(180deg)')
    $('.jquery-logo').css('transform', 'rotateY(180deg)')
    $('.bootstrap-logo').css('transform', 'rotateY(180deg)')
    setTimeout(function () {
      $('.html-logo').animate({
        left: '40%',
      })
    }, 500)
    setTimeout(function () {
      $('.css-logo').animate({
        left: '0',
      })
    }, 500)
    setTimeout(function () {
      $('.jquery-logo').animate({
        right: '0',
      })
    }, 500)
    setTimeout(function () {
      $('.bootstrap-logo').animate({
        right: '0',
      })
    }, 500)
  } else if (questionsArr[indexTracker].type === 'css') {
    $('.CSS-tab').addClass('blue-p')
    $('.HTML-tab').removeClass('red-p')
    $('.Javascript-tab').removeClass('yellow-p')
    $('.JQuery-tab').removeClass('black-p')
    $('.Bootstrap-tab').removeClass('green-p')
    $('.html-logo').show()
    $('.css-logo').show()
    $('.javascript-logo').show()
    $('.jquery-logo').show()
    $('.bootstrap-logo').show()
    $('.css-logo').css('transform', 'rotateY(360deg)')
    $('.html-logo').css('transform', 'rotateY(180deg)')
    $('.javascript-logo').css('transform', 'rotateY(180deg)')
    $('.jquery-logo').css('transform', 'rotateY(180deg)')
    $('.bootstrap-logo').css('transform', 'rotateY(180deg)')
    setTimeout(function () {
      $('.css-logo').animate({
        left: '20%',
      })
    }, 500)
    setTimeout(function () {
      $('.html-logo').animate({
        left: '0',
      })
    }, 500)
    setTimeout(function () {
      $('.jquery-logo').animate({
        right: '0',
      })
    }, 500)
    setTimeout(function () {
      $('.bootstrap-logo').animate({
        right: '0',
      })
    }, 500)
  } else if (questionsArr[indexTracker].type === 'javascript') {
    $('.Javascript-tab').addClass('yellow-p')
    $('.HTML-tab').removeClass('red-p')
    $('.CSS-tab').removeClass('blue-p')
    $('.JQuery-tab').removeClass('black-p')
    $('.Bootstrap-tab').removeClass('green-p')
    $('.html-logo').show()
    $('.css-logo').show()
    $('.javascript-logo').show()
    $('.jquery-logo').show()
    $('.bootstrap-logo').show()
    $('.javascript-logo').css('transform', 'rotateY(360deg)')
    $('.html-logo').css('transform', 'rotateY(180deg)')
    $('.css-logo').css('transform', 'rotateY(180deg)')
    $('.jquery-logo').css('transform', 'rotateY(180deg)')

    $('.bootstrap-logo').css('transform', 'rotateY(180deg)')
    setTimeout(function () {
      $('.html-logo').animate({
        left: '0',
      })
    }, 500)
    setTimeout(function () {
      $('.css-logo').animate({
        left: '0',
      })
    }, 500)
    setTimeout(function () {
      $('.jquery-logo').animate({
        right: '0',
      })
    }, 500)
    setTimeout(function () {
      $('.bootstrap-logo').animate({
        right: '0',
      })
    }, 500)
  } else if (questionsArr[indexTracker].type === 'jquery') {
    $('.JQuery-tab').addClass('black-p')
    $('.HTML-tab').removeClass('red-p')
    $('.CSS-tab').removeClass('blue-p')
    $('.Javascript-tab').removeClass('yellow-p')
    $('.Bootstrap-tab').removeClass('green-p')
    $('.html-logo').show()
    $('.css-logo').show()
    $('.javascript-logo').show()
    $('.jquery-logo').show()
    $('.bootstrap-logo').show()
    $('.jquery-logo').css('transform', 'rotateY(360deg)')
    $('.html-logo').css('transform', 'rotateY(180deg)')
    $('.css-logo').css('transform', 'rotateY(180deg)')
    $('.javascript-logo').css('transform', 'rotateY(180deg)')
    $('.bootstrap-logo').css('transform', 'rotateY(180deg)')
    setTimeout(function () {
      $('.jquery-logo').animate({
        right: '20%',
      })
    }, 500)
    setTimeout(function () {
      $('.html-logo').animate({
        left: '0',
      })
    }, 500)
    setTimeout(function () {
      $('.css-logo').animate({
        left: '0',
      })
    }, 500)
    setTimeout(function () {
      $('.bootstrap-logo').animate({
        right: '0',
      })
    }, 500)
  } else if (questionsArr[indexTracker].type === 'bootstrap') {
    $('.Bootstrap-tab').addClass('green-p')
    $('.HTML-tab').removeClass('red-p')
    $('.CSS-tab').removeClass('blue-p')
    $('.Javascript-tab').removeClass('yellow-p')
    $('.JQuery-tab').removeClass('black-p')
    $('.html-logo').show()
    $('.css-logo').show()
    $('.javascript-logo').show()
    $('.jquery-logo').show()
    $('.bootstrap-logo').show()
    $('.bootstrap-logo').css('transform', 'rotateY(360deg)')
    $('.html-logo').css('transform', 'rotateY(180deg)')
    $('.css-logo').css('transform', 'rotateY(180deg)')
    $('.javascript-logo').css('transform', 'rotateY(180deg)')
    $('.jquery-logo').css('transform', 'rotateY(180deg)')
    setTimeout(function () {
      $('.bootstrap-logo').animate({
        right: '40%',
      })
    }, 500)
    setTimeout(function () {
      $('.html-logo').animate({
        left: '0',
      })
    }, 500)
    setTimeout(function () {
      $('.css-logo').animate({
        left: '0',
      })
    }, 500)
    setTimeout(function () {
      $('.jquery-logo').animate({
        right: '0',
      })
    }, 500)
  }
}

/* ------- VALIDATE QUESTION --------- */
function validateAnswer() {
  console.log('validateAnswer() Invoked')
  let userSelection
  let correctIndex

  // -----------------CHECK IF QUESTION WAS ASKED, DETERMINE IF WE PROCEED TO NEXT QUESTION-----------------

  if (wasQuestionAsked) {
    $submitButton.textContent = 'Next Question'
    wasQuestionAsked = false

    // -------DETERMINE WHICH RADIO BUTTON WAS CLICKED-------

    let radios = document.getElementsByName('quiz' + indexTracker)
    for (let i = 0; i < radios.length; i++) {
      /*--------------------------------------- 
                     IF RADIO BUTTON IS CHECKED
                  ---------------------------------------*/
      if (radios[i].checked) {
        userSelection = radios[i].value
      }

      /*---------------------FIND CORRECT INDEX---------------------  */

      if (radios[i].value == questionsArr[indexTracker].correctAnswer) {
        correctIndex = i
      }
    }
    /*---------------------STYLE TAGS---------------------  */
    let labelChange = document.getElementsByTagName('label')[correctIndex].style
    labelChange.fontWeight = 'bold'
    if (userSelection === undefined) {
      missedScore++
      labelChange.color = '#cc0000'
      missedArr.push(
        'Question ' +
          (indexTracker + 1) +
          ':' +
          ' ' +
          questionsArr[indexTracker].question +
          ' ' +
          'Correct Answer' +
          ':' +
          ' ' +
          questionsArr[indexTracker].showAnswer
      )
      // console.log(missedArr);
    } else if (userSelection == questionsArr[indexTracker].correctAnswer) {
      myScore++
      labelChange.color = '#33cc00'
    } else {
      missedScore++
      labelChange.color = '#cc0000'
      missedArr.push(
        'Question ' +
          (indexTracker + 1) +
          ':' +
          ' ' +
          questionsArr[indexTracker].question +
          ' ' +
          'Correct Answer' +
          ':' +
          ' ' +
          questionsArr[indexTracker].showAnswer
      )
      console.log(missedArr)
    }

    /*---------------------CORRECT / MISSED COUNTS---------------------  */
    $scoreHolder.textContent =
      'Correct: ' + myScore + ' out of ' + questionsArr.length
    $missedScoreHolder.textContent =
      'Missed: ' + missedScore + ' out of ' + questionsArr.length
  } else {
    wasQuestionAsked = true

    /*---------------- RESET BUTTON TEXT TO "SUBMIT QUESTION" ----------------*/
    $submitButton.textContent = 'Submit Question'

    /*----------- IF WE HAVE NOT YET REACHED LAST QUESTION, INCREASE Q BY ONE -------------*/
    if (indexTracker < questionsArr.length - 1) {
      indexTracker++
      askQ()
    } else {
      $('time').hide()
      finalScore()
      $('.HTML-tab').hide()
      $('.CSS-tab').hide()
      $('.Javascript-tab').hide()
      $('.JQuery-tab').hide()
      $('.Bootstrap-tab').hide()
      $('div.html-logo').hide()
      $('div.css-logo').hide()
      $('div.javascript-logo').hide()
      $('div.jquery-logo').hide()
      $('div.bootstrap-logo').hide()
      updateStorage()
    }
  }
}

/* ---------- UPDATE STORAGE FUNCTION ----------- */
function updateStorage() {
  result = {
    userName: myName,
    score: myScore,
  }
  $highScoreArr.push(result)
  if ($highScoreArr.length > 5) {
    if (
      $highScoreArr[5].userName !== $highScoreArr[4].userName &&
      $highScoreArr[5].score === $highScoreArr[4].score
    ) {
      $highScoreArr[4] = $highScoreArr[5]
    }
    sortScores()
    $highScoreArr.pop()
  }
  sortScores()
  localStorage.setItem('highScores', JSON.stringify($highScoreArr))
}

function sortScores() {
  $highScoreArr.sort(function (a, b) {
    return b.score - a.score
  })
}

/* ----------- SHOW FINAL SCORE ----------- */
function finalScore() {
  console.log('finalScore() Invoked')
  document.getElementById('time').innerHTML =
    '00' + ' ' + ':' + ' ' + '00' + ' Seconds'
  content.innerHTML =
    "<h2 class='jumbotron text-center'>You've finished the Trivia Game!</h2>" +
    '<h4 class="text-center">These are your results</h4>' +
    '<h5 class="text-center">' +
    myScore +
    ' out of a total of ' +
    questionsArr.length +
    ' questions.' +
    '<br>' +
    'Your percentage was: ' +
    Math.round((myScore / questionsArr.length) * 100) +
    '%</h5>' +
    '<br><br>' +
    "<button class='btn btn-warning mb-5 btn-block' onclick='reset()'>Play Again</button>"
  $missedScoreHolder.innerHTML =
    'Missed: ' +
    missedScore +
    ' out of ' +
    questionsArr.length +
    '<br>' +
    "<button id='viewMissed' class='btn btn-warning ml-2 mt-1'onclick=\"viewMissedQ()\">View Missed</button>"
}

/* ----------- VIEW MISSED QUESTIONS ----------- */
function viewMissedQ() {
  console.log('viewMissedQ() Invoked')
  content.innerHTML =
    "<h2 class='jumbotron text-center' id='jumbo'>This is what you missed:</h2>"
  for (let i = 0; i < missedArr.length; i++) {
    content.innerHTML +=
      '<ul>' +
      '<li>' +
      '<h4>' +
      missedArr[i] +
      '<h4>' +
      '</ul>' +
      '</li>' +
      '<br>'
  }
  content.innerHTML +=
    '<br>' +
    "<button class='mr-2 btn btn-secondary mb-5 w-25' onclick='finalScore()'><span class='mr-3'>☜</span>Go Back</button> <button class='ml-2 btn btn-warning mb-5 w-25' onclick='reset()'>Play Again</button>"
}

/* ----------- FUNCTION THAT WILL RESET THE GAME ----------- */
function reset() {
  console.log('reset() Invoked')
  location.reload()
}

/*-------------- AUDIO ----------------*/
let audioElementMenu = document.createElement('audio')
audioElementMenu.setAttribute('src', 'Assets/AUDIO/MenuSoundFinal.mp3')

let audioElement = document.createElement('audio')
audioElement.setAttribute('src', 'Assets/AUDIO/Capstone_background.mp3')

$('.sound-btn').on('click', function () {
  let src = $('#soundImg').attr('src')
  if (src === 'Assets/IMAGES/mutesound.png') {
    $('#soundImg').attr('src', 'Assets/IMAGES/playsound.png')
    console.log('Sound-ON Invoked')
    audioElement.play()
    $('.playable').mouseover(function () {
      audioElementMenu.play()
    })
    $('button').on('click', function () {
      audioElementMenu.play()
    })
  } else {
    $('#soundImg').attr('src', 'Assets/IMAGES/mutesound.png')
    audioElement.pause()
    $('.playable').mouseover(function () {
      audioElementMenu.pause()
    })
    $('button').on('click', function () {
      audioElementMenu.pause()
    })
  }
})

$('[data-toggle="tooltip"]').tooltip()

$submitButton.addEventListener('click', validateAnswer, false)
