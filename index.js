/**
 * @param {number[]} arr
 * @return {boolean}
 */
var candy = function (ratings) {
    let minCandy = ratings.length;
    let extraCandy = 0;
    for (let i = 0; i < ratings.length; i++) {
      if (i === 0) {
        if (ratings[i] > ratings[i + 1]) {
          console.log("he");
          extraCandy++;
        }
      } else if (i === ratings.length - 1) {
        if (ratings[i] > ratings[i - 1]) {
          console.log("he2");
          extraCandy++;
        }
      } else {
        console.log(ratings[i]);
         if (ratings[i] > ratings[i - 1] || ratings[i] > ratings[i + 1]) {
          //console.log("here2");
          extraCandy++;
        }
      }
      console.log('extra',extraCandy);
      //console.log(Math.max(ratings[i], ratings[i + 1]));
    }
    return minCandy + extraCandy;
  };
  
  const a = candy([1,2,87,87,87,2,1]);
  console.log(a);
  