import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Buttons from "../components/Buttons";



const AllItem = () => {
    const all = useLoaderData();
    const [item, setItem] = useState(all)
    const menuItems = [...new Set(item.map((p) => p.customization))]

    const filterItems = (cus) =>{
       const newItems = item.filter((p) => p.customization == cus)
       setItem(newItems)
    }
    
    useEffect(() => {
        fetch("https://b9-a10-woody-server.vercel.app/all")
            .then(res => res.json())
            .then(data => {
                setItem(data);
            })
    }, [])
    return (
        <div>
            <div className="my-24 lg:mx-40 md:mx-24 mx-40 max-w-[1700px]">
                <Typewriter words={['Sort by customization here in below yes no buttons']}
                    loop={Infinity}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000} />
                <h1 className="text-center mt-20 mb-32 font-extrabold text-5xl border">ALL CRAFT ITEMS</h1>
                <Buttons menuItems = {menuItems} filterItems={filterItems} setItem={setItem}/>
                    
                
                <div className="justify-center grid gap-14 lg:grid-cols-2 grid-cols-1 mt-36">
                    {
                        item?.map(p => (
                            <div key={p._id} className="overflow-x-auto border">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>Item Name</th>
                                            <th>Customization</th>
                                            <th>Stock Status</th>
                                            <th>Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {/* row 1 */}
                                        <tr>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={p.photo} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{p.name}</div>
                                                        <div className="text-sm opacity-50">{p.category}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge badge-ghost badge-sm">{p.customization}</span>
                                            </td>
                                            <td>{p.stock}</td>
                                            <th>
                                                <Link to={`/details/${p._id}`} className="btn btn-ghost btn-xs">View Details</Link>
                                            </th>
                                        </tr>

                                    </tbody>


                                    {/* foot */}
                                    <tfoot>
                                        <tr>
                                            <th>Item Name</th>
                                            <th>Customization</th>
                                            <th>Stock Status</th>
                                            <th>Details</th>
                                        </tr>
                                    </tfoot>

                                </table>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default AllItem;