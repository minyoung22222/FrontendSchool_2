import MyRouter from "./Router";
import {useEffect, useState} from "react";
import { authService } from "../fBase"

function App() {
  console.log(authService.currentUser);
  const [isLogin, setIsLogin] = useState(false);
  const [init, setInit] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      console.log(user);
      if(user){
        setIsLogin(true);
      } else{
        setIsLogin(false);
      }
      setInit(true);
    })
  })

  return(
    init ? <MyRouter isLogin={isLogin}></MyRouter> : 'ㄹㅗㄷㅣㅇㅈㅜㅇ'
  )
}

export default App;