let 이름 = "덕"; // 자동 string 지정
let 나이 = 24; // 자동 number 지정
let 출생지 = "서울";

let 좋아하는곡 = {
  제목: "대관람차",
  가수: "qwer",
};

// 왼쪽, 오른쪽 짝맞추기 같은 거임
let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

// union type
let 나: string | number = "deok";
let 기대수명: string | number = 150; // 괄호도 가능

// or은 이렇게 쓰면 됨
var 배열: (number | string)[] = [1, "2", 3];
var 오브젝트: { data: number | string } = { data: "123" };

// any도 있음. 쉴드해제
let 황덕: any = 18;

// 트렌디한 남자라면 unknown을 씀. 대신 타입도 unknown으로 계속 쭉 감
let 황덕2: unknown = 2222;

let 변수1: string = 황덕2; // 이건 쉴드에 막힘
let 변수2: string = 황덕; // 얘는 쉴드 뚫음

// 그렇기 때문에 내가 조작할 변수의 타입을 아는 narrowing  | assertion 스킬을 써야 함

// 숙제 1
let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | undefined | number | boolean)[] = [user, age, married];

// 숙제2
let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

const 에러방지 = [
  이름,
  나이,
  출생지,
  좋아하는곡,
  project,
  나,
  기대수명,
  배열,
  오브젝트,
  변수1,
  변수2,
  철수
];

export default function 문제() {
  return <></>;
}
