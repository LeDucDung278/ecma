import NavAdmin from "../../components/NavAdmin";
import TableProduct from "../../components/tableProduct";

const Dashboard = {
    render() {
        return /* html */ `
        <div class="min-h-full">
            <nav class="bg-gray-800">
                ${NavAdmin.render()}
            </nav>
            <div class="flex justify-between">
                <h2 class ="uppercase font-bold text-xl m-2 text-blue-800">List User</h2>
                <a href="/admin/dashboard/addpro" class="my-2">
                        <button class="bg-[#0253a4] text-base mr-[7px] p-[3px] w-[70px] text-[#fff] rounded-md hover:bg-[#012a4a] px-3">Add</button>
                </a>
            </div>
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                ${TableProduct.render()}
            </div>
        </div>
        `;
    },
};
export default Dashboard;
