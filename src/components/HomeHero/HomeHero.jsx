import hero from '../../images/home/hero.jpg';
import heroW from '../../images/home/heroW.webp';
import hero2x from '../../images/home//hero@2x.jpg';
import hero2xW from '../../images/home/heroW@2x.webp';

export const HomeHero = () => {

    return (
        <>
            <div>
                <h2>Unlock your potential with the best <span>language</span> tutors</h2>
                <p>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
                <button>Get started</button>
            </div>
            <div>
                <picture>
                    <source
                        srcSet={`${heroW} 1x, ${hero2xW} 2x`}
                        type='image/webp'
                    />
                    <source
                        srcSet={`${hero} 1x, ${hero2x} 2x`}
                        type='image/jpg'
                    />
                    <img srcSet={hero2x} alt="Teacher" />
                </picture>
            </div>
        
        </>
    )
}