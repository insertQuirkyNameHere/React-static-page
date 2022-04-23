import Header from "./React/Header"
import MainContent from "./React/MainContent"
import Footer from "./React/Footer"

function Page(){
    return (
        <div>
            <Header />
            <MainContent />
            <Footer></Footer>
        </div>
    )
}


ReactDOM.render(<Page />, document.querySelector("#root"))