import React from "react";

// Array of savings images (replace src with your actual image paths)
const savingsImages = [
    { src: '/src/assets/1.avif', alt: "Savings 1" },
    { src: '/src/assets/2.avif', alt: "Savings 2" },
    { src: '/src/assets/3.avif', alt: "Savings 3" },
    { src: '/src/assets/3.avif', alt: "Savings 4" },
];

const Savings = () => {
    return (
        <section className="py-8">
            {/* Section heading */}
            <h2 className="text-3xl font-semibold px-4 text-rabbit mb-8">
                Top Savings on Groceries
            </h2>

            {/* Image cards grid */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
                    {savingsImages.map((item, index) => (
                        <div
                            key={index}
                            className="overflow-hidden  border border-gray-200 bg-white hover:shadow-lg transition duration-300"
                        >
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="w-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Savings;
