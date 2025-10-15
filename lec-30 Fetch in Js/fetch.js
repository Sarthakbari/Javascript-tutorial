fetch("https://github.com/Sarthakbari")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.error("ERORR!: Something went wrong!", e);
  });