document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'avocados',
            img: 'images/avocados.jpeg'
        },
        {
            name: 'banana',
            img: 'images/banana.jpeg'
        },
        {
            name: 'blueberries',
            img: 'images/blueberries.jpeg'
        },
        {
            name: 'fresa',
            img: 'images/fresa.jpeg'
        },
        {
            name: 'pera',
            img: 'images/pera.jpeg'
        },
        {
            name: 'piña',
            img: 'images/piña.jpeg'
        },
        {
            name: 'manzana',
            img: 'images/manzana.jpeg'

        },
        {
            name: 'sandia',
            img: 'images/sandia.jpeg'

        },
        {
            name: 'avocados',
            img: 'images/avocados.jpeg'
        },
        {
            name: 'banana',
            img: 'images/banana.jpeg'
        },
        {
            name: 'blueberries',
            img: 'images/blueberries.jpeg'
        },
        {
            name: 'fresa',
            img: 'images/fresa.jpeg'
        },
        {
            name: 'pera',
            img: 'images/pera.jpeg'
        },
        {
            name: 'piña',
            img: 'images/piña.jpeg'
        },
        {
            name: 'manzana',
            img: 'images/manzana.jpeg'

        },
        {
            name: 'sandia',
            img: 'images/sandia.jpeg'

        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    //board

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
          const card = document.createElement('img')
          card.setAttribute('src', 'images/blank.png')
          card.setAttribute('data-id', i)
          card.addEventListener('click', flipCard)
          grid.appendChild(card)
        }
      }

    //check for matches

    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('You have clicked the same image!')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }
    //flipcards

    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length ===2) {
          setTimeout(checkForMatch, 500)
        }
      }

    createBoard();
});
