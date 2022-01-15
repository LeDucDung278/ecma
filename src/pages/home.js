// import Activity from "../components/activity";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import NewsList from "../components/newsList";

const Home = {
    render() {
        return /* html */ `
            <header>
                ${Header.render()}
            </header>
            <main>
                <div class="banner">
                    ${Banner.render()}
                </div>
                <div class="news">
                    ${NewsList.render()}
                </div>
            <main>
            <footer>
                ${Footer.render()}
            </footer>
        `;
    },
};
export default Home;
