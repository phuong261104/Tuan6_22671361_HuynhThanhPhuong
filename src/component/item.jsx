import "./item.css";//memo, useMemo, useCallback, useReducer

const Item = (props) => {
    const { dataCard } = props;

    return (
        <>
            {dataCard && dataCard.map((item) => (
                <div className="bg-white w-[300px] rounded-lg border border-gray-300 shadow-md" key={item.id}>
                    <div className="w-full h-auto block">
                        <img
                            src={item.avatar}
                            alt={item.title}
                        />
                    </div>
                    <div className="p-[12px 16px]">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg text-gray-800 font-semibold">{item.title}</h3>
                            <span className="text-lg cursor-pointer hover:opacity-80">🔖</span>
                        </div>
                        <div className="text-md text-gray-500 p-[10px]">{item.time}</div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Item;
