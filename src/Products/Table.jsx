import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "./Http";
import { useDispatch } from "react-redux";
import { addTodo } from "../Store/Slice";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["Products"],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const addTodoHandler = (e) => {
    dispatch(addTodo(e));
  };
  const handleNavigate = (product) => {
    console.log("Function Data===", product);
    navigate("/EditPro", { state: { product } });
  };
  return (
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
        {data.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>

            <td>
              <img src={product.image} alt={product.title} width={"30px"} />
            </td>
            <td>
              {
                <div className="button-ADU">
                  <button onClick={() => addTodoHandler(product)}>Add</button>
                  <button>Delete</button>
                  <button onClick={() => handleNavigate(product)}>
                    Update
                  </button>
                </div>
              }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
