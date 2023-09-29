import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const removeHtmlTags = (html) => {
    const temp = document.createElement("div");
    temp.innerHTML = html;
    return temp.textContent || temp.innerText;
};

const SpecificData = () => {

    const loader = useParams()

    const [shotData, setShotData] = useState(null);
    const shotId = loader?.id// Replace with the actual shot ID
    const accessToken = '98a8331a63048f0f3352cd68bac50504434e7ad76fea14018d7c5f4c66da359c'; // Replace with your access token


    useEffect(() => {
        const fetchShot = async () => {
            try {
                const response = await axios.get(`https://api.dribbble.com/v2/shots/${shotId}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                if (response.status === 200) {
                    // setShotData(response.data);
                    const data = response.data
                    data.description = removeHtmlTags(data.description);
                    setShotData(data);
                } else {
                    console.error(`Error: ${response.status}`);
                }
            } catch (error) {
                console.error('An error occurred:', error);
            }
        };

        fetchShot();
    }, [shotId, accessToken]);

    // const cleanedDescription = description.replace(/<\/?p>/g, '');

    return (
        <div className="container mt-10 mb-10">
            {shotData ? (
                <div>
                    <h2 className="font-bold text-3xl mb-5">{shotData?.title}</h2>
                    <img className="w-full" src={shotData?.images?.normal} alt={shotData?.title} />
                    <p className="mt-5 text-xl">{shotData?.description}</p>
                    <p className="text-end font-bold mt-5">{shotData?.published_at}</p>
                </div>
            ) : (
                <p className="font-bold text-4xl text-red-500">Loading...</p>
            )}
        </div>
    );
};

export default SpecificData;