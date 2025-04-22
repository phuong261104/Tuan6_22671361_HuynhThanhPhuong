import { useReducer } from "react";
import "./styles.css"

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            throw new Error("Action không hợp lệ!");
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
        <>
            <div className="flex flex-col items-center justify-center  bg-gray-100">
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center  w-[80%] mt-5">
                    <h2 className="text-2xl font-semibold mb-4">Giá trị: {state.count}</h2>
                    <div className="flex space-x-4 items-center justify-center">
                        <button
                            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                            onClick={() => dispatch({ type: "decrement" })}
                        >
                            -
                        </button>
                        <button
                            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                            onClick={() => dispatch({ type: "increment" })}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter