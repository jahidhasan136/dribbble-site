import { useEffect, useState } from "react";
import DataCard from "../Home/DataCard/DataCard";


const DribbbleData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.dribbble.com/v2/user/shots?access_token=98a8331a63048f0f3352cd68bac50504434e7ad76fea14018d7c5f4c66da359c')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setData(data)
            })
    }, [])
    return (
        <div className="grid grid-cols-3 gap-20 container mt-36">
            {
                data?.map(item => <DataCard 
                    key={item.id}
                    item={item}
                ></DataCard>)
            }
        </div>
    );
};

export default DribbbleData;