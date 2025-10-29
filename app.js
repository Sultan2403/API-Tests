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
      const dataWeWant = msg
        .filter((item) => item.address.city.startsWith("C"))
        .map((user) => ({
          id: user.id,
          name: user.name,
          companyName: user.company.name,
        }));
      const finalData = dataWeWant.forEach((user) => {
        console.log(`
          User ID: ${user.id}
          Name: ${user.name} 
          Works at: ${user.companyName}`);
      });
      console.table(dataWeWant);
      console.log(finalData);
    })
    .catch((err) => console.log(err));
}

fetchUsersAndSummarize();
