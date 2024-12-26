import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyItem = () => {
    const { user } = useContext(AuthContext)
    const [item, setItem] = useState([])
    const [control, setControl] = useState(false);
    useEffect(() => {
        fetch(`https://b9-a10-woody-server.vercel.app/myItem/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItem(data);
            })
    }, [user,control])
    
    const handleDelete= (id) => {
        fetch(`https://b9-a10-woody-server.vercel.app/delete/${id}`,{
           method: 'DELETE'
        })
        .then(res => res.json())
            .then(data => {
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                    }
                  });
                if (data.deletedCount> 0) {
                    setControl(!control)
                }
            })
    }

    return (
        <div className="my-24 lg:mx-40 md:mx-24 mx-40 max-w-[1700px]">
            <h1 className="text-center mt-48 mb-32 font-extrabold text-5xl lg:mr-20 border">MY CRAFT ITEMS</h1>
            <div className="justify-center grid lg:grid-cols-3 gap-14 md:grid-cols-2 grid-cols-1">
                {
                item?.map(p => (
                    <div key={p._id}>
                        <div key={p._id} className="card w-96 h-[420px] bg-base-100 shadow-xl">
                            <figure><img className="h-64" src={p.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {p.name}
                                    <div className="text-xs">{p.stock}</div>
                                </h2>
                                <p>{`Customization : ${p.customization}`}</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">{p.rating}</div>
                                    <div className="badge badge-outline">{p.price}</div>
                                </div>
                                <div className="flex gap-5">
                                    <Link to={`/update/${p._id}`} className="btn btn-outline btn-warning text-white uppercase">Update</Link>
                                    <button onClick={() => handleDelete(p._id)} className="btn btn-outline btn-error text-white uppercase">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    );
};

export default MyItem;