import React, { Component } from 'react'


export async function getMoviesFromApiAsync() {
  return fetch('http://hp-api.herokuapp.com/api/characters/students')
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson;
  })
  .catch((error) => {
    console.error(error);
  });
}

// const getMoviesFromApiAsync = async () => {
//   try {
//     const response = await fetch(
//       'https://reactnative.dev/movies.json'
//     );
//     const json = await response.json();
//     return json.movies;
//   } catch (error) {
//     console.error(error);
//   }
// };