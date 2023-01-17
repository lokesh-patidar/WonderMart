import "../AdminStyles/SingleProductAdmin.css";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";


const SingleProductAdmin = ({key,brand, name, weight, price, ImgSrc,URL_1,URL2}) => {
    return (
        <div key={key}>
            <div className="admin_side_product_item">
                <div className="product_img_box">
                    <div>
                        <img src={ImgSrc} alt={name} />
                    </div>
                    <div>
                        <p>{brand}</p>
                    </div>
                </div>
                <div className="products_second_box">
                    <ul className="product_information">
                        <li><span>Name:</span> {name}</li>
                        <li><span>Weight:</span> {weight}</li>
                        <li><span>Price:</span> {price}</li>
                    </ul>
                    <div className="product_bottom_section">
                        <div className="blue">
                            <EditIcon fontSize="130%" cursor="pointer" />
                        </div>
                        <div className="red">
                            <DeleteIcon fontSize="130%" cursor="pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { SingleProductAdmin }