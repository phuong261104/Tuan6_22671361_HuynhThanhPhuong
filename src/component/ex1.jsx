import { useEffect, useState } from "react";
import Footer from "./footer";
import Item from "./item";

// Sử dụng biến để tái sử dụng class Tailwind
const linkClasses = "no-underline text-[#514b4b] text-sm hover:text-gray-700";

const Ex1 = () => {
    const [dataCard, setDataCard] = useState([]);

    useEffect(() => {
        fetch("https://67cab39c102d684575c665a5.mockapi.io/card")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setDataCard(data);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <>
            <div className="flex justify-around items-center px-5 py-3 bg-white shadow-md">
                <div className="flex items-center">
                    <img
                        className="text-[10px] text-white mr-2"
                        src="/img1.png"
                        alt="Logo"
                    />
                    <span className="text-[20px] font-bold text-[#e91e63]">Cheffy</span>
                </div>

                <div>
                    <input
                        className="w-[250px] p-[8px_12px] border border-gray-300 rounded-full outline-none"
                        type="text"
                        placeholder="Search recipes..."
                    />
                </div>

                <nav className="flex gap-[15px]">
                    <a href="#" className={linkClasses}>
                        What to cook
                    </a>
                    <a href="#" className={linkClasses}>
                        Recipes
                    </a>
                    <a href="#" className={linkClasses}>
                        Ingredients
                    </a>
                    <a href="#" className={linkClasses}>
                        Occasions
                    </a>
                    <a href="#" className={linkClasses}>
                        About Us
                    </a>
                </nav>

                <div className="flex items-center gap-[15px]">
                    <button className="cursor-pointer bg-pink-300 text-pink-700 border-none px-3 py-2 rounded-md text-sm">
                        Your Recipe Box
                    </button>
                    <img
                        className="flex items-center justify-center text-lg cursor-pointer rounded-full bg-gray-300 w-[35px] h-[35px]"
                        src="/img1.png"
                        alt="Avatar"
                    />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center bg-white">
                <div className="bg-white p-5 rounded-md shadow-lg my-5 w-[80%] ">
                    <h2 className="text-lg font-semibold mb-3">Lorem ipsum dolor sit amet.</h2>
                    <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-[80px] h-[80px] rounded-full overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                src="https://res.cloudinary.com/dx8u0eu1q/image/upload/v1741144816/cucumber_salad_charry_tomatoes_vtsspx.png"
                                alt="Example"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-gray-500 mb-2">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus,
                                itaque. Labore hic, odit odio delectus consequatur iusto fuga cumque
                                assumenda minima dolore, libero necessitatibus ducimus rerum? Dolor
                                reiciendis debitis velit?
                            </p>
                            <div>
                                <span className="text-sm text-pink-600 font-bold whitespace-normal mr-[10px]">
                                    6.5k Subscribes
                                </span>
                                <button className="ml-1 bg-pink-600 text-white border-none py-[6px] px-[12px] cursor-pointer text-sm whitespace-nowrap inline-flex items-center rounded-[20px] hover:bg-pink-700">
                                    Share
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-container">
                    <Item dataCard={dataCard} />
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Ex1;
