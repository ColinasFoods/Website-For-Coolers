

fetch('http://localhost:3000/temperature' )
.then(response => response.json())
.then(data => {
    
    console.log(data);
})
    .catch(error => {
        console.log('Error:' , error)
    })




