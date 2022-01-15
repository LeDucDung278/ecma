import { data2 } from "../data";

const DetailPage = {
    render(id) {
        // console.log("id in Detail page", id);
        const result = data2.find((post) => post.id === id);
        return /* html */ `
            <div class="max-w-3xl mx-auto">
                <div class="bg-sky-900 bg-orange-500 py-4 text-center">
                    <h2 class="uppercase font-bold text-xl px-2 text-blue-800">${result.title}</h2>
                </div>
                <div class = "my-5">
                    <img class = "mx-auto" src="${result.img}" alt="" />
                </div>
                <div>
                    <p class="text-xs">${result.desc}</p>
                </div>
            </div>
        `;
    },
};
export default DetailPage;
