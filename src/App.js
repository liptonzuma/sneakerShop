// import Advert from './components/Advert';
import Footer from './components/Footer';
import Brands from './components/products/Brands';
import Products from './components/products/Products';
import Navbar from './components/Navbar'
import product from './products.json'
import { useEffect ,useState } from 'react';
import Subscribe from './components/Subscribe';
import LandingPage from './components/LandingPage';
import Advert from './components/Advert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import AOS from 'aos'
import 'aos/dist/aos.css'
import CartItems from './components/CartItems';
import Notification from './components/Notification';
import ProductDetails from './components/products/ProductDetails';

function App() {
  const [selectedItems,setSelectedItems]=useState([]) //items selected for the cart
  const [brand,setBrand]=useState()
  const [products,setProducts]=useState()
let [items,setItems]= useState(selectedItems.length)
const [itemDetails,setItemDetails] = useState(null)
const [notification,setNotification]= useState('')
const [show,setShow]=useState(false)


  const filterProducts=(brand)=>{
    if(brand==='All' || brand=== undefined){
     setProducts(product)
     return;
    }
     setProducts(product.filter(e=>e.brand === brand));
     return;
}
  const handleActiveClass = (e)=>{
    const active = document.querySelectorAll('.active');
    active.forEach(el=> el.classList.remove('active'))
    e.target.classList.add('active');
    setBrand(e.target.textContent);
    filterProducts(brand)
     return;
  }
  
const getProductDetails=(e)=>{
  const itemImage =e.target.src
  const res=itemImage.split("/").slice(3,6).join("/")
  const item = product.filter(e=> e.image === res);
  setItemDetails(item[0])
}

  useEffect(()=>{
    AOS.init({
      duration:700,
    })
    filterProducts(brand);
  },[brand,selectedItems,itemDetails])


  return (
    <Router>
    <div className="App">
       
      <Navbar items={items} show={show}/>
      <Switch>
        <Route path="/sneakerShop/">
      <LandingPage />
      <Advert />
      <Products
       setItems={setItems} items={items}
        product={products? products :product }
        handleActiveClass={handleActiveClass}
        setSelectedItems={setSelectedItems}
        selectedItems={selectedItems}
        getProductDetails={getProductDetails}
         />
      <Brands />
      <Subscribe />
      <Footer/>
      </Route>
      <Route path="/sneakerShop/cart">
      <CartItems 
      selectedItems={selectedItems}
       product={product}
       setSelectedItems={setSelectedItems}
       setItems ={setItems}
       setNotification={setNotification}
       setShow={setShow}
       />
      </Route>
      <Route path="/sneakerShop/notification">
        <Notification notification={notification}  />
      </Route>
      <Route path="/sneakerShop/product">
        <ProductDetails itemDetails={itemDetails} />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
