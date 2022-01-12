import { data2 } from "../data";

const Activity = {
    render() {
        return /* html */`
            <h2 class="uppercase font-bold text-xl my-5 text-blue-800">hoat dong sinh vien</h2>
            <div class="grid grid-cols-3 gap-8">
                ${data2.map((post) => `
                    <div class="border p-3">
                        <img src="${post.img}" alt="" />
                        <h3><a href="/tuyen-dung/${post.id}" class="font-semibold text-red-600">${post.title}</a></h3>
                        <p class="text-xs">${post.desc}</p>
                    </div>  
                    `).join("")}
            </div>
        `;
    },
};
export default Activity;
