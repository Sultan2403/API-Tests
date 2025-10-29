async function fetchUsersAndSummarize() {
  const data = fetch("https://jsonplaceholder.typicode.com/users");
  data
    .then((response) => {
      if (!response.ok) {
        throw new Error(`The error is: ${response.status}`);
      } else {
        return response.json();
      }
    })
    .then((msg) => {
      const dataWeWant = msg.filter((item) =>
        item.address.city.startsWith("C")
      );
      console.table(dataWeWant);
    })
    .catch((err) => console.log(err));
}

fetchUsersAndSummarize();
