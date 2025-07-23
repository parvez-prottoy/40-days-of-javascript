console.log("Hello, tapaScript!");
console.log("Welcome to 40 Days of JavaScript!");
document.write("Check the browser console for a message!");

/* 
    ! async অ্যাট্রিবিউট

    - JS ফাইল HTML এর সাথে সাথে ডাউনলোড হবে

    - ডাউনলোড শেষ হলে তাৎক্ষণিক এক্সিকিউট হবে

    - HTML রেন্ডার থেমে যাবে JS রান করার সময়
*/
/* 
    ! defer অ্যাট্রিবিউট

    - JS ফাইলও HTML এর সাথে সাথে ডাউনলোড হবে

    - কিন্তু HTML পুরোপুরি লোড শেষ হওয়ার পর এক্সিকিউট হবে

    - DOM পুরো তৈরি হয়ে গেলে JS রান হবে
*/

document.getElementById("div").innerText = "This is a div element!";
