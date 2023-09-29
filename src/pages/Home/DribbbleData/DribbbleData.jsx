import { useEffect, useState } from "react";
import DataCard from "../Home/DataCard/DataCard";

const DribbbleData = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.dribbble.com/v2/user/shots?access_token=98a8331a63048f0f3352cd68bac50504434e7ad76fea14018d7c5f4c66da359c')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('An error occurred:', error);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="mt-36">
            {isLoading ? (
                <p className="text-center font-bold text-4xl text-gray-500">Loading...</p>
            ) : (
                <div className="grid grid-cols-3 gap-20 container">
                    {data?.map(item => (
                        <DataCard key={item.id} item={item} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default DribbbleData;
