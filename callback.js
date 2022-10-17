class Counter {
  constructor(runEveryFiveTimes) {
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }

  increase() {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
       this.callback && this.callback(this.counter);
       // 전달하는 콜백함수가 있으면(this.callback이 undefined가 아니라면) 콜백함수 실행
    }
  }
}

function printNum(num) {
  console.log(`WoW! ${num}`);
}

function alertNum(num) {
  alert(`alert! ${num}`);
}

// const coolCounter = new Counter(); // 콜백함수를 전달하지 않아서 Type Error 발생
// coolCounter.increase();

const printCounter = new Counter(printNum);
const alertCounter = new Counter(alertNum);
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();

alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();

