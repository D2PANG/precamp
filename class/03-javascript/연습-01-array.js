let classmates = ["철수", "영희", "훈이"]
// undefined
classmates
// (3) ['철수', '영희', '훈이']
classmates[0]
// '철수'
classmates[1]
// '영희'
classmates[2]
// '훈이'
classmates.includes("훈이")
// true
classmates.includes("맹구")
// false
classmates.length
// 3
classmates.push("맹구")
// 4
classmates.includes("맹구")
// true
classmates
// (4) ['철수', '영희', '훈이', '맹구']
classmates.length
// 4
classmates.pop()
// '맹구'
classmates.length
// 3
classmates
// (3) ['철수', '영희', '훈이']
let developer = ["연봉", "커리어", "노력", "게임", "밤샘"]
// undefined
developer[2]
// '노력'
let dream = ["커리어점프", "성공", "할수있다"]
// undefined
developer.concat(dream)
// (8) ['연봉', '커리어', '노력', '게임', '밤샘', '커리어점프', '성공', '할수있다']
let result = developer.concat(dream)
// undefined
result
// (8) ['연봉', '커리어', '노력', '게임', '밤샘', '커리어점프', '성공', '할수있다']