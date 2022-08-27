export function random(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

// create scope
export function createScope() {
    const scope = document.createElement('div')
    scope.id = 'scope'
    document.body.append(scope)
}