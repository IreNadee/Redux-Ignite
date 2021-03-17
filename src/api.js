const base_url = "https://api.rawg.io/api/";

function currYear() {
  let year = new Date().getFullYear();
  return year;
}

function currMonth() {
  let month = new Date().getMonth() + 1;
  return month;
}
function currDate() {
  let date = new Date().getDate();
  return date;
}

function getNeedDate(separator = "", t) {
  return `${currYear() + t}${separator}${
    currMonth() < 10 ? `0${currMonth()}` : `${currMonth()}`
  }${separator}${currDate() < 10 ? `0${currDate()}` : `${currDate()}`}`;
}

const thisYearDate = getNeedDate("-", 0);
const lastYearDate = getNeedDate("-", -1);
const nextYearDate = getNeedDate("-", 1);

const popular_games = `games?dates=${lastYearDate},${thisYearDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${thisYearDate},${nextYearDate}&ordering=-added&page_size=10`;
const newGames = `games?dates=${lastYearDate},${thisYearDate}&ordering=-relesed&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;
export const gameDetailURL = (game_id) => `${base_url}games/${game_id}`;
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots`;
export const searchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=9`;
