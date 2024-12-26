import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateDetails = () => {
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
    
    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const time = form.time.value;
        const stock = form.stock.value;
        const description = form.description.value;
        
        
        const newItem = {name, stock, time, customization, category, description, rating, price}
        console.log(newItem);
        fetch(`https://b9-a10-woody-server.vercel.app/updateItem/${id}`,{
            method: "PUT",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newItem)
        }) 
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Craft Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Done'
                }) 
            }
        })
    }

//    

    return (
        <div className="mt-60">
            <h1 className="font-extrabold text-5xl text-center">Update Craft Details</h1>
            <form onSubmit={handleUpdate}>
                <div className="max-w-[1500px] mx-auto card lg:card-side bg-base-100 shadow-xl mb-32 p-20">
                    <figure><img className="w-96" src={item.photo} alt="Album" /></figure>
                    <div className="card-body">
                        <div className="flex items-center gap-5">
                            <label className="font-bold text-lg">Item Name :</label>
                            <input className="input input-bordered" type="text" defaultValue={item.name} name="name"/>
                        </div>
                        <div className="flex items-center gap-5">
                            <label className="font-bold text-lg">Description :</label>
                            <input className="input input-bordered" type="text" defaultValue={item.description} name="description"/>
                        </div>
                        <div className="flex items-center gap-5">
                            <label className="font-bold text-lg">Stock :</label>
                            <input className="input input-bordered" type="text" defaultValue={item.stock} name="stock"/>
                        </div>
                        <div className="flex items-center gap-5">
                            <label className="font-bold text-lg">Time :</label>
                            <input className="input input-bordered" type="text" defaultValue={item.time} name="time"/>
                        </div>
                        <div className="flex items-center gap-5">
                            <label className="font-bold text-lg">Price :</label>
                            <input className="input input-bordered" type="text" defaultValue={item.price} name="price"/>
                        </div>
                        <div className="flex items-center gap-5">
                            <label className="font-bold text-lg">Rating :</label>
                            <input className="input input-bordered" type="text" defaultValue={item.rating} name="rating"/>
                        </div>
                        <div className="flex items-center gap-5">
                            <label className="font-bold text-lg">Category :</label>
                            <input className="input input-bordered" type="text" defaultValue={item.category} name="category"/>
                        </div>
                        <div className="flex items-center gap-5">
                            <label className="font-bold text-lg">Customize :</label>
                            <input className="input input-bordered" type="text" defaultValue={item.customization} name="customization"/>
                        </div>
                        <button className="btn">Update Item</button>
                    </div>  
                </div>
            </form>
        </div>
    );
};

export default UpdateDetails;