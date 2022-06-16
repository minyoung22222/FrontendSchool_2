import React, { useState } from "react";

function App() {
  return (
    <NavBar />
  );
}

function About() {
  return (
    <h1>hello about</h1>
  )
}
function Product() {
  return (
    <h1>hello product</h1>
  )
}
function Contact() {
  return (
    <h1>hello contact</h1>
  )
}

const ContentsContainer = ({ listName }) => {
  if(listName === 'about') {
    return <About />
  } else if (listName === 'product') {
    return <Product />
  } else if (listName === 'contact') {
    return <Contact />
  }
}

function NavBar() {
  const [listName, setlistName] = useState("about");
  const checkId = (e) => {
    setlistName(e.target.id);
  };

  return (
    <>
    <nav>
      <ul>
        <li
          id="about"
          style={listName === "about" ? {color: "blue"} : {color : "black"}}
          onClick={checkId}
        >
          about
        </li>
      </ul>

      <ul>
        <li
          id="product"
          style={listName === "product" ? {color: "blue"} : {color : "black"}}
          onClick={checkId}
        >
          product
        </li>
      </ul>

      <ul>
        <li
          id="contact"
          style={listName === "contact" ? {color: "blue"} : {color : "black"}}
          onClick={checkId}
        >
          contact
        </li>
      </ul>
    </nav>
    <ContentsContainer listName={listName} />
    </>
  )
}

export default App;