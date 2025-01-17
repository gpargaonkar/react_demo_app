import imageSrc from '../../assets/react-core-concepts.png';

export default function Header(){

    return (
        <div>
            <header>
                <img src={imageSrc} alt="Stylized atom" />
                <h1>React Essentials</h1>
                <p>
                    Fundamental React concepts you will need for almost any app you are
                    going to build!
                </p>
            </header>
            <main>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
 
}