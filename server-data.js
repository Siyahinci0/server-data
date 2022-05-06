function getData() {

    let userid = document.getElementById("userid")
    let id = document.getElementById("id")
    let title = document.getElementById("title")
    let completed = document.getElementById("completed")

    fetch('https://jsonplaceholder.typicode.com/todos/1') 
        .then(response => response.json()
        .then(data => {
            userid.innerHTML = data.userId;
            id.innerHTML = data.id;
            title.innerHTML = data.title;
            completed.innerHTML = data.completed;
        })
        );

}

function loadPosts(){

    let table = "<table>"
    + "<tr>"
    + "<th>Id</th>"
    + "<th>UserId</th>"
    + "<th>Title</th>"
    + "<th>Body</th>"
    + "</tr>";

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data =>
        {
            for(let x=0; x< data.length; x++){

                let post = data[x];

                table += "<tr>"
                + "<td><h3>" + post.id + "</h3></td>"
                + "<td>" + post.userId +"</td>"
                + "<td><h4>" + post.title + "</h4></td>"
                + "<td>" + post.body + "</td>"
                + "</tr>"

            }
        }
        )
    .then(()=> {
        table += "</table>";
        let content = document.getElementById("content");
        content.innerHTML = table;
    })

}