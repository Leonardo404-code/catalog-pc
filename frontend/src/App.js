import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Creadits } from "./pages/Credits";
import { NewItem } from "./pages/NewItem";
import AsideBar from "./components/AsideBar";
import GlobalStyle, { Container } from "./styles/globals";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import { Payment } from "./pages/Payment";
import { AddPhoto } from "./pages/AddPhoto";

function App() {
  return (
    <>
      <BrowserRouter>
        <ProductProvider>
          <CartProvider>
            <AsideBar />
            <GlobalStyle />
            <Container>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/credits" component={Creadits} />
                <Route exact path="/cart" component={Cart} />
                <Route path="/new_item/" component={NewItem} />
                <Route path={"/add_photo"} component={AddPhoto} />
                <Route path="/payment" component={Payment} />
              </Switch>
            </Container>
          </CartProvider>
        </ProductProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
