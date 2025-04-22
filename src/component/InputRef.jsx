import { useRef, useState } from "react";
import "./styles.css"


const InputRef = () => {
    let ref = useRef(0);
    const [input, setInput] = useState()

    function handleClick() {
        setInput(ref.current.value);
        alert(input)
    }

    return (
        <div className="flex flex-col items-center justify-center mt-5 bg-gray-100">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <input
                    ref={ref}
                    type="text"
                    placeholder="Nhập tên..."
                    className="border mr-2 border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleClick}
                    className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                    Click me!
                </button>
            </div>
        </div>
    );
}

export default InputRef