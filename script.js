const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')

const jeopardyCategories = [
    {
        genre: "Classic Rock",
        questions: [
            {
                question: '',
                answers: [],
                correct: '',
                level: '1',
            },
            {
                question: '',
                answers: [],
                correct: '',
                level: '2',
            },
            {
                question: '',
                answers: [],
                correct: '',
                level: '3',
            },
            {
                question: '',
                answers: [],
                correct: '',
                level: '4',
            },
            {
                question: '',
                answers: [],
                correct: '',
                level: '5',
            }
        ]
    },
    {
        genre: "Country",
        questions: [
            {
                question: '',
                answers: [],
                correct: '',
                level: '1',
            },
            {
                question: '',
                answers: [],
                correct: '',
                level: '2',
            },
            {
                question: '',
                answers: [],
                correct: '',
                level: '3',
            },
            {
                question: '',
                answers: [],
                correct: '',
                level: '4',
            },
            {
                question: '',
                answers: [],
                correct: '',
                level: '5',
            }
        ]
    },
    {
        genre: "HipHop",
        questions: [
            {
                question: '',
                answers: [],
                correct: '',
                level: '1',
            },
            {
                question: '',
                answers: [],
                correct: '',
                level: '2',
            },
            {
                question: '',
                answers: [],
                correct: '',
                level: '3',
            },
            {
                question: '',
                answers: [],
                correct: '',
                level: '4',
            },
            {
                question: '',
                answers: [],
                correct: '',
                level: '5',
            }
        ]
    },
    {
        genre: "Pop",
        questions: [
            {
                question: '',
                answers: [],
                correct: '',
                level: '1',
            },
            {
                question: '',
                answers: [],
                correct: '',
                level: '2',
            },
            {
                question: '',
                answers: [],
                correct: '',
                level: '3',
            },
            {
                question: '',
                answers: [],
                correct: '',
                level: '4',
            },
            {
                question: '',
                answers: [],
                correct: '',
                level: '5',
            }
        ]
    },
    {
        genre: "Metallic",
        questions: [
            {
                question: '',
                answers: [],
                correct: '',
                level: '1',
            },
            {
                question: '',
                answers: [],
                correct: '',
                level: '2',
            },
            {
                question: '',
                answers: [],
                correct: '',
                level: '3',
            },
            {
                question: '',
                answers: [],
                correct: '',
                level: '4',
            },
            {
                question: '',
                answers: [],
                correct: '',
                level: '5',
            }
        ]
    }
]

function addCategory(category) {
    const column = document.createElement('div')
    column.classList.add('genre-column')

    const genreTitle = document.createElement('div')
    genreTitle.classList.add('genre-title')
    genreTitle.innerHTML = category.genre

    column.append(genreTitle)
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
       
    })
}

jeopardyCategories.forEach(category => addCategory(category))