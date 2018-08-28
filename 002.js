/*
di multidimensi array, yang harus student achieve:
- forming sebuah array multidimensi
- bisa mengakses isi terdalam dari array multidimensi
- bisa menambahkan element ke dalam array multidimensi, ke dimensi yang tepat
*/

/*
--------------
DIGITS GROUPER
--------------
PROBLEM
=======
digitsGrouper adalah sebuah function yang menerima array of number 1 dimensi.
Function akan membentuk array dua dimensi dimana dimensi pertama akan mengelompokkan 
angka-angka di array tadi sesuai jumlah digit nya.
Group akan berurut. posisi pertama untuk angka 1 digit, posisi kedua untuk angka
 2 digit, dan seterusnya, hingga maksimal untuk angka 4 digit.
Contoh:
array of numbers: [1, 12, 1234, 13, 0, 88, 123, 456]
proses:
satu digit -> 1, 0
dua digit -> 12, 13, 88
tiga digit -> 123, 456
empat digit -> 1234
output:
[
  [1, 0],
  [12, 13, 88],
  [123, 456],
  [1234],
]
RULES
=====
Dilarang menggunakan method map, filter, dan reduce.
SERTAKAN PSEUDOCODE ATAU ALGORITHMA
*/

/**
 * PSEUDO CODE
 * 
 * DEFINE FUNCTION `digitsGrouper('numbers')`
 *  STORE 'lengths' WITH 'empty array'
    STORE 'result' WITH 'empty array'
    STORE 'temp' WITH 'empty array'
 * 
 *  STORE i WITH 0
 *  WHILE i less than numbers.length
 *     SET lengths. WITH 'push array of numbers[i].length'
 *      'i' ADD by 1
 *  END WHILE
 *  
 *  STORE maxLength = lengths[0] ;
 * 
 *  STORE i WITH 0
 *  WHILE i less than lengths.length
 *    IF maxLength less than lengths[i]) {
          SET maxLength WITH lengths[]
      END IF
      i ADD by 1
 *  END WHILE
 * 
 * STORE i WITH 0
 * STORE j WITH 0
 *  WHILE i less than maxLength
 *      WHILE j less than numbers.length
 *          STORE num WITH 'numbers[j]-to-string';
       
       IF num.length equals to i) {
           SET temp WITH push an array 'num'-to-number;          
       END IF
 *          j ADD by 1
 *      END WHILE
    *   SET 'result' WITH push array 'temp'
        SET temp WITH 'empty array'
 *  i ADD by 1
 *  END WHILE
 *   return 'result'
 * END FUNCTION
 * DISPLAY digitsGrouper ('ANY VALUE')
 */

function digitsGrouper(numbers) {  
    var lengths = [];
    var result = []
    var temp = [];

  for (var i = 0; i < numbers.length; i++) {
  lengths.push(numbers[i].toString().length)
  }

  
  var maxLength = lengths[0] ;
  for (var j = 0; j < lengths.length; j++) {
      if (maxLength < lengths[j]) {
          maxLength =lengths[j]
      }
  }
  //console.log(maxLength)

  for (var i = 1; i <= maxLength; i++) {     
      for (var j = 0; j < numbers.length; j++) {       
        var num = numbers[j].toString();
       // console.log(num)
       if (num.length === i) {
           temp.push (Number(num));          
       }
    }   
      result.push(temp)
      temp = []
     
  }
  return result
  //console.log(temp)
  
}

console.log(digitsGrouper([1, 12, 13, 0, 88, 123, 456])); // [ [ 1, 0 ], [ 12, 13, 88 ], [ 123, 456 ], [] ]
console.log(digitsGrouper([1234, 8, 2, 543, 1, 11, 222, 7654])); // [ [ 8, 2, 1 ], [ 11 ], [ 543, 222 ], [ 1234, 7654 ] ]
console.log(digitsGrouper([1111, 1, 6, 5, 5, 555, 111, 11, 55, 5555])); // [ [ 1, 6, 5, 5 ], [ 11, 55 ], [ 555, 111 ], [ 1111, 5555 ] ]
console.log(digitsGrouper([])); // [ [], [], [], [] ]
console.log(digitsGrouper([0, 00, 000, 0000])); // [ [ 0, 0, 0, 0 ], [], [], [] ]