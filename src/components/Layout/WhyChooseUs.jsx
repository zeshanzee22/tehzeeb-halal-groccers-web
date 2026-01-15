import ReturnIcon from "../../assets/return.svg";
import ProductsIcon from "../../assets/products.svg";
import PricesIcon from "../../assets/prices.svg";
import DeliveryIcon from "../../assets/delivery.svg";

const features = [
  {
    icon: ReturnIcon,
    title: "Hassle-Free Returns",
    desc: "Not happy with your order? Return it right at your doorstep and receive a quick refund—simple, and hassle-free.",
  },
  {
    icon: ProductsIcon,
    title: "Wide Product Range",
    desc: "Shop from a wide range of halal meats, fresh groceries, bakery items, and more—all in one place.",
  },
  {
    icon: PricesIcon,
    title: "Best Value Deals",
    desc: "Enjoy better prices than local stores, along with exciting discounts and special offers on your everyday essentials.",
  },
  {
    icon: DeliveryIcon,
    title: "Fast Delivery",
    desc: "Get fresh halal meat and groceries delivered to your doorstep quickly from nearby trusted pickup stores.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full py-16 bg-white">
      <h2 className="text-3xl font-semibold px-4 text-rabbit mb-8">
       Why Choose Tehzeeb Halal Meat & Grocers?
      </h2>
      <div className="max-w-7xl mx-auto px-4">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 
               border border-gray-200
                 transition transform duration-800 
                hover:-translate-y-2 hover:border-green-500 "
            >
              <img
                src={item.icon}
                alt={item.title}
                fill
                className="w-14 h-14 mb-4"
              />

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 font-light text-sm mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
