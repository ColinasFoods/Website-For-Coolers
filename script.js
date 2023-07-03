var data;

fetch('http://localhost:3000/temperature' )
    .then((response) => response.json())
    .then((json) => {
        data = json;
        console.log(Object.values(data[0][0]));
    });

