import './App.css'

function Header(props) {
  return(
    <div>
      main
    </div>
  )
}

function Menu(props) {
  return(
    <div>
      menu
    </div>
  )
}

function Section(props) {
  return(
    <div>
      section
    </div>
  )
}

function Footer(props) {
  return(
    <div>
      footer
    </div>
  )
}

function App() {
  return (
    <div>
      <div>
        <Header />
        <div>
          <Menu />
        </div>
      </div>
      <div>
        <Section />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;