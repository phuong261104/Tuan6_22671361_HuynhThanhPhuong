import { useRef, useState } from "react";

const Todo = () => {
    const ref = useRef(null);
    const [todos, setTodos] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editText, setEditText] = useState("");

    function handleAdd() {
        const newTodo = ref.current.value.trim();
        if (newTodo) {
            setTodos([...todos, newTodo]);
            ref.current.value = "";
        }
    }

    function handleDelete(index) {
        setTodos(todos.filter((_, i) => i !== index));
    }

    function handleEdit(index) {
        setEditingIndex(index);
        setEditText(todos[index]);
    }

    function handleUpdate() {
        if (editText.trim()) {
            const updatedTodos = [...todos];
            updatedTodos[editingIndex] = editText;
            setTodos(updatedTodos);
            setEditingIndex(null);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center mt-5 bg-gray-100">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center w-96">
                <h2 className="text-xl font-semibold mb-4">📌 Danh sách công việc</h2>

                <div className="flex">
                    <input
                        ref={ref}
                        type="text"
                        placeholder="Nhập công việc..."
                        className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={handleAdd}
                        className="ml-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                    >
                        Thêm
                    </button>
                </div>

                <ul className="mt-4 text-left w-full">
                    {todos.map((todo, index) => (
                        <li
                            key={index}
                            className="p-2 bg-gray-200 rounded-lg mb-2 shadow-sm flex justify-between items-center"
                        >
                            {editingIndex === index ? (
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    className="border border-gray-300 px-2 py-1 rounded-md w-full"
                                />
                            ) : (
                                <span>{todo}</span>
                            )}

                            <div className="flex space-x-2">
                                {editingIndex === index ? (
                                    <button
                                        onClick={handleUpdate}
                                        className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                                    >
                                        ✔
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => handleEdit(index)}
                                        className="px-2 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
                                    >
                                        ✏
                                    </button>
                                )}

                                <button
                                    onClick={() => handleDelete(index)}
                                    className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                                >
                                    🗑
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Todo;
