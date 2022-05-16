const createPost = async (post) => {

    fetch(`/api/post`, {
        method: "POST",
        body: JSON.stringify(post),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then(response => response.json())
    .then(json => console.log(json))
    .catch(err=>console.log(err))

  
};