import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import DaoTao from "./pages/daotao";
import GocSV from "./pages/gocsv";
import Home from "./pages/home";
import TuyenDung from "./pages/tuyendung";
import TuyenSinh from "./pages/tuyensinh";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#header").innerHTML = Header.render();
    document.querySelector("#app").innerHTML = content;
    document.querySelector("#footer").innerHTML = Footer.render();
};
router.on({
    "/": () => {
        print(Home.render());
    },
    "/tuyen-sinh": () => {
        print(TuyenSinh.render());
    },
    "/chuong-trinh-dao-tao": () => {
        print(DaoTao.render());
    },
    "/goc-sinh-vien": () => {
        print(GocSV.render());
    },
    "/tuyen-dung": () => {
        print(TuyenDung.render());
    },
});

router.resolve();
