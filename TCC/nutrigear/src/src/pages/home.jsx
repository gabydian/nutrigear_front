import  RecipeReviewCard  from '../components/box/box.jsx';
import logo from '../assets/logo.png'


function Home() {
    const msg = "Seja bem Vindo!"
    return(
        <body>
            <RecipeReviewCard></RecipeReviewCard>
            <img src={logo} />
            <h1>{msg}</h1>
        </body>

    );
};


export default Home;