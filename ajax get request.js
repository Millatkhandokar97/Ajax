let request = document.getElementById('btn')
let postList = document.getElementById('post')

const URL = 'https://jsonplaceholder.typicode.com/posts'

request.addEventListener('click', function(){
    fetch(URL)

    .then(response => response.json())
    .then(posts => {
        posts.forEach((post, index) => {
            let listItem = listItemGenerator(post, index+1)
            postList.appendChild(listItem)
        })
        let postsList = posts.map(post => 
        listItemGenerator(post))
        // postList.appendChild(...postsList)
    })
    .catch(e => console.log(e.message))
})

function listItemGenerator(item, num){
    let li = document.createElement('li')
    li.className = 'list-group'
    li.innerHTML = `${num}.${item.title} `

    return li
}
