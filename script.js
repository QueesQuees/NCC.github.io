  var a = ['one', 'two', 'three', 'tung1', 'four', 'quee', 'five']

  function myFunction(arr) {

      var boo = false;
      var answer = {}
      for (let i = 0; i < arr.length; i++) {
          var numberchar = arr[i].length;
          if (i == 0) {
              answer[numberchar] = [arr[i]]
          } else {
              for (let x in answer) {
                  if (x == numberchar) {
                      answer[numberchar].push(arr[i])
                      boo = false
                      break
                  } else {
                      boo = true
                  }
              }
          }
          if (boo) {
              answer[numberchar] = [arr[i]]

          }
      }
      console.log(answer)
  }

  myFunction(a)


//  test

