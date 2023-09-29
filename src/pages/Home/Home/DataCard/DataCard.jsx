import { useEffect } from "react";
import { Link } from "react-router-dom";


const DataCard = ({ item }) => {
    // console.log(item)
    const { id, images, title } = item;
    
    return (
        <div>
            <div className="relative transition-all">
                <Link to={`/specificData/${id}`}>
                    <div className="group cursor-pointer">
                        <img className="w-[400px] rounded-md" src={images?.four_x} alt="" />
                        <div className="flex justify-between absolute -translate-y-10 z-10 opacity-0 group-hover:opacity-100 transition-opacity ml-5">
                            <h2 className="font-bold text-xl text-white">{title}</h2>
                        </div>
                    </div>
                </Link>
            </div>

        </div>
    );
};

export default DataCard;