var sqlite3 = require("sqlite3");
var db = new sqlite3.Database("./gold_medals.sqlite");

const mostWinsInSeason = (country, season) => {
  const seasons = ["Summer", "Winter"];
  if (seasons.includes(season))
    return `SELECT year, COUNT(*) AS count
    FROM GoldMedal
    WHERE country = '${country}'
    AND season = '${season}'
    GROUP BY 1
    ORDER BY 2 DESC
    LIMIT 1;`;
  return null;
};

const mostWinsByMetric = (country, metric) => {
  if (metric)
    return `SELECT ${metric}, COUNT(*) AS count
  FROM GoldMedal
  WHERE country = '${country}'
  GROUP BY 1
  ORDER BY 2 DESC
  LIMIT 1;`;
  return null;
};

const medalistsByGender = (country, gender) => {
  const genders = ["Men", "Women"];
  if (genders.includes(gender))
    return `SELECT COUNT(DISTINCT name) AS count
  FROM GoldMedal
  WHERE country = '${country}'
  AND gender = '${gender}'`;
  return null;
};

/*
Returns a SQL query string that will create the Country table with four columns: name (required), code (required), gdp, and population.
*/

const createCountryTable = () => {
  return `CREATE TABLE Country (
    name text NOT NULL,
    code text NOT NULL,
    gdp integer,
    population integer);`;
};

/*
Returns a SQL query string that will create the GoldMedal table with ten columns (all required): id, year, city, season, name, country, gender, sport, discipline, and event.
*/

const createGoldMedalTable = () => {
  return `CREATE TABLE GoldMedal (
    id integer PRIMARY KEY,
    year integer NOT NULL,
    city text NOT NULL,
    season text NOT NULL,
    name text NOT NULL,
    country text NOT NULL,
    gender text NOT NULL,
    sport text NOT NULL,
    discipline text NOT NULL,
    event text NOT NULL);`;
};

/*
Returns a SQL query string that will find the number of gold medals for the given country.
*/

const goldMedalNumber = country => {
  return `SELECT COUNT(*)
  FROM GoldMedal
  WHERE country = "${country}";`;
};

/*
Returns a SQL query string that will find the year where the given country 
won the most summer medals, along with the number of medals aliased to 'count'.
*/

const mostSummerWins = country => {
  return mostWinsInSeason(country, "Summer");
};

/*
Returns a SQL query string that will find the year where the given country 
won the most winter medals, along with the number of medals aliased to 'count'.
*/

const mostWinterWins = country => {
  return mostWinsInSeason(country, "Winter");
};

/*
Returns a SQL query string that will find the year where the given country 
won the most medals, along with the number of medals aliased to 'count'.
*/

const bestYear = country => {
  return mostWinsByMetric(country, "year");
};

/*
Returns a SQL query string that will find the discipline this country has 
won the most medals, along with the number of medals aliased to 'count'.
*/

const bestDiscipline = country => {
  return mostWinsByMetric(country, "discipline");
};

/*
Returns a SQL query string that will find the sport this country has 
won the most medals, along with the number of medals aliased to 'count'.
*/

const bestSport = country => {
  return mostWinsByMetric(country, "sport");
};

/*
Returns a SQL query string that will find the event this country has 
won the most medals, along with the number of medals aliased to 'count'.
*/

const bestEvent = country => {
  return mostWinsByMetric(country, "event");
};

/*
Returns a SQL query string that will find the number of male medalists.
*/

const numberMenMedalists = country => {
  return medalistsByGender(country, "Men");
};

/*
Returns a SQL query string that will find the number of female medalists.
*/

const numberWomenMedalists = country => {
  return medalistsByGender(country, "Women");
};

/*
Returns a SQL query string that will find the athlete with the most medals.
*/

const mostMedaledAthlete = country => {
  return `SELECT name
  FROM GoldMedal
  WHERE country = '${country}'
  GROUP BY 1
  ORDER BY COUNT(*) DESC
  LIMIT 1;`;
};

/*
Returns a SQL query string that will find the medals a country has won
optionally ordered by the given field in the specified direction.
*/

const orderedMedals = (country, field, sortAscending) => {
  const order = !field ? "" : sortAscending ? `ORDER BY ${field} ASC` : `ORDER BY ${field} DESC`;
  return `SELECT *
  FROM GoldMedal
  WHERE country = '${country}'
  ${order};`;
};

/*
Returns a SQL query string that will find the sports a country has
won medals in. It should include the number of medals, aliased as 'count',
as well as the percentage of this country's wins the sport represents,
aliased as 'percent'. Optionally ordered by the given field in the specified direction.
*/

const orderedSports = (country, field, sortAscending) => {
  return;
};

module.exports = {
  createCountryTable,
  createGoldMedalTable,
  goldMedalNumber,
  mostSummerWins,
  mostWinterWins,
  bestDiscipline,
  bestSport,
  bestYear,
  bestEvent,
  numberMenMedalists,
  numberWomenMedalists,
  mostMedaledAthlete,
  orderedMedals,
  orderedSports
};
