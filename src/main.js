import Navigo from "navigo";
// import Footer from "./components/footer";
// import Header from "./components/header";
import Home from "./pages/home";
// import TuyenSinh from "./pages/tuyensinh";
import DaoTao from "./pages/daotao";
// import GocSV from "./pages/gocsv";
import DetailPage from "./pages/detail";
// import AdminProduct from "./pages/Admin/AdminProduct";
import BaiViet from "./pages/baiviet";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
// import AdminProductEdit from "./pages/Admin/AdminProductEdit";
import Dashboard from "./pages/Admin/dashboard";
// import EditProduct from "./components/Editproduct";
import AdminProductEdit from "./pages/Admin/AdminProductEdit";
import AdminProductAdd from "./pages/Admin/AdminProductAdd";
// import EditProduct from "./components/editproduct";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#app").innerHTML = content;
};
router.on({
    "/": () => {
        print(Home.render());
    },
    // "/tuyen-sinh": () => {
    //     print(AdminProduct.render());
    // },
    "/chuong-trinh-dao-tao": () => {
        print(DaoTao.render());
    },
    // "/admin": () => {
    //     print(AdminProduct.render());
    // },
    "/bai-viet": () => {
        print(BaiViet.render());
    },
    "/bai-viet/:id": ({ data }) => {
        const { id } = data;
        print(DetailPage.render(+id));
    },

    // "/admin/dashboard/:id/edit": () => {
    //     print(EditProduct.render());
    // },
    "/admin/dashboard": () => {
        print(Dashboard.render());
    },
    "/admin/dashboard/:id/edit": ({ data }) => {
        const { id } = data;
        print(AdminProductEdit.render(id));
    },
    "/admin/dashboard/addpro": () => {
        print(AdminProductAdd.render());
    },
    "/sign-in": () => {
        print(SignIn.render());
    },
    "/sign-up": () => {
        print(SignUp.render());
    },
});

router.resolve();

// Cach 2
// router.on("/", () => {
//     console.log("Home Page");
// });
// router.on("/about", () => {
//     console.log("About Page");
// });

// class TuongPhep {
//     constructor(name, congVatLy, congPhep) {
//       this.tenTuong = name;
//       this.congVatLyTuong = congVatLy;
//       this.congPhepTuong = congPhep;
//     };
//     showInfo() {
//       console.log(`
//         Ten Tuong la: ${this.tenTuong}
//         Cong vat ly Tuong la: ${this.congVatLyTuong}
//         Cong phep Tuong la: ${this.congPhepTuong}
//       `)
//     }
//   }

//   const tuong1 = new TuongPhep("veera", 170, 0);
//   const tuong2 = new TuongPhep("krixi", 153, 0);
//   tuong1.showInfo();
//   console.log(tuong2.showInfo());

// ES5
// function Anima(color) {
//   this.color = color
// }
// const cat = new Anima('Mau vang');

// ES6
// class Anima {
//   constructor(color) {
//     this.color = color;
//   }
//   showColor() {
//     console.log(this.color);
//   }
// }
// const cat = new Anima("Mau vang");
// cat.showColor();
