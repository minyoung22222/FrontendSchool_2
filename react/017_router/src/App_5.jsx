import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            {/* 라우트를 감싸줍니다. */}
            <Route 
              path="/" 
              exact 
              component={HomePage}
            />
            <Route 
              path="/about" 
              exact 
              component={AboutPage}
            />
            <Route 
              path="/contact" 
              exact 
              component={ContactPage}
            />
            <Route 
              path="/blog"
              component={BlogPage}
            />
            
        </BrowserRouter>
    );
}

function HomePage(){
  return <h1>hello HomePage</h1>
}

function AboutPage(){
  
  return <h1>hello AboutPage</h1>
}

function ContactPage(){
  return <h1>hello world ContactPage</h1>
}

function BlogPage(){
  return <h1>hello BlogPage</h1>
}



export default App;