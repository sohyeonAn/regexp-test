const str = `
_소현 010-1234-1234
theabcd@gmail.com
https://www.regexr.com/
The quick brown fox jumps over the lazy dog.
abbcccdddd
hxyp
http://localhost:1234
`

// g := 모든문자 일치
// i := 대소문자 구분 X
// const regexp = new RegExp('the','gi') // 생성자
// const regexp = /the/gi // 리터럴
// console.log(str.match(regexp))


// 메소드 연습
// const regexp = /fox/gi
// // console.log(regexp.test(str))
// console.log(str.replace(regexp, 'AAAA'))
// console.log(str) // replace는 원본을 바꾸지 않음.



// 플래그 연습
// console.log(str.match(/the/gi))
// console.log(str.match(/\.$/gim))


// 패턴 연습
console.log(
  str.match(/d$/gm)
)
console.log(
  str.match(/^t/gim)
)
console.log(
  str.match(/h..p/g)
)
console.log(
  str.match(/dog|fox/g)
)
console.log(
  str.match(/https?/g)
)
console.log(
  str.match(/d{2,}/g)
)
// \w:= 알파벳, 숫자를 포함
// \b:= 숫자, 알파벳이 아닌
console.log(
  str.match(/\b\w{2,4}\b/g)
)
console.log(
  str.match(/[fox]/g)
)
console.log(
  str.match(/[0-9]/g)
)
console.log(
  str.match(/[0-9]{1,}/g)
)
console.log(
  str.match(/[가-힣]{1,}/g)
)
console.log(
  str.match(/\w/g)
)
console.log(
  str.match(/\bf\w{1,}\b/g)
)
console.log(
  str.match(/\d{1,}/g)
)

const h = `  the hello  world   !

`
console.log(
  h.match(/\s/g)
)
console.log(
  h.replace(/\s/g, '')
)
console.log(
  str.match(/.{1,}(?=@)/g)
)
console.log(
  str.match(/(?<=@).{1,}/g)
)
