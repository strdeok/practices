function 내함수(a: number): number {
  return a * 2;
}

console.log(내함수(2)); // 4

function 내함수2(a: number): void {
  return a * 3; // 이러면 오류남. void는 return 방지 장치 같은 거임
}

// 파라미터는 옵션임. 할려면 ? 붙이기
// ? = number | undefined랑 똑같은 의미
function 내함수3(a?: number) {}

내함수3(1); // 가능
내함수3(); // 가능
내함수3("밥"); // 불가능

function 내함수4(a?: number | string) {
  return a + 3; // 안되는 이유? => 꼭 하나로 지정해줘야 됨
}

function 내함수5(a?: number): number {
  return a * 3; // a가 없을수도 있잖슴~~. 정확히 하라고
}

// 숙제1 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
// 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
function 숙제1(a?: string) {
  if (a) {
    console.log("하이" + a);
  } else {
    console.log("이름이 없음");
  }
}

// 숙제2. 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.

function 숙제2(a: string | number) {
  return a.toString().length;
}

// 숙제3. 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
// 1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다.

// 2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다.

// 3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.

function 숙제3(월소득: number, 집보유여부: boolean, 매력점수: string): number {
  let 집점수 = 0;
  let 매력지수 = 0;
  if (집보유여부) {
    집점수 = 500;
  }
  if ((매력점수 = "상")) {
    매력지수 = 100;
  }
  let 점수 = 월소득 * 1 + 집점수 + 매력지수;
  if (점수 >= 600) {
    return 점수;
  }
}

export default function 문제2() {
  return <></>;
}
