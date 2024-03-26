document.querySelectorAll('button').forEach(button =>{
    button.addEventListener('click', (e) =>{
        const value = e.target.dataset.value
        console.log(value)
        const ReadableResponse = value === 'yes' ? 'was yes!' : 'was an YES!'
        document.querySelector('#resp').textContent = 'Your response: ' + ReadableResponse
    })
})