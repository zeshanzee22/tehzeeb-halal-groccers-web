import { motion } from "framer-motion";
import { menu_list } from '../../assets/assets';
 

const AllCategories = () => {
  return (
    <section className="py-16 bg-gray-50 rounded-lg px-4">
      <h2 className="text-3xl font-semibold  text-rabbit mb-12">
        All Categories
      </h2>

      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {menu_list.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.03 }}
            >
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className="w-20 md:w-24 lg:w-28 rounded-full border border-gray-200 p-1 hover:border-rabbit transition-all duration-300"
              />
              <p className="mt-2 text-rabbit text-sm md:text-base font-semibold text-center">
                {item.menu_name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCategories;
