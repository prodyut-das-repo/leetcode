/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let n = s.length;
    let m = t.length;
    if (n === 0 && m !== 0) return true;
    if (n !== 0 && m === 0) return false;
    if (n === 0 && m === 0) return true;
    let x=0, y =0;
     while (x<n && y<m){
         if(s[x]===t[y]){
             x++;
             y++;
         }
         else{
             y++;
         }
     }
     return x===n;
 };