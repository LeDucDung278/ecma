import { data1 } from "../data";

const NewsList = {
    render() {
        return /* html */`
            <h2 class="uppercase font-bold text-xl my-5 text-blue-800">Tin tuc hoc tap</h2>
            <div class="grid grid-cols-3 gap-8">
                ${data1.map((post) => `
                    <div class="border p-3">
                        <a href=""><img src="${post.img}" alt="" /></a>
                        <h3><a href="" class="font-semibold text-red-600">${post.title}</a></h3>
                        <p class="text-xs">${post.desc}</p>
                    </div>  
                    `).join("")}
            </div>
        `;
    },
};
export default NewsList;
