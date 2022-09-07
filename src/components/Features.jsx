import featureImage1 from '../assets/feature-1-img.png'
import featureImage2 from '../assets/feature-2-img.png'
import featureImage3 from '../assets/feature-3-img.png'
import FeatureItem from './FeatureItem'

function Features() {

    const items = [
        {
            heading: "Invest Smart",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur rem ducimus vitae maiores dolorum alias.",
            button: "learn more",
            image: featureImage1,
            style: ""
        },
        {
            heading: "detailed statistics",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit. Libero deserunt commodi quos adipisci! Corporis.",
            button: "learn more",
            image: featureImage2,
            style: "md:flex-row-reverse"
        },
        {
            heading: "Grow your profit and track your investments",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur rem ducimus vitae maiores dolorum alias.",
            button: "learn more",
            image: featureImage3,
            style: ""
        },
    ]

    return (
        <section id='features' className='py-32 px-8 md:px-16 lg:px-24'>
            <h2 className='text-3xl max-w-4xl mx-auto capitalize font-bold text-center mb-10 md:mb-20'>
                Market sentiments, portfolio, and run the infrastructure of your choice
            </h2>

            {items.map((item, index) => (
                <FeatureItem
                    key={index}
                    heading={item.heading}
                    image={item.image}
                    text={item.text}
                    style={item.style}
                    button={item.button}
                />
            ))}

        </section>
    )
}

export default Features