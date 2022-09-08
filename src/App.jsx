import "./App.css";
import CheckoutBtn from "./components/CheckoutBtn";

function App() {
    return (
        <div className="App">
            <CheckoutBtn text="Checkout" btnStyle="btn btn-success" />
            <CheckoutBtn text="login" btnStyle="btn btn-primary" />
            <CheckoutBtn text="delete" btnStyle="btn btn-danger" />
        </div>
    );
}

export default App;
