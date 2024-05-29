import Image from "next/image";
import food0 from "/public/food0.png";
import food1 from "/public/food1.png";
import food2 from "/public/food2.png";

export default function List() {
  let products = ["Tomatoes", "Pasta", "Coconut"];
  let food = [food0, food1, food2];

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {products.map((product, idx) => {
        return (
          <div className="food" key={product}>
            <Image
              src={food[idx]}
              width="auto"
              height="auto"
              className="food-img"
            />
            <h4>{product} $40</h4>
          </div>
        );
      })}
    </div>
  );
}

function CartItem() {
  return (
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
