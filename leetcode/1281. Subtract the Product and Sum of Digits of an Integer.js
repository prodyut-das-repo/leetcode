/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    n = n.toString().split('');
    return n.reduce((a,b)=> a * b) - n.reduce((a,b)=> Number(a) +  Number(b));
  };