

const About = () => {
    return (
        <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-[#e09045] sm:text-4xl">
                        About Us
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        We are passionate about creating beautiful crafts from jute and
                        wood, bringing natural elegance into your home.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-10">
                    <div className="flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-[#e09045] mb-4">
                            Our Mission
                        </h3>
                        <p className="text-lg text-gray-600">
                            Our mission is to promote sustainability and eco-friendly
                            practices through our crafts. We strive to create products that
                            not only enhance your living space but also respect our planet.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-[#e09045] mb-4">
                            Our Craftsmanship
                        </h3>
                        <p className="text-lg text-gray-600">
                            Each piece is meticulously crafted by skilled artisans, combining
                            traditional techniques with modern designs. We pay attention to
                            every detail, ensuring the highest quality for our customers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;