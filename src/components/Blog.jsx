const Blog = () => {
    return (
        <div>
            <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1700px] mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-[#e09045] sm:text-4xl">
                            Latest Blog Posts
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Explore our latest articles and learn more about jute and wooden
                            crafts.
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
                        {/* Blog post cards */}
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src="https://i.ibb.co/xYPR98K/b1.jpg"
                                alt="Blog post"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    The Art of Wood Weaving
                                </h3>
                                <p className="text-gray-600">
                                    Learn about the ancient art of jute weaving and its significance
                                    in modern crafts.
                                </p>
                            </div>
                        </div>
                        {/* Repeat this div for each blog post */}

                        {/* Blog post cards */}
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src="https://i.ibb.co/FKC6xCz/b3.jpg"
                                alt="Blog post"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    The Art of Jute Weaving
                                </h3>
                                <p className="text-gray-600">
                                    Learn about the ancient art of jute weaving and its significance
                                    in modern crafts.
                                </p>
                            </div>
                        </div>
                        {/* Repeat this div for each blog post */}

                        {/* Blog post cards */}
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src="https://i.ibb.co/FsjNcCN/b2.jpg"
                                alt="Blog post"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    The Art of Wood Weaving
                                </h3>
                                <p className="text-gray-600">
                                    Learn about the ancient art of jute weaving and its significance
                                    in modern crafts.
                                </p>
                            </div>
                        </div>
                        {/* Repeat this div for each blog post */}

        
                    </div>
                     {/* Web-related image */}
                     <div className="sm:col-span-2 lg:col-span-3 mt-20">
                            <img
                                src="https://i.ibb.co/fF5TP37/cta.jpg"
                                alt="Web related image"
                                className="w-full rounded-lg shadow-lg h-[450px]"
                            />
                     </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;