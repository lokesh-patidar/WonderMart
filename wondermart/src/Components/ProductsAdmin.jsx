import "../AdminStyles/ProductsAdmin.css"
import products from "../datatable.json";
import { AdminSideNavbar } from "./AdminSideNavbar";
import { SingleProductAdmin } from "./SingleProductAdmin";

console.log(products.products);

const ProductsAdmin = () => {
    return (
        <div className="adminProductContainer">
            <div>
                <AdminSideNavbar/>
            </div>
            <div className="admin_products_grid_container">
                {
                    products.products.length && products.products.map((item) => {
                       return (
                            <SingleProductAdmin
                                key={item.id} 
                                brand={item.brand}
                                name={item.name}
                                weight={item.weight}
                                price={item.price}
                                ImgSrc={item.ImgSrc}
                                URL_1={item.URL_1}
                                URL2={item.URL2}
                            />
                       );
                    })
                }
            </div>
        </div>
    );
};

export {ProductsAdmin};