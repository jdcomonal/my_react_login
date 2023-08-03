import gallery04 from '../img/gallery04.png'; // Import the image


const Home = () => {

    return(
        <main>
            <div className="hero">
                <div className='hero-txt'>
                 <h2>THE BEST FOOD IN TOWN.</h2>
                </div>
                <div className='img-c'>
                 <img src={gallery04} alt="hero img" />
                </div>
            </div>
            
        </main>
        
    )

}

export default Home