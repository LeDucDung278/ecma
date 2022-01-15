import TableProduct from "./tableProduct";

const AdminProduct = {
    render() {
        return /* html */ `
        <h2 class="uppercase font-bold text-xl my-5 text-blue-800">Quan li sinh vien</h2>
        <div> 
            ${TableProduct.render()}
        </div>
        `;
    },
};
export default AdminProduct;
