import { Button } from "react-bootstrap";
import "./ProductCard.scss";
import ProductImage from "../assets/image-removebg.svg";
import Stars from "../assets/Stars.svg";
import Dot from "../assets/Dot.svg";
import Tick from "../assets/tick-circle-one.svg";
import Save from "../assets/save.svg";
import Line from "../assets/line-btn.svg";
import Lock from "../assets/lock-black.svg";
import Visa from "../assets/visa.svg";
import Shop from "../assets/shop-pay.svg";
import PayPal from "../assets/paypal.svg";
import Master from "../assets/mastercard.svg";
import GPay from "../assets/gpay.svg";
import Apple from "../assets/apple-pay.svg";
import Amex from "../assets/amex.svg";
import Satisfaction from "../assets/satisfaction.svg";

const ProductCard = () => {
  return (
    <div className="productCard_Wrapper">
      <h2 className=" d-sm-block d-none">
        <span className="one_Time">ONE TIME ONLY</span> special price for 6
        extra Clarifion for only <span className="each">$14 each</span> ($84.00
        total!)
      </h2>
      <div className="product_Info">
        <div className="product_Image_Wrapper">
          <img src={ProductImage} alt="image" />
        </div>
        <div className="product_Name_Wrapper">
          <div className="product_Name">
            <p>Clarifion Air Ionizer</p>
            <div className="product_Price">
              <p>$180</p>
              <p>$84</p>
            </div>
          </div>
          <div className="stars_Wrapper">
            <img src={Stars} alt="stars" />
          </div>
          <div className="stock_Wrapper">
            <img src={Dot} alt="dot" />
            <p>12 left in Stock</p>
          </div>
          <p className="d-none d-sm-block">
            Simply plug a Clarifion into any standard outlet and replace bulky,
            expensive air purifiers with a simple.
          </p>
        </div>
      </div>
      <p className="d-block d-sm-none product_info_text">
        Simply plug a Clarifion into any standard outlet and replace bulky,
        expensive air purifiers with a simple.
      </p>
      <div className="list_Div">
        <div className="list_wrapper">
          <img src={Tick} alt="list" />
          <p>
            Negative Ion Technology may <span>help with allergens</span>
          </p>
        </div>
        <div className="list_wrapper">
          <img src={Tick} alt="list" />
          <p>
            Designed for <span>air rejuvenation </span>
          </p>
        </div>
        <div className="list_wrapper">
          <img src={Tick} alt="list" />
          <p>
            <span>Perfect for every room</span> in all types of places.
          </p>
        </div>
      </div>
      <div className="save_Wrapper">
        <div>
          <img src={Save} alt="save" />
        </div>
        <p>
          Save <span>53%</span> and get <span>6 extra Clarifision</span> for
          only <span>$14 Each</span>.
        </p>
      </div>
      <div className="discount_Wrapper">
        <Button>Yes - Claim my discount</Button>
        <img src={Line} alt="line" />
      </div>
      <div className="payment_Wrapper">
        <div className="shipping">
          <p>Free shipping</p>
        </div>
        <div className="secure">
          <img src={Lock} alt="lock" />
          <p>Secure 256-bit SSL encryption.</p>
        </div>
        <div className="horizontal_line" />
        <div className="images">
          <img src={Visa} alt="" />
          <img src={Shop} alt="" />
          <img src={PayPal} alt="" />
          <img src={Master} alt="" />
          <img src={GPay} alt="" />
          <img src={Apple} alt="" />
          <img src={Amex} alt="" />
        </div>
      </div>
      <div className="no_Thanks">
        <p>No thanks, I don’t want this.</p>
      </div>
      <div className="satisfaction">
        <img
          src={Satisfaction}
          className="satisfaction_img"
          alt="Satisfaction"
        />
        <p>
          If you are not completely thrilled with your Clarifion - We have a{" "}
          <span>30 day satisfaction guarantee</span>. Please refer to our return
          policy at the bottom of the page for more details. Happy Shopping!
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
