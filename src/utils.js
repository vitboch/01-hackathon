export function random(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function createScope() {
    const scope = document.createElement('div')
    scope.id = 'scope'
    document.body.append(scope)
}
// click module
export function moduleClick() {
    const clickModule = document.querySelector('.clicks-module__container')
    const timeEl = document.getElementById('timer')
    const scoreHTML = document.querySelector('.clicks-module__score')
    const infoScore = document.getElementById('score')

    let time = 5
    let score = 0
    timeEl.textContent = time + ' сек'
    const timer = setInterval(function () {
        time = --time
        if (time <= 0) {
            clearInterval(timer)
            infoScore.textContent = score
            scoreHTML.classList = 'clicks-module__score'
            if (score <= 10) {
                resultText('можно было и лучше')
            } else if (score <= 20) {
                resultText('у вас хорошо получается')
            } else if (score <= 35) {
                resultText('кнопка еще цела?')
            } else if (score = 40) {
                resultText('Может уже перестанешь заниматься ерундой и начнешь работать?')
            }
        }

        timeEl.textContent = time + ' сек.'
    }, 1000)

    window.addEventListener('mousedown', (event) => {
        event.preventDefault()
        if (time > 0) {
            score++
            console.log('click', score)
        }
    })
}

export function ModuleClickHTML(parent) {
    const container =
        `<div class="clicks-module__container">
                        <div class="clicks-module">
                            <h1 class="clicks-module__title">Кликай быстрей, осталось:</h1>
                        </div>
                        <div
                            <span id="timer">сек.</span>
                        </div>
                        <div class="clicks-module__score hidden">
                            <h3>Ваш счет:</h3>
                            <span id="score"></span>
                        </div>
                        <div class="clicks-module__text hidden">
                            <p></p>
                        </div>
                    </div>`

    parent.insertAdjacentHTML("afterbegin", container)
}

function resultText(text) {
    const resultTextHTML = document.querySelector('.clicks-module__text')
    resultTextHTML.classList = 'clicks-module__text'
    resultTextHTML.textContent = text
}