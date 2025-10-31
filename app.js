async function fetchUsersAndSummarize() {
  // Function declaration
  const data = fetch("https://jsonplaceholder.typicode.com/users"); // Fetch data
  data
    .then((response) => {
      // Runs if successful
      if (!response.ok) {
        throw new Error(`The error is: ${response.status}`); // Throws error if response is not ok
      } else {
        return response.json(); // Parses response as JSON if response is ok
      }
    })
    .then((msg) => {
      // Then chain to process data
      const dataWeWant = msg // Processed data
        .filter((item) => item.address.city.charAt(0) === "C") // Filter users from cities starting with 'C'
        .map((user) => ({
          // Map to only id, name, and company name
          id: user.id,
          name: user.name,
          companyName: user.company.name,
        }));
      const finalData = dataWeWant.forEach((user) => {
        // Create summary log for each user residing in cities starting with 'C'
        console.log(`
          User ID: ${user.id}
          Name: ${user.name} 
          Works at: ${user.companyName}`); // Log user details
      });
      console.table(dataWeWant);
      console.log(finalData);
    })
    .catch((err) => console.log(err));
}

async function successDemonstration() {
  // Function to demonstrate success
  const data = fetch("https://jsonplaceholder.typicode.com/users"); // Fetch data
  data
    .then(
      // Runs if successful... which is expected here as long as there are no errors
      console.log(
        "From success demonstration: As expected, here I am as long as there are no errors :)"
      )
    )
    .catch(
      console.log(
        // Will not run in this case unless there's an error
        "From success demonstration: I'll never run as long as there are no errors!"
      )
    );
}
async function failureDemo() {
  // Function to demonstrate failure
  const data = fetch("https://jsonplaceholder.typicode.com/u5ers"); // Invalid URL to trigger failure
  data
    .then(
      console.log(
        // Not expected to run unless the link becomes valid
        "From failure demonstration: I'll never run as long as that link remains invalid!"
      )
    )
    .catch(
      console.log(
        // Expected to run as long as there's an error
        "From failure demonstration: As expected, here I am as long as that link remains invalid :)"
      )
    );
}
fetchUsersAndSummarize(); // Call the main function
successDemonstration(); // Call the success demonstration function
failureDemo(); // Call the failure demonstration function
