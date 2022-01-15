const Header = {
    render() {
        return /* html */ `
        <div class="bg-sky-900 py-4">
          <a href="">
            <img src="https://picsum.photos/150/40" alt="" class="mx-auto">
          </a>
        </div>
        <nav class="bg-orange-500 flex">
          <ul class="flex" id="menu">
            <li>
              <a href="/" class="transition duration-200 ease-in-out block p-3 hover:bg-sky-500 hover:text-white">Trang
                chủ</a>
            </li>
            <li>
              <a href="/bai-viet" class="transition duration-300 ease-in-out block p-3 hover:bg-sky-500 hover:text-white">Bài viết</a>
            </li>
            <li>
              <a href="/chuong-trinh-dao-tao" class="transition duration-200 ease-in-out block p-3 hover:bg-sky-500 hover:text-white">Chương
                trình đào tạo</a>
            </li>
            <li>
              <a href="/admin/dashboard" class="transition duration-300 ease-in-out block p-3 hover:bg-sky-500 hover:text-white">Admin</a>
            </li>
            
          </ul>
          <div class="flex mx-24">
            <input type="text" class="bg-white border border-gray-300 rounded-md my-2">
            <button class="bg-sky-900 m-2 w-full rounded-md px-3 hover:bg-sky-600">Tìm kiếm</button>
          </div>
          <div class="m-3">
            <a href="/sign-in" class="bg-[#0253a4] text-base text-[#fff] rounded-md hover:bg-[#012a4a] p-2">
              Sign in
            </a>
          </div>
        </nav>
        `;
    },
};

export default Header;
