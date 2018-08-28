/*
================
Treasure Hunter
================
[INSTRUCTIONS]
treasureHunt adalah sebuah function yang menerima satu parameter berupa string.
function akan mereturn berapa banyak jumlah harta karun (simbol) yang ada di dalam string tersebut.
harta karun atau simbol yang dicari adalah:
'!', '@', '#', '$', '%', '^', '&', '*', '(', ')'
Jika tidak ada simbol pada string tersebut, maka function akan mereturn 'harta karun tidak ditemukan'
[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi string & array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!
[EXAMPLE]
treasureHunt("alskdj*lakjsd761^%")
output: 3

1. WAJIB MENULISKAN PSEUDOCODE ATAU ALGORITHMA, JIKA PSEUDOCODE ATAU ALGORITHMA TIDAK MATCH MAKA ATAU TIDAK ADA
   MAKA PROGRAM DIANGGAP TIDAK JALAN
*/

/**
 * PSEUDO CODE
 * 
 * DEFINE FUNCTION `treasureHunt('str')`
 *  STORE 'count' WITH 0
 *  STORE 'harta' WITH 0
 *  STORE 'i' WITH 0
 *  STORE 'j' WITH 0
 * 
 *  WHILE i less than harta.length
 *      WHILE j less than str.length
 *           IF 'harta[i]' equals to 'str[j]' THEN
 *              'count' ADD by 1
 *          'j' ADD by 1
 *      END WHILE
 *      'i' ADD by 1
 * END WHILE
 *  IF 'count' equals to 0 THEN
 *      return 'harta karun tidak ditemukan'
 *  END IF
 * return count
 * END FUNCTION
 * DISPLAY treasureHunt('ANY VALUE')
 */

function treasureHunt(str) {
//   var count = 0;
//   var harta = '!, @, #, $, %, ^, &, *, (, )';
//   for (var i = 0; i < harta.length ; i++) {
//     for (j = 0; j < str.length ; j++) {
//         if (harta[i] === str[j]) {
//             count++
//         }
//     }
//   }
//   if (count === 0) {
//       return 'harta karun tidak ditemukan'
//   }
//   return count;
var kamus = '!, @, #, $, %, ^, &, *, (, )';
if (str.length === 0) {
    return 0
}
var hururfAwal = str[0];
var hurufSisa = str.substring(1);

for (var i =0; i < kamus.length; i++) {
    if (kamus[i] === hururfAwal) {
        return 1 + treasureHunt(hurufSisa)
    }
}
return 0 + treasureHunt(hurufSisa)
}

console.log(treasureHunt("alskdj*lakjsd761^%")); // 3
console.log(treasureHunt("4pa!n!")); // 2
console.log(treasureHunt("bin*ngbin*ang@!*&^")); // 7
console.log(treasureHunt("sandiKhusus")); // harta karun tidak ditemukan
console.log(treasureHunt("ki(*^hasd*&^%ja(*")); // 9