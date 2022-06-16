import React, { useState } from 'react';

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    alert(`id : ${id}, pw : ${pw}`);
  };

  const handleLoginInput = (e) => {
    console.log("id", e.target.value);
    setId(e.target.value);
  };

  const handlePasswordInput = (e) => {
    console.log("pw", e.target.value);
    setPw(e.target.value);
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <label>
        아이디 : <input type="text" onChange={handleLoginInput} />
      </label>
      <label>
        비밀번호 :
        <input type="password" onChange={handlePasswordInput} />
      </label>
      <button type="submit">로그인</button>
    </form>
  );
};


const Greeting = () => {
  const [message, setMessage] = useState('여기를 주목@@')
  const onMouseEnter = () => {
    console.log("안녕하세요!");
    setMessage('hello!')
  };

  const onMouseLeave = () => {
    console.log("안녕히가세요!");
    setMessage('bye~!')
  };

  return (
    <div>
      <p onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        여기에 마우스를 올려보세요!
      </p>
      <div>{message}</div>
    </div>
  );
};

function Resume(props) {
  const [like, setLike] = useState(0);

  function handleclickLike() {
    setLike(like + 1)     // like = like+1
      console.log(like);
  }

  let heart = like%2===1?'❤️':''

  return(
      <div>
          <button onClick={handleclickLike}>{heart?heart:''} {like} ❤️</button>
          <span></span>
      </div>
  )
}

function App() {
  return (
    <div>
      <h1>App.js test1</h1>
      <p>App.js test2</p>
      <Resume />
      <Greeting />
      <Login />
    </div>
  );
}


export default App;
