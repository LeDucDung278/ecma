import Banner from "../components/banner";
import NewsList from "../components/news";

const Home = {
    render() {
        return /* html */ `
            <div class="banner">
                ${Banner.render()}
            </div>
            <div class="news">
                ${NewsList.render()}
            </div>
        `;
    },
};
export default Home;
