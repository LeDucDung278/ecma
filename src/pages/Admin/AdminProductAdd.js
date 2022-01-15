import AddProduct from "../../components/addproducts";
import NavAdmin from "../../components/NavAdmin";

const AdminProductAdd = {
    render(id) {
        return /* html */`
        <div class="min-h-full">
            <nav class="bg-gray-800">
                ${NavAdmin.render()}
            </nav>
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                ${AddProduct.render(id)}
            </div>
        </div>   
            `;
    },
};
export default AdminProductAdd;
