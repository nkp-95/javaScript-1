var eP = 10;    //에스프레소
var mP = 170;   //우유
var csP = 50;   //초코시럽
var wpcP = 60;  //휘핑

var latte = eP + mP;
var mocha = latte + csP;
var whipppingMocha = mocha + wpcP;

// 에스프레소 칼로리   -> 10
console.log(eP + "kCal");
//라떼 칼로리 => 에스프레소 + 우유  -> 180
console.log((eP+mP) + "kCal");
//모카 칼로리  => 에스프레소 + 초코시럽 + 우유 -> 230
console.log((eP+csP + mP) + "kCal");
//모카(휘핑 추가) 칼로리 -> 에스프레소 + 초코시럽 + 우유 + 휘핑크림 -> 290
console.log((eP + csP + mP + wpcP) + "kCal");