//===========================================
// 1-Funksiya yozing, u berilgan sonning juft yoki toq ekanligini aniqlasin.
// function num(son){
// if(son%2==0){
//     return"Juft son"
// }else{
//     return"Toq son"
// }
// }
// console.log(num(5))
// console.log(num(7));

//===========================================
// 2-Funksiya yozing, u berilgan sonning musbat, manfiy yoki nol ekanligini aniqlasin.
// function num(son){
// if(son==0){
//     return"Nolga teng"
// }else{
//     if (son > 0) {
//   return "Musbat son";
// } else {
//   return "Manfiy son";
// }}
// }
// console.log(num(-5))
// console.log(num(5));
// console.log(num(0))

//===========================================
//3-Funksiya yozing, u berilgan ikki sondan kattasini qaytarsin.
// function num (son1,son2){
//     if(son1>son2){
//         return`Kattasi: ${son1}`
//     }else{
//         return`Kattasi: ${son2}`
//     }
// }
// console.log(num(9,81))

//===========================================
//4-Funksiya yozing, u uchta sondan eng kattasini aniqlasin.

// function num(son1,son2,son3){
//     return Math.max(son1,son2,son3)
// }
// console.log(num(3,6,9))

//===========================================
//5-Funksiya yozing, u berilgan sonning 3 ga bo‘linishini aniqlasin.
// function num(son){
//     if(son%3==0){
//         return "Berilgan son 3 ga bo'linadi."
//     }else{
//         return "Berilgan son 3 ga bo'linmaydi.";
//     }
// }
// console.log(num(9))

//===========================================
//6-Funksiya yozing, u berilgan sonning kvadratini qaytarsin.
// function num(son){
//     return son**2
// }
// console.log(num(40))

//===========================================
//7-Funksiya yozing, u ikki sonning ko‘paytmasini hisoblasin.
// function num(son1,son2){
//     return son1*son2
// }
// console.log(num(4,2))

//===========================================
// 8-Funksiya yozing, u berilgan sonni 1 dan boshlab o‘sha songacha bo‘lgan barcha sonlarning yig‘indisini hisoblasin.
// function num(son){
//     let sum=0
//     for(let i=1;i<=son;i++){
//         sum+=i
//     }
//     return sum
// }
// console.log(num(4))

//===========================================
//9-Funksiya yozing, u 1 dan 10 gacha bo‘lgan sonlarning ko‘paytmasini qaytarsin.
// function num(){
//     let sum = 1;
//     for(let i=1;i<=10;i++){
//         sum*=i
//     }
//     return sum
// }
// console.log(num())

//===========================================
//10-Funksiya yozing, u berilgan sondan boshlab 1 ga kamaytirib chiqaradi.
// function num(son){
//     for(let i=son;i>=1;i--){
//         console.log(i)
//     }
// }
// (num(19))

//===========================================
//11-Funksiya yozing, u berilgan sonni faqat juft bo‘lsa ekranga chiqaradi.
// function num(son){
//     if(son%2==0){
//         return son
//     }else{
//         return""
//     }
// }
// console.log(num(5))

//===========================================
//12-Funksiya yozing, u berilgan ikki sondan kattasini ternary operator yordamida aniqlasin.
// function num(son1,son2){
//     son1>son2 ? console.log(`Kattasi: ${son1}`): console.log( `Kattasi: ${son2} `)
// }
// num(8,50)

//===========================================
//13-Funksiya yozing, u berilgan son 5 ga va 3 ga bo‘linishini tekshiradi.
// function num(son){
//     son%15==0 ? console.log("3 va 5 ga bo'linadi") : console.log("3 va 5 ga bo'linmaydi")
// }
// num(301)

//===========================================
//14-Funksiya yozing, u berilgan sonning kvadrati va kubini qaytaradi.
// function num(son){
//     console.log( son**2)
//     console.log( son**3)
// }
// num(2)

//===========================================
//15-Funksiya yozing, u 1 dan 100 gacha bo‘lgan faqat juft sonlarni ekranga chiqaradi.
// function num(){
//     for(let i=1;i<=100;i++){
//         if(i%2==0){
//             console.log(i)
//         }
//     }
// }
// num()

//===========================================
//16-Funksiya yozing, u 1 dan n gacha bo‘lgan toq sonlarni ekranga chiqaradi.
// function num(son){
//     for(let i=1;i<=son;i++){
//         if(i%2!=0)
//             console.log(i)
//     }
// }
// num(10)

//===========================================
//17-Funksiya yozing, u kiritilgan sonning faktorialini hisoblaydi.
// function num(son){
//     let sum=1
//     for(let i=1;i<=son;i++){
//         sum*=i
//     }
//     return sum
// }
// console.log(num(5))

//===========================================
//18-Funksiya yozing, u kiritilgan sonni 10 ga bo‘lgandagi qoldiqni qaytaradi.
// function num(son){
//     let qoldiq=son%10
//     return qoldiq
// }
// console.log(num(139))

//===========================================
//19-Funksiya yozing, u ikki sonni o‘zaro solishtirib, qaysi biri katta ekanligini ekranga chiqaradi.
// function num (son1,son2){
//     if(son1>son2){
//         return`Kattasi: ${son1}`
//     }else{
//         return`Kattasi: ${son2}`
//     }
// }
// console.log(num(9,8))

//===========================================
//20-Funksiya yozing, u 1 dan 50 gacha bo‘lgan barcha sonlarning yig‘indisini qaytaradi.
// function num(){
//     let sum=0
//     for(let i=1;i<=50;i++){
//         sum+=i
//     }
//     console.log(sum);
// }
// num()

//===========================================
//21-Funksiya yozing, u berilgan sonning kvadrat ildizini hisoblaydi (math metodlari ishlatilmasin).
// function num(son){
//    return son**(1/2)
// }
// console.log(num(16))

//===========================================
//22-Funksiya yozing, u ikkita sonning o‘rta arifmetik qiymatini hisoblaydi.
// function num(son1,son2){
//    return (son1+son2)/2
// }
// console.log(num(3,7))

//===========================================
//23-Funksiya yozing, u berilgan son musbatmi yoki manfiy ekanligini if orqali aniqlasin.
// function num(son){
//     if (son > 0) {
//   return "Musbat son";
// } else {
//   return "Manfiy son";
// }
// }
// console.log(num(-5))
// console.log(num(5));

//===========================================
// Funksiya yozing, u berilgan sonni juft sonlar yig‘indisini hisoblaydi.
// 1 dan n sonigacha hisoblab qo'yaverdm
// function num(son){
//     let sum=0
//     for(let i=1;i<=son;i++){
//         if(i%2==0){
//             sum+=i
//         }
//     }return sum
// }
// console.log(num(10))

//===========================================
//25-Funksiya yozing, u ikki sonni qo‘shadi, lekin agar sonlardan biri manfiy bo‘lsa, natijaga 10 qo‘shadi.
// function num(son1,son2){
//     if(son1<0 || son2<0){
//         return son1 + son2 + 10;
//     }else{
//         return son1 + son2;
//     }
// }
// console.log(num(5,-10))

//===========================================
//26-Funksiya yozing, u berilgan ikkita sonni qo‘shadi va ko‘paytiradi, natijalarni alohida qaytaradi.
// function num(son1,son2){
//     console.log(son1+son2)
//     console.log(son1*son2)
// }
// console.log(num(2,4))

//===========================================
//27-Funksiya yozing, u foydalanuvchi kiritgan son 7 ga bo‘linishini aniqlaydi.
// function num(son){
//     if(son%7==0){
//         return "Bu son 7 ga qoldiqsiz bo'linadi"
//     }else{
//         return "Bu son 7 ga bo'linmaydi"
//     }
// }
// console.log(num(25))

//===========================================
//28-Funksiya yozing, u berilgan sonni xuddi shu tartibda 10 marta ko‘paytirib chiqaradi.
//TUSHUNMADM

//===========================================
//29-Funksiya yozing, u ikki sonni ko‘paytiradi, lekin agar sonlardan biri 0 bo‘lsa, natija 1 bo‘ladi.
// function num(son1,son2){
//     if(son1==0 || son2==0){
//         return 1
//     }else{
//         return son1*son2
//     }
// }
// console.log(num(9,5))

//===========================================
//30-Funksiya yozing, u foydalanuvchi kiritgan ikkita sonning modulini hisoblaydi.
// function num(son1,son2){
//     console.log(Math.abs(son1))
//     console.log(Math.abs(son2));
// }
// num(-5,-8)

//===========================================
//31-Funksiya yozing, u foydalanuvchi kiritgan sonni faqat manfiy bo‘lsa ekranga chiqaradi.
// function num(son){
//     if(son<0){
//         return son
//     }else{
//         return ""
//     }
// }
// console.log(num(-8))

//===========================================
//32-Funksiya yozing, u 1 dan 100 gacha bo‘lgan sonlardan faqat 5 ga karrali bo‘lganlarni ekranga chiqaradi.
// function num(){
//     for(let i=1;i<=100;i++){
//         if(i%5==0){
//         console.log(i)
//         }
//     }
// }
// num()

//===========================================
//33-Funksiya yozing, u berilgan ikki sonning yig‘indisini hisoblaydi, agar natija juft bo‘lsa, "Juft" deb qaytaradi.
// function num(son1,son2){
//     let sum=son1+son2
//     if(sum%2==0){
//         return "Juft"
//     }else{
//         return "Toq"
//     }
// }
// console.log(num(3,81))

//===========================================
//34-Funksiya yozing, u foydalanuvchi kiritgan sonning bo‘luvchilarini ekranga chiqaradi.
// function num(son){
//     for(let i=1;i<=son;i++){
//         if(son%i==0){
//             console.log(i)
//         }
//     }
// }
// num(8)

//===========================================
//35-Funksiya yozing, u berilgan sondan kattalik bo‘yicha kichik bo‘lgan barcha toq sonlarni chiqaradi.
// function num(son){
//     for(let i=1;i<son;i++){
//         if(i%2!=0){
//             console.log(i)
//         }
//     }
// }
// num(9)

//===========================================
//36-Funksiya yozing, u berilgan sonni 1 dan 20 gacha bo‘lgan sonlarga bo‘lib, har birining qoldig‘ini chiqaradi.
// function num(son){
//     for(let i=1;i<=20;i++){
//         console.log(son%i)
//     }
// }
// num(25)

//===========================================
//37-Funksiya yozing, u foydalanuvchi kiritgan sonning barcha bo‘luvchilarini hisoblaydi va yig‘indisini qaytaradi.
// function num(son){
//     let sum=0
//     for(let i=1;i<=son;i++){
//         if(son%i==0){
//             sum += i;
//         }
//     }
//     console.log(sum);
// }
// num(5)

//===========================================
//38-Funksiya yozing, u foydalanuvchi kiritgan sonni faqat juft bo‘lsa kvadratini hisoblaydi.
// function num(son){
//     if(son%2==0){
//         return son**2
//     }else{
//         return "Juft son kiriting"
//     }
// }
// console.log(num(4))

//===========================================
//39-Funksiya yozing, u berilgan son 100 dan katta bo‘lsa, uni ikki barobar oshiradi, aks holda 10 qo‘shadi.
// function num(son){
//     if(son>100){
//         return son*2
//     }else{
//         return son+10
//     }
// }
// console.log(num(15))

//===========================================
//40-Funksiya yozing, u foydalanuvchi kiritgan sonning barcha raqamlarini birma-bir chiqaradi.
//  function num(son){
//    while(son>=1){
//       let lastnum=son%10;
//       son = Math.trunc(son / 10);
//       console.log(lastnum);
//   }
// }
// num(12534)

//===========================================
//41-Funksiya yozing, u foydalanuvchi kiritgan ikki sonning o‘zaro karrali ekanligini aniqlaydi.
// function num(son1,son2){
//     if(son1%son2==0 || son2%son1==0){
//         return "Karrali"
//     }else{
//         return "Karrasiz"
//     }
// }
// console.log(num(2,8))

//===========================================
//42-Funksiya yozing, u foydalanuvchi kiritgan sonning raqamlari yig‘indisini hisoblaydi.
// function num(son){
//    let sum=0
//    while(son>=1){
//       let lastnum=son%10;
//       sum+=lastnum;
//       son=(Math.trunc(son/10))
//   }
//      console.log(sum)
// }
// num(1234)

//===========================================
//43-Funksiya yozing, u 1 dan foydalanuvchi kiritgan sondan katta bo‘lgan barcha sonlarni ekranga chiqaradi.
// function num(son){
//     for(let i=son;son<=i;i++)
//         console.log(i)
// }
// console.log(num(12))

//===========================================
//44-Funksiya yozing, u foydalanuvchi kiritgan ikkita sonning bo‘linmasini hisoblaydi (qoldiqsiz).
// function num(son1,son2){
//     if(son1>son2){
//         let sum=son1/son2
//         return `${son1} : ${son2} = ${sum}`
//     }else{
//         let sum=son2/son1
//         return `${son2} : ${son1} = ${sum}`
//     }
// }
// console.log(num(12,6))

//===========================================
//45-Funksiya yozing, u 1 dan n gacha bo‘lgan barcha sonlarning kvadratlarini ekranga chiqaradi.
// function num(son){
//     for(let i=1;i<=son;i++){
//         console.log(i**2)
//     }
// }
// num(6)
// num(8)

//===========================================
//46-Funksiya yozing, u foydalanuvchi kiritgan sonning o‘z-o‘ziga karraligini aniqlaydi.
//HAMMA SON O'ZIGA KARRALI. Savol menimcha xato yoki men tushunmadm!

//===========================================
//47-Funksiya yozing, u foydalanuvchi kiritgan sonning har bir raqamini alohida kvadratga oshiradi va chiqaradi.
// function num(son){
//      while(son>=1){
//         let lastnum=son%10;
//         console.log(lastnum**2);
//         son=(Math.trunc(son/10))
//     }
// }
// num(123456)

//===========================================
//48-Funksiya yozing, u 1 dan 50 gacha bo‘lgan barcha sonlarning faqat toqlari yig‘indisini hisoblaydi.
// function num(){
//     let sum=0
//     for(let i=1;i<=50;i++){
//         if(i%2!=0){
//             sum+=i
//         }
//     }
//     console.log(sum);
// }
// num()

//===========================================
//49-Funksiya yozing, u foydalanuvchi kiritgan sonni teskari tartibda chiqaradi.
// function num(son){
//     let sum = 0;
//     while (son >= 1) {
//       sum = sum * 10 + (son % 10);
//       son = Math.trunc(son / 10);
//     }
//     console.log(sum);
// }
// num(12345)

//===========================================
//50-Funksiya yozing, u foydalanuvchi kiritgan sonning raqamlari yig‘indisi 10 dan katta yoki kichikligini aniqlaydi.
// function num(son){
//    let sum=0
//    while(son>=1){
//       let lastnum=son%10;
//       sum+=lastnum;
//       son=(Math.trunc(son/10))
//       sum+=lastnum
//        if (sum < 10) {
//          return "Raqamlari yig'indisi 10 dan kichik";
//        } else {
//          return "Raqamlari yig'indisi 10 dan katta";
//        }
//   }
// }
// console.log(num(1234))
