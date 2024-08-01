import "./Home.scss";

function Home() {
    return (
        <div class="cover">
            <div class="cover-title">
                <p class="cover-title-text">All meals,</p>
                <p class="cover-title-text">you can find </p>
                <p class="cover-title-text">
                    only <span>here</span>!
                </p>
                <a class="about-meals-link" routerLink="/dashboard">
                    Meals
                </a>
            </div>
        </div>
    );
}

export default Home;
