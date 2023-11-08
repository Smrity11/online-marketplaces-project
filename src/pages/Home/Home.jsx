import ToolsSection from "./Extra/ToolsSection";
import Banner from "./banner/Banner";
import CategoryTab from "./category/CategoryTab";


const Home = () => {
    return (
        <div>
         <Banner></Banner>
            <CategoryTab></CategoryTab>
            <ToolsSection></ToolsSection>
        </div>
    );
};

export default Home;