import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ItemDetails = () => {
    const { id } = useParams();
    const [item, setItem] = useState({})

    useEffect(() => {
        fetch(`https://b9-a10-woody-server.vercel.app/singleItem/${id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
                console.log(data);
            })
    }, [id])


    console.log(id);

    return (
        <div className="">
            <div className="max-w-[1500px] mx-auto card lg:card-side bg-base-100 shadow-xl mt-60 mb-32 p-20">
                <figure><img className="w-96" src={item.photo} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-black">{item.name}</h2>
                    <p><span className="font-bold text-lg">Description :</span> {item.description}</p>
                    <p><span className="font-bold text-lg">Stock :</span>   {item.stock}</p>
                    <p><span className="font-bold text-lg">Time :</span> {item.time}</p>
                    <p><span className="font-bold text-lg">Price :</span>   {item.price}</p>
                    <p><span className="font-bold text-lg">Rating :</span>   {item.rating}</p>
                    <p><span className="font-bold text-lg">Category :</span>   {item.category}</p>
                    <p><span className="font-bold text-lg">Customize :</span>   {item.customization}</p>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;