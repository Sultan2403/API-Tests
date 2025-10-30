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

async function successDemonstration() {
  const data = fetch("https://jsonplaceholder.typicode.com/users");
  data
    .then(
      console.log(
        "From success demonstration: As expected, here I am as long as there are no errors :)"
      )
    )
    .catch(
      console.log(
        "From success demonstration: I'll never run as long as there are no errors!"
      )
    );
}
async function failureDemo() {
  const data = fetch("https://jsonplaceholder.typicode.com/users");
  data
    .then(
      console.log(
        "From failure demonstration: I'll never run as long as that link remains invalid!"
      )
    )
    .catch(
      console.log(
        "From failure demonstration: As expected, here I am as long as that link remains invalid :)"
      )
    );
}
fetchUsersAndSummarize();
successDemonstration();
failureDemo();
