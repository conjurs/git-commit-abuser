import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";

const makeCommits = (startDate, endDate, n) => {
  if (n === 0) return simpleGit().push();

  const start = moment(startDate);
  const end = moment(endDate);
  const randomDate = moment(start + Math.random() * (end - start));

  const date = randomDate.format();

  const data = {
    date: date,
  };
  console.log(date);
  jsonfile.writeFile(path, data, () => {
    simpleGit().add([path]).commit(date, { "--date": date }, makeCommits.bind(this, startDate, endDate, --n));
  });
};

const startDate = "YYYY-MM-DD"; // Change this to your desired start date
const endDate = moment().format("YYYY-MM-DD"); // Change this to your desired end date (default is today)
const numberOfCommits = xx; // Change this to the number of commits you want

makeCommits(startDate, endDate, numberOfCommits);
