import React from "react";
import "./footer.css"; // Import file CSS

const Footer = () => {
    return (
        <footer className="bg-black text-white p-8 flex flex-wrap justify-center gap-7">
            <div className="mb-5 min-w-[200px] about">
                <h3 className="text-[18px] mb-2.5">About Us</h3>
                <p className="text-[14px] leading-[1.5]">
                    Welcome to our website, a wonderful place to explore and learn how to
                    cook like a pro.
                </p>
                <div className="flex mt-2">
                    <input className="flex-1 bg-white mr-2 text-black p-2 rounded-md outline-none focus:ring-0" type="email" placeholder="Enter your email" />
                    <button className="bg-pink-500 text-white px-3 rounded-md cursor-pointer transition duration-300 hover:bg-pink-300">Send</button>
                </div>
                <div className="flex w-full text-center pt-2 mt-5 text-xs ">
                    <div className="footer-logo">
                        <span className="text-lg font-bold">Chefify</span>
                    </div>
                    <p> <span className="text-lg font-bold">Chefify</span>© 2023 Chefify Company | Terms of Service | Privacy Policy</p>
                </div>
            </div>

            < div className="flex flex-col justify-between">
                <div className="min-w-[200px] mb-5">
                    <h3 className="text-base mb-2">Learn More</h3>
                    <ul>
                        <li>Our Cooks</li>
                        <li>See Our Features</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                <div className="min-w-[200px] mb-5">
                    <h3 className="text-base mb-2">Shop</h3>
                    <ul>
                        <li>Gift Subscription</li>
                        <li>Send Us Feedback</li>
                    </ul>
                </div>
            </div>

            <div className="min-w-[200px] mb-5">
                <h3 className="text-base mb-2">Recipes</h3>
                <ul>
                    <li>What to Cook This Week</li>
                    <li>Pasta</li>
                    <li>Dinner</li>
                    <li>Healthy</li>
                    <li>Vegetarian</li>
                    <li>Vegan</li>
                    <li>Christmas</li>
                </ul>
            </div>
        </footer >
    );
};

export default Footer;
