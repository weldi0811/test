var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
var yesterday = new Date(new Date().setDate(new Date().getDate()-1));
var tomorrow = new Date(new Date().setDate(new Date().getDate()+1));
var today = new Date(new Date().setDate(new Date().getDate()));

var today = new Date ()
var tomorrow = new Date ()
var yesterday = new Date ()

console.log('hari ini tanggal ' +today.getDate + '-' +(today.getMonth() +1) + '-' + today.getFullYear)

console.log('hari ini ' +today)
console.log('kemarin ' +yesterday)
console.log('besok ' +tomorrow)