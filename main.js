const code = Number(process.argv[2]);

// TODO 1: 코드 → 말 변환표를 객체 하나로 만든다. 최소 5개.
//   0 clear sky, 1 mainly clear, 2 partly cloudy, 3 overcast, 45 fog, 61 rain, 71 snow, 95 thunderstorm

console.log(`code: ${code}`);
// TODO 2: 위 줄을 지우고, 표에 있으면 그 말을 초록색으로, 없으면 `unknown code: ${code}` 를 빨간색으로 출력한다.