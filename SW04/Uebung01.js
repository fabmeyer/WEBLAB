'use strict';

function convertArrayToUpperCase(arr) {
  return new Promise((resolve, reject) => {
    console.log('Wants to convert ' + arr.length + ' strings to UPPERCASE.');
    setTimeout(() => {
      // JS typechecking
      if (arr instanceof Array) {
        let isStringArray = true;
        for (let i = 0; i < arr.length; i++) {
          if (typeof arr[i] !== 'string') {
            isStringArray = false;
          }
        }

        if (isStringArray) {
          let ret = [];
          for (let i = 0; i < arr.length; i++) {
            ret.push(arr[i].toUpperCase());
            console.log(arr[i] + ' => ' + ret[i]);
          }

          resolve(ret);
        } else {
          reject(Error(arr + ' contains fields that are not of type String'));
        }
      } else {
        reject(Error(arr + ' is not of type Array'));
      }
    }, 10);
  });
}

function sortArrayOfStrings(arr) {
  return new Promise((resolve, reject) => {
    console.log('Sorting array: [' + arr + ']');
    setTimeout(() => {
      // JS typechecking
      if (arr instanceof Array) {
        let ret = [];
        ret = arr.sort();
        resolve(ret);
      } else {
        reject(Error(arr + ' is not of type Array'));
      }
    }, 10);
  });
}

function fetch(...args) {
  let promiseArray = [];
  for (let i = 0; i < args.length; i++) {
    promiseArray.push(args[i]);
  }

  Promise.all(promiseArray)
    .then(convertArrayToUpperCase)
    .then(sortArrayOfStrings)
    .then((processedTitles) => {
      processedTitles.forEach((title) => {
        console.log(title);
      });
      console.log('...Promise fulfilled.');
      return promiseArray;
    })
    .catch((err) => {
      console.log(err + ' ...Promise rejected');
    });
}

// fetch('hello', 'sir', 'or', 'madame', 'how', 'are', 'you?');

fetch('hello', 133); // works
