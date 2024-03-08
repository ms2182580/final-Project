import { NavLink } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <div className=" col-md-2 bg-secondary sidebar">
        <nav>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <NavLink to="/Products" style={{ color: "white" }}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/Cart" style={{ color: "white" }}>
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink to="/EditPro" style={{ color: "white" }}>
                EditPro
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AddNewPro"
                className={"nav-style"}
                style={{ color: "white" }}
              >
                AddNewPro
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default RootLayout;
