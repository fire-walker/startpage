function generator() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            create_element(this.responseText)
        }
    }
    xhttp.open("GET", "https://icanhazdadjoke.com", true)
    xhttp.setRequestHeader("Accept", "text/plain")
    xhttp.setRequestHeader('User-agent', 'https://fire-walker.github.io/startpage')
    xhttp.send()
}

function create_element(joke) {
    let obj = document.createElement('p')
    let parent = document.querySelector('.joke')

    obj.innerText = joke
    parent.appendChild(obj)
    parent.style.opacity = 1
}


generator()