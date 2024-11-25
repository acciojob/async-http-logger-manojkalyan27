
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((res)=>res.json())
.then((res)=>{
	console.log(res);
})
.catch((error) => {
    console.error("Error fetching the API:", error); // Handle errors
  });