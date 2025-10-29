async function fetchUsersAndSummarize(url) {
  const data = fetch(url);
  data
    .then((response) => {
      if (!response.ok) {
        console.error(`Bad response!`);
        return;
      } else {
        const newData = response.json();
        console.log(newData);
        return newData;
      }
    })
    .then((response) => {
      const filteredResponse = response.filter((find) =>
        find.address.city.includes("C".charAt(0))
      );
      console.log(filteredResponse);
    })
    .catch((response) => {
      console.error(`The error is: ${response}`);
      return;
    });
}

async function Success() {
  await fetchUsersAndSummarize("https://jsonplaceholder.typicode.com/users");
}
async function failureDemonstration() {
  await fetchUsersAndSummarize("https://jsonplaceholder.typicode.com/u5ers");
}

console.log(`From succss: ${Success()}`);
setTimeout(() => {
  console.log(`From failure:${failureDemonstration()}`);
}, 10000);
