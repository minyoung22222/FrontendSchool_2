import './App.css'
import Homepage from './pages/homepage/Homepage';
import Login from './pages/login/Login'

function App() {
  const user = {
    login: true,
    id: 'minyoung@weniv.com',
    nickname: '미뇽'
  }

  return (
    <div>
      {user.login ? <Homepage userName={user.id}
      nickname={user.nickname}/> : <Login /> }
    </div>
  );
}

export default App;
