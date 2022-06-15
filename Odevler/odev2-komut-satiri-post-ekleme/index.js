const posts = [
    {
        title : "Blog post 1",
        author : "Burak",
        readingTime : "5m",
    },
    {
        title : "Blog post 2",
        author : "Burak",
        readingTime : "1m",
    }
]

function addPost(post){
    posts.push(post);
}

addPost({title : "deneme post",author : "Aynur", readingTime : "10m"});

console.log(posts);