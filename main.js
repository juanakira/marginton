document.querySelector('main').addEventListener('click', onClickMain)

function onClickMain(event){
    let target = event.target
    console.log(target.tagName)
    

    if (target.tagName === 'SECTION'){
        swapClasses(target)
    }
}

function swapClasses(element){
    if (element.classList.contains('marginton-logo')){
        element.classList.remove('marginton-logo')
        element.classList.add('underground-logo')
    } else {
        element.classList.remove('underground-logo')
        element.classList.add('marginton-logo')
    }
}