import whyImage from '../assets/why-img.png'
import FeatureItem from './FeatureItem'
import Numbers from './Numbers'

function Why() {

    const item = {
        heading: "why you should choose CHAPPO",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit. Libero deserunt commodi quos adipisci! Corporis.",
        button: "learn more",
        image: whyImage,
        style: "md:flex-row-reverse"
    }

    return (
        <section id='why' className='py-32 px-8 md:px-16 lg:px-24'>

            <Numbers />

            <FeatureItem
                heading={item.heading}
                text={item.text}
                image={item.image}
                button={item.button}
                style={item.style}
            />

        </section>
    )
}

export default Why