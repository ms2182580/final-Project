import { removeTodo, updateTodo } from "../Store/Slice";
import Header from "./Header";
import RootLayout from "./RootLayout";
import { useSelector, useDispatch } from "react-redux";

export default function Cart() {
  const cartData = useSelector((state) => state?.todos);

  const dispatch = useDispatch();
  const removeItem = (deleteItem) => {
    dispatch(removeTodo(deleteItem));
  };

  const incrementItem = (product) => {
    dispatch(updateTodo({ id: product?.id, change: +product?.price }));
  };

  const decreamentItem = (product) => {
    dispatch(updateTodo({ id: product?.id, change: -product?.price }));
  };
  return (
    <div>
      <Header />
      <div className="Cart-sec">
        <RootLayout />
        <table className="Table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Image</th>
              <th style={{ paddingLeft: "20px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>
                  {product.updatePrice > product?.price
                    ? product.updatePrice?.toFixed(2)
                    : product?.price?.toFixed(2)}
                </td>

                <td>
                  <img src={product.image} alt={product.title} width={"30px"} />
                </td>
                <td>
                  {
                    <div className="button-ADU">
                      <button onClick={() => removeItem(product?.id)}>
                        Remove
                      </button>
                      <button onClick={() => incrementItem(product)}>
                        increase
                      </button>

                      <button onClick={() => decreamentItem(product)}>
                        decrease
                      </button>
                    </div>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
