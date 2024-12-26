import { Link, useLoaderData } from "react-router-dom";
import About from "../components/About";
import Blog from "../components/Blog";
import Hero from "../components/Hero";
import { useEffect, useState } from "react";




const Home = () => {
    const all = useLoaderData();
    const [item, setItem] = useState(all)

    useEffect(() => {
        fetch(`https://b9-a10-woody-server.vercel.app/all`)
            .then(res => res.json())
            .then(data => {
                setItem(data.slice(0,6));
            })
    }, [])
    return (
        <div>
            <Hero></Hero>
            <h1 className="text-center mt-20 font-extrabold text-5xl border">CRAFT <span className="text-[#e09045]">ITEMS</span></h1>
            <div className="mb-20 justify-center grid lg:grid-cols-3 gap-14 md:grid-cols-2 grid-cols-1 mt-20 max-w-[1700px] ml-40 lg:ml-40 md:ml-0">
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
                               <div className="flex justify-between">
                                   <Link to={`/details/${p._id}`} className="btn btn-ghost btn-xs">View Details</Link>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">{p.rating}</div>
                                        <div className="badge badge-outline">{p.price}</div>
                                    </div>
                               </div>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>

            <About></About>
            <Blog></Blog>
        </div>
    );
};

export default Home;