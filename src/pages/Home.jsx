import { HomeHero } from "components/HomeHero/HomeHero";
import { HomeStatistic } from "components/HomeStatistic/HomeStatistic";
import { Registration } from "components/Registration/Registration";
import { LogIn } from "components/LogIn/LogIn";

const Home = () => {
    return (
        <>
            <HomeHero />
            <HomeStatistic />
            <Registration />
            <LogIn/>
        </>
    );
}

export default Home;