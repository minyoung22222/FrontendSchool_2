// import logo from './logo.svg';
import './App.css'

function App() {
  const name = 'hojun'
  function age() {
    return 10
  }

  const 로그인 = true;

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth()+1;
  const day = date.getDate();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();

  return (
    <div>
      <h1 className="one">안녕 라이캣!!</h1>
      <h1 style={{backgroundColor:"black", color:"white"}}>안녕 라이캣!!</h1>
      <h1>hello {name}, {age()}</h1>
      <p>{ 로그인?'로그아웃창' : '로그인창' }</p>
      <div class="div">
        <h1 class="year">년 : {year}</h1>
        <h1>월/일 : {month}/{day}</h1>
        <h1>시간 : {h}시 {m}분 {s}초</h1>
      </div>
    </div>
  );
}

export default App;
