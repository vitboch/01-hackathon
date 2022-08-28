export function random(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function createScope() {
    const scope = document.createElement('div')
    scope.id = 'scope'
    document.body.append(scope)
}

export function createModal(modalId) {
    const modal = document.createElement('div')
    modal.id = `${modalId}`
    modal.classList.add('modal')

    const modalCloseButton = document.createElement("button")
    modalCloseButton.classList.add('modal_close-button')
    modalCloseButton.textContent = "X"
    modalCloseButton.style.color = '#0000004C'

    modalCloseButton.addEventListener("click", () => {
        const modal = document.querySelector(`#${modalId}`)
        modal.innerHTML = ''
        modal.remove()
    });

    modal.append(modalCloseButton)
    return modal
}

export function getScope(id = '') {
    return document.querySelector(id)
}
