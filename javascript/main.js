/*
hàm built-in
  alert
  console 
  confirm
  prompt
  set timeout
  set interval

*/



var fullName = 'Quang Huy' ;
var age =22;
// alert(fullName);
// alert(age);

// console.log(fullName);

// confirm('xác nhận bạn đủ tuổi');

// prompt('xác nhận bạn đủ tuổi');

// setTimeout(function() {
// alert('thong bao')
// },1000)

// setInterval(function() {
//     console.log('Quang Huy')
// }, 1000);



/*
toán tử số học
  + : cộng
  - : trừ
  * : nhân
  ** : lũy thừa
  / : chia
  % : chia lấy số dư
  ++ : tăng 1 giá trị số
  -- : giảm 1 giá trị số
*/

/*
toán tử ++ --
var a=6
  tiền tố: ++a
     việc 1: +1cho a
     việc 2: trả về a sau khi được +1
  hậu tố:a++
     việc 1: copy biến a -->a=6
     việc 2: cộng 1 cho a,a=a+1=7
     việc 3: trả về a copy

*/

/*
toán tử gán

  toán tử       ví dụ     tương đương
   =            x=y         x=y
   +=           x+=y        x=x+y
   -=           x-=y        x=x-y
   *=           x*=y         x=x*y
   /=           x/=y        x=x/y
   **=          x**=y       x=x**y

*/

/* 
toán tử chuỗi

-->dùng cùng với toán tử số hộc và gán

*/

/*
toán tử so sánh
  == :bằng
  != :không bằng
  >  :lớn hơn
  <  :nhỏ hơn
  >= :lớn hơn hoặc bằng
  <= :nhỏ hơn hoặc bằng

*/
/*
if () {

} else{

}


--khi đưa 6 giá trị sau gán vào biến thì đều false:
    0
    false
    '' hoặc ""
    undefined
    NaN
    null
--còn lại là true
*/

/*
toán tử logic
  && - and
  || - or
  ! - not

  */

/*
kiểu dữ liệu trong javascript
  
--dữ liệu nguyên thủy - primitive data
     =number  --var a = 8;
     =string  --var fullName = 'Quang Huy';
     =boolean  --var isSuccess = true;
     =undefined  --var age;
     =null  --var isNull = null;
     =symbol  --var id = Symbol('id')
  
 --dữ liệu phức tạp - complex data
     =function
         var myFunction = function(){
             alert ('hello');
         }

         --gọi : myFunction();
     

    =object
      --var myObject = {
          name: 'Quang Huy',
          age: 22,
          adress: 'Phú thọ',
          myFunction: function (){

          }
      };

     -- var myArray = [
          'js',
          'php',
          'sql'
      ];


      kiểm tra kiểu dữ liệu
       --console.log(typeof tên_biến)
*/

/*
toán tử so sánh - P2
   ===
   !==
*/


/*
Làm việc với chuỗi: javascript string methods
  
var fullName = 'Quang Huy';

 1.length: kiểm tra độ dài của chuỗi
     console.log(fullName.length)
  2.find index: tìm vị trí của kí tự trong 1 chuỗi
      console.log(fullName.indexOf('Huy', vị trí bắt đầu tìm kiếm-k bắt buộc))  -- nếu không có trả lại là -1
       console.log(fullName.lastIndexOf('Huy')) -- tìm vị trí của 1 từ giống nhau cuối cùng cần tìm trên chuỗi đó
       console.log(fullName.search('Huy')) --giống như indexof nhưng không thêm được vị trí bắt đầu cần tìm và dùng để tìm kiếm theo biểu thức chính quy 
  3.cut string
     console.log(fullName.slice(5,8)) --cắt từ kí tự 5 đến kí tự số 8
     console.log(fullName.slice(0))  --cắt từ đầu đến hết
  4.replace : ghi đè
     console.log(fullName.replace('Quang','Nguyễn')) -- chỉ thay thế chữ quang đứng đầu tiên trong chuỗi
     console.log(fullName.replace(/Quang/g,'Nguyễn')) -- thay thế toàn bộ quang thành nguyễn
  5.convert to upper case : chuyển đổi tất cả chữ thành chữ hoa
       console.log(fullName.toUpperCase())
  6.convert to lower case : chuyển đổi tất cả chữ thành chữ thường
        console.log(fullName.toLowerCase())
  7.trim: loại bỏ kí tự trắng thừa ở 2 đầu của chuỗi
       console.log(fullName.trim())
  8.splip : cắt 1 chuối thành array dựa vào 1 điểm chung nào đó
    var languages = 'js, php, ruby';
     conssole.log(languages.slipt(', '))
    conssole.log(languages.slipt('')) -- cắt từng chữ cái thành array
  9.get a character by index: lấy ra chữ cái tương ứng
      const fullName2 = 'Nguyễn Huy';
         console.log(fullName2.charAt(3))

*/
     
/*
Làm việc với number: javascript number methods 
   var age=18.29;
   to string: chuyển đổi kiểu number thành string 
         var myString = age.toString();
         console.log(typeof myString) --kiểm tra
    to fixed: làm tròn số thâp phân
         console.log(age.toFixed(nhập số cần làm tròn đứng thứ bao nhiêu sau dấu phẩy))
        
         
    
*/
    
/*
Mảng trong javascript - array
  tạo mảng
       var languages = [
         'js',
         'php',
         'ruby',
        ];
  kiểm tra biến có phải dạng array hay không
       console.log(Array.isArray(languages)) --true là đúng
  truy xuất mảng
     độ dài mảng
        console.log(languages.length)
     lấy phần tử theo index(key)
         console.log(languages[2])

*/
/*
làm việc với array: javascript array methods
 var languages = [
         'js',
         'php',
         'ruby',
        ];
  var languages2 = [
         'java',
         'python',
         'c++',
        ];
1.to string: chuyển kiểu array thành string và không thay đổi đc dấu ngăn cách và tự dộng là dấu phẩy
    console.log(languages.toString())
2.join:chuyển kiểu array thành string và thay đổi được dấu ngăn cách
      console.log(languages.join('-'))
3.pop: xóa phần tử cuối mảng và trả về phần tử đã xóa
       console.log(languages.pop())
4.push: thêm phần tử vào cuối mảng và trả về dộ dài mới của mảng
      console.log(languages.push('python','java'))
5.shift: xóa phần tử đầu mảng và trả về phần tử đã xóa
       console.log(languages.shift()) 
6.unshift: thêm phần tử vào đầu mảng và trả về độ dài mới của mảng
       console.log(languages.unshift('java','python'))
7.splicing: xóa, cắt, chèn
    xóa:  languages.splice(1,1)
          languages.splice(vị trí của phần tử cần xóa, số lượng phần tử bị xóa)
    chèn: languages.splice(1,0,'java')
          languages.splice(vị trí của phần tử cần chèn, số lượng phần tử bị xóa, tên phần tử cần chèn)
8.concat: nối các array thành 1 array
   console.log(languages.concat(laguages2))
9.slicing: cắt lấy 1 số phần tử cảu mảng
   console.log(language.slice(1,2))
   console.log(language.slice(vị trí của phần tử bắt đầu cắt,vị trí kết thúc))
   //nếu vị trí kết thúc là 0 thì cắt từ vị trí của phần tử bắt đầu cắt đến hết
   //nếu chỉ cho tham số bằng 0 thì cắt toàn bộ
*/

/*
hàm (function) trong javascript
1.hàm là một khối mã, làm 1 việc cụ thể
2.loại hàm
   built-in
   tự định nghĩa
3.tính chất
   không thực thi khi định nghĩa
   sẽ thực thi khi được gọi
   có thể nhận tham số
   có thể trả về 1 giá trị
4.tạo hàm đầu tiên
  function showDialog(){
    alert('hello')
  }
  //gọi hàm: showDialog();
*/

/*
tham số hàm 
1.tham số
   - kiểu dữ liệu
   - tính private
   - 1 tham số
   - nhiều tham số
2.truyền tham số
   - 1 tham số
   - nhiều tham số
3.arguments
   -  đối tượng arguments
   -  giới thiệu vòng for
*/