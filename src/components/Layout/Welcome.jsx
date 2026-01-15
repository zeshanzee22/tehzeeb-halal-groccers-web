import basket from "../../assets/basket.svg";
import { motion } from "framer-motion";

export const Welcome = () => {
    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }} // start above
            whileInView={{ y: 0, opacity: 1 }} // move to position when visible
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col md:flex-row bg-[#F0F3F2] justify-between items-center p-6 rounded-lg mt-20">

            {/* Left Section */}
            <div className=" flex flex-col md:flex-row items-center space-x-4">
                <img src={basket} alt="basket" width={120} height={120} />

                <div>
                    <h1 className="text-2xl text-rabbit hover:text-zinc-700 font-bold text-center">
                        Welcome to Tehzeeb Halal Meat & Grocers
                    </h1>
                    <p className="text-gray-500 font-light text-sm mt-2">
                        Your trusted store for fresh halal meat and everyday groceries.
                    </p>
                </div>
            </div>

            {/* Right Section - Button */}
            <button
                className="  bg-rabbit  text-white  px-6  py-3 mx-2 mt-3 md:mt-1  rounded-lg   font-medium  hover:bg-zinc-700 transition "
            >
                Contact Us
            </button>

        </motion.div>
    );
};
