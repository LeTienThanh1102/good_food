import "./order.scss";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
function Order({ visiable, setOrder, infor }) {
  const location = useLocation();
  // const orderProduct = location.state;
  const [number, setNumber] = useState(1);
  const [price, setPrice] = useState();
  useEffect(() => {
    setPrice(infor?.price);
    setNumber(1);
  }, [infor]);
  const handeIncret = () => {
    if (number > 1) {
      setNumber(number - 1);
      setPrice(infor?.price * (number - 1));
    } else {
      alert("bạn cần đặt tối thiểu 1 mặt hàng");
    }
  };
  const handeTang = () => {
    setNumber(number + 1);
    setPrice(infor?.price * (number + 1));
  };
  return (
    <div className={`order ${visiable && "active"}`}>
      <div
        onClick={() => {
          setOrder(false);
        }}
        className="order__overlay"
      ></div>
      <div className="order__cart">
        <div
          onClick={() => {
            setOrder(false);
          }}
          className="order__icon"
        >
          <FontAwesomeIcon className="order__close" icon={faClose} />
        </div>
        <div className="order__img">
          <img src={infor?.img} alt="" className="order__anh" />
        </div>
        <div className="order__information">
          <h2 className="order__store">{infor?.store}</h2>
          <div className="order__mon">
            <span className="order__gt" style={{fontSize:'3rem' }}>Tên Món:</span>
            <span className="order__name">{infor?.name}</span>
          </div>
          <div className="order__size">
            <span className="order__luachon" style={{fontSize:'2.6rem' }}>Size: </span>
            <button className="order__button">M</button>
            <button className="order__button">L</button>
            <button className="order__button">XL</button>
          </div>
          <div className="order__soluong">
            <span style={{fontSize:'2.6rem' }}>Số Lương: </span>
            <button onClick={() => handeIncret()} className="order__mana">
              -
            </button>
            <button className="order__mana">{number}</button>
            <button onClick={() => handeTang()} className="order__mana">
              +
            </button>
          </div>
          <div className="order__price">
            <span className="order__price-text" style={{fontSize:'2.6rem' }}>Giá Bán: </span>
            {price && (
              <h className="order__money">${Math.floor(price * 100) / 100}</h>
            )}
          </div>
          <div className="order__mota">
            <span style={{fontSize:'2.6rem' }}>Mô tả sản phẩm:</span>
            <span style={{fontSize:'2.4rem', padding:'0 12px' }}>
              Phở là đặc sản của Việt Nam, Phở bò được làm rất tỉ mỉ và cầu kì.
            </span>
          </div>
          <div className="order__add">
            <button className="order__cart1">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;