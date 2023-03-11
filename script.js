const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')

const jeopardyCategories = [
    {
        genre: "Classic Rock",
        questions: [
            {
                question: 'Who is the singer of Livin on a Prayer?',
                answers: ['Bon Jovi', 'Led Zeppelin'],
                correct: 'Bon Jovi',
                level: '1',
            },
            {
                question: 'Did Led Zepplelin sing Stairway to Heaven?',
                answers: ['Yes', 'No'],
                correct: 'Yes',
                level: '2',
            },
            {
                question: 'What Lynyrd Skynrd song is about a Southern American state?',
                answers: ['Free Bird', 'Sweet Home Alabama'],
                correct: 'Sweet Home Alabama',
                level: '3',
            },
            {
                question: 'Who sings Hotel California',
                answers: ['The Eagles', 'The Rolling Stones'],
                correct: 'The Eagles',
                level: '4',
            },
            {
                question: 'What band is named after a familys last name?',
                answers: ['Pink Floyd', 'Van Halen'],
                correct: 'Van Halen',
                level: '5',
            }
        ]
    },
    {
        genre: "Country",
        questions: [
            {
                question: 'What was the name of Johnny Cashs band?',
                answers: ['The Tennesse Three', 'Zac Brown Band'],
                correct: 'The Tennesse Three',
                level: '1',
            },
            {
                question: 'Cowboy Take Me Away is a hit song from which band?',
                answers: ['The Highwayman', 'Dixie Chicks'],
                correct: 'Dixie Chicks',
                level: '2',
            },
            {
                question: 'Which one of these could be considered a country music star?',
                answers: ['Taylor Swift', 'Beyonce'],
                correct: 'Taylor Swift',
                level: '3',
            },
            {
                question: 'What country star sung Ring Of Fire?',
                answers: ['Kieth Urban', 'Johnny Cash'],
                correct: 'Johnny Cash',
                level: '4',
            },
            {
                question: 'Which one of these country stars have sold more records than The Beatles?',
                answers: ['Garth Brooks', 'Bobby Braddock'],
                correct: 'Garth Brooks',
                level: '5',
            }
        ]
    },
    {
        genre: "HipHop",
        questions: [
            {
                question: 'Complete the name of this rapper Buster ______.',
                answers: ['Nelly', 'Ryhmes'],
                correct: 'Rhymes',
                level: '1',
            },
            {
                question: 'Complete the name of this infamous rap artist. Dr _____.',
                answers: ['Dre', 'Drake'],
                correct: 'Dre',
                level: '2',
            },
            {
                question: 'California Love was released by Tupac and whom?',
                answers: ['Lil Wayne', 'Dr Dre'],
                correct: 'Dr Dre',
                level: '3',
            },
            {
                question: 'Which Rapper has a clothing brand called YEEZY?',
                answers: ['Kanye West', 'Drake'],
                correct: 'Kayne West',
                level: '4',
            },
            {
                question: 'Who sings I am whatever you say I am in the paper the news every day I am?',
                answers: ['Eninem', 'Tupac'],
                correct: 'Eninem',
                level: '5',
            }
        ]
    },
    {
        genre: "Pop",
        questions: [
            {
                question: 'Name this song. Say something Im Giving Up On You.',
                answers: ['A Great Big World', 'Let Her Go'],
                correct: 'A Great Big World',
                level: '1',
            },
            {
                question: 'This singer is Riding Solo in the song Riding Solo',
                answers: ['Shawn Mendes', 'Jason Derulo'],
                correct: 'Jason Derulo',
                level: '2',
            },
            {
                question: 'This girl loves to Party In The USA',
                answers: ['Nicki Minaj', 'Miley Cyrus'],
                correct: 'Miley Cyrus',
                level: '3',
            },
            {
                question: 'Who is the artist behind getting Jiggy With It?',
                answers: ['Will Smith', 'Future'],
                correct: 'Will Smith',
                level: '4',
            },
            {
                question: 'Boy Band that sung Cause I Want It That Way?',
                answers: ['Backstreet Boy', '98 Degrees'],
                correct: 'Backstreet Boy',
                level: '5',
            }
        ]
    },
    {
        genre: "Metal",
        questions: [
            {
                question: 'This Band is best known for "Reign In Blood"',
                answers: ['Slayer', 'Robb Flynn'],
                correct: 'Slayer',
                level: '1',
            },
            {
                question: 'Hammer Smashed Face was performed by who?',
                answers: ['Cannibal Corpse', 'Black Eyed Peas'],
                correct: 'Cannibal Corpse',
                level: '2',
            },
            {
                question: 'What is the greatest selling death metal album of all time?',
                answers: ['The Gathering', 'Obituary'],
                correct: 'Obituary',
                level: '3',
            },
            {
                question: 'Ultra Thrash was produced by what band?',
                answers: ['Crisix', 'Overkill'],
                correct: 'Crisix',
                level: '4',
            },
            {
                question: 'Name the Band for Pure Holocaust',
                answers: ['Immortal', 'Sarcofago'],
                correct: 'Immortal',
                level: '5',
            }
        ]
    }
]

let score = 0

function addCategory(category) {
    const column = document.createElement('div')
    column.classList.add('genre-column')

    const genreTitle = document.createElement('div')
    genreTitle.classList.add('genre-title')
    genreTitle.innerHTML = category.genre

    column.appendChild(genreTitle)
    game.append(column)

    category.questions.forEach(question => {
        const card = document.createElement('div')
        card.classList.add('card')
        column.append(card)

        if (question.level === '1') {
            card.innerHTML = 100
        }
        if (question.level === '2') {
            card.innerHTML = 200
        }
        if (question.level === '3') {
            card.innerHTML = 300
        }
        if (question.level === '4') {
            card.innerHTML = 400
        }
        if (question.level === '5') {
            card.innerHTML = 500
        }

        card.setAttribute('data-question', question.question)
        card.setAttribute('data-answer-1', question.answers[0])
        card.setAttribute('data-answer-2', question.answers[1])
        card.setAttribute('data-correct', question.correct)
        card.setAttribute('data-value', card.getInnerHTML())

       card.addEventListener('click', flipCard)
    })
}

jeopardyCategories.forEach(category => addCategory(category))

function flipCard() {
    this.innerHTML = ""
    const textDisplay = document.createElement('div')
    textDisplay.classList.add('card-text')
    textDisplay.innerHTML = this.getAttribute('data-question')
    const firstButton = document.createElement('button')
    const secondButton = document.createElement('button')
    firstButton.classList.add('first-button')
    secondButton.classList.add('second-button')
    firstButton.innerHTML = this.getAttribute('data-answer-1')
    secondButton.innerHTML = this.getAttribute('data-answer-2')
    firstButton.addEventListener('click', getResult)
    secondButton.addEventListener('click', getResult)
    this.append(textDisplay, firstButton, secondButton)

    const allCards = Array.from(document.querySelectorAll('.card'))
    allCards.forEach(card => card.removeEventListener('click', flipCard))


}

function getResult() {
    const allCards = Array.from(document.querySelectorAll('.card'))
    allCards.forEach(card => card.addEventListener('click', flipCard))

    const cardOfButton = this.parentElement

    if (cardOfButton.getAttribute('data-correct') == this.innerHTML) {
        score = score + parseInt(cardOfButton.getAttribute('data-value'))
        scoreDisplay.innerHTML = score
        cardOfButton.classList.add('correct-answer')
        setTimeout(() => {
            while (cardOfButton.firstChild) {
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            cardOfButton.innerHTML = cardOfButton.getAttribute('data-value')
        }, 100)
    } else {
        cardOfButton.classList.add('wrong-answer')
        setTimeout(() => {
            while (cardOfButton.firstChild) {
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            cardOfButton.innerHTML = 0
        }, 100)
    }
    cardOfButton.removeEventListener('click', flipCard)
}
