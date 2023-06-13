const compteur = <HTMLButtonElement> document.querySelector('#compteur') 
let i = 0 ;

var increment = function (e: Event)  {
    e.preventDefault()
    i++ ;
    const span = compteur?.querySelector('span')
    if (span) {
        span.innerText = i.toString()
    }
}

compteur?.addEventListener("click", increment)