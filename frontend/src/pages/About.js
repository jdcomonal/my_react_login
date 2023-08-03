import gallery04 from '../img/gallery04.png'; // Import the image

const About = () => {

    return (
        <main>
            <div className="hero">
                <div className='img-c'>
                    <img src={gallery04} alt="hero img" />
                </div>
                <div className='hero-txt'>
                    <h2>HOW WE START.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nulla aliquet consectetur finibus. Nunc lobortis facilisis felis, 
                        vel placerat metus dignissim non. Donec placerat orci sit amet elit tincidunt, a 
                        sollicitudin arcu porttitor. Aenean id ex sit amet felis efficitur posuere. Morbi 
                        fermentum mauris in scelerisque tempor. Maecenas imperdiet eget diam tristique suscipit. 
                        Vestibulum imperdiet sapien diam, in faucibus eros malesuada eget.

                        Sed consectetur eu leo tincidunt eleifend. Sed maximus, purus at maximus gravida, 
                        arcu leo aliquet tortor, viverra accumsan mi nisi sit amet est. Nulla eget scelerisque tellus, 
                        a fringilla augue. Donec sit amet orci rutrum, lacinia ipsum sit amet, vestibulum libero. 
                        Ut convallis semper elit, id rutrum felis iaculis nec. Phasellus est tellus, porttitor eu ante 
                        eleifend, luctus viverra tellus. Sed lorem libero, molestie sit amet iaculis ac, suscipit id risus. 
                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus bibendum 
                        risus lorem. Fusce condimentum gravida semper. Ut elementum vulputate auctor.</p>
                </div>

            </div>
        </main>
    )
}

export default About