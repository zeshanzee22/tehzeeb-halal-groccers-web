import React from "react";

// Separate array of FAQ items
const faqs = [
    {
        question: "Are all your meats 100% Halal?",
        answer:
            "Yes! All our meats are certified Halal, sourced from trusted suppliers, and processed according to Islamic guidelines to ensure purity and quality.",
    },
    {
        question: "Do you deliver fresh groceries daily?",
        answer:
            "Absolutely! We ensure that fresh groceries, vegetables, and halal meats are delivered to your doorstep every day, maintaining quality and freshness.",
    },
    {
        question: "Do you have vegetarian options?",
        answer:
            "Yes! We stock a wide variety of vegetarian groceries, fresh vegetables, fruits, bakery items, and pantry essentials for every household.",
    },
     
    {
        question: "Do you stock Pakistani and Indian groceries?",
        answer:
            "Yes! We offer a wide range of authentic Pakistani and Indian groceries including spices, lentils, flours, snacks, pickles, and specialty items that are hard to find in local stores.",
    },
    {
        question: "Are your spices and grains authentic?",
        answer:
            "All our spices, grains, and dry goods are sourced directly from trusted suppliers to ensure authenticity, freshness, and the traditional taste of Pakistani and Indian cuisine.",
    },
    {
        question: "Do you sell ready-to-eat or frozen halal meals?",
        answer:
            "Yes! We provide a selection of ready-to-eat and frozen halal meals that are freshly prepared and easy to cook, perfect for busy families.",
    },
];


const FAQs = () => {
  return (
    <div className="py-16 bg-gray-50 rounded-lg">
      {/* Heading centered on top */}
      <h2 className="text-3xl font-semibold text-center text-rabbit mb-12">
        Frequently Asked Questions
      </h2>

      {/* Centered FAQ container */}
      <div className="flex justify-center">
        <div className="w-full max-w-3xl space-y-4 px-4">
          {faqs.map((item, index) => (
            <details
              key={index}
              className="group [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4
               rounded-lg border border-gray-200 bg-white px-5 py-5 font-semibold text-gray-900 hover:bg-gray-50">
                <span>{item.question}</span>

                {/* Plus sign that rotates to X */}
                <span
                  className="w-8 h-8 flex items-center justify-center text-gray-900
                             transition-transform duration-300 group-open:rotate-45 text-2xl font-bold"
                >
                  +
                </span>
              </summary>

              <div className="p-4">
                <p className="text-gray-700">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
