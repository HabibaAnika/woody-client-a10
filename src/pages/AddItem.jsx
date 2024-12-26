import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider';
import { Typewriter } from "react-simple-typewriter";


const AddItem = () => {
    
    const { user } = useContext(AuthContext)
    const handleAddCraft = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const time = form.time.value;
        const stock = form.stock.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const email =  user.email;
        const userName = user.displayName;
        
        const newItem = {name, stock, time, customization, category, description, photo, rating, price, email,userName}
        fetch('https://b9-a10-woody-server.vercel.app/add',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Craft Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Done'
                }) 
            }
        })
        console.log(newItem);

        
    }
    return (
        <div>
            <div className="bg-[#F4F3F0] p-24 mt-[70px]">
            <Typewriter words={['Here is add items option by admin']}
                    loop={Infinity}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000} />
                <h2 className="text-3xl font-extrabold mb-5">Add Craft</h2>
                <form onSubmit={handleAddCraft}>
                    {/* form name and category row */}
                    <div className="md:flex md:mb-6">
                        <div className="form-control md:w-1/2">
                            <h4>Item Name</h4>
                            <div className="join">
                                <input className="input input-bordered join-item w-full" placeholder="Item Name" name="name" />
                            </div>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <h4>Subcategory Name</h4>
                            <div className="join">
                                <input className="input input-bordered join-item w-full" placeholder="Subcategory Name" name="category" />
                            </div>
                        </div>
                    </div>


                    {/* form description and price row */}
                    <div className="md:flex md:mb-6">
                        <div className="form-control md:w-1/2">
                            <h4>Short Description</h4>
                            <div className="join">
                                <input className="input input-bordered join-item w-full" placeholder="Short Description" name="description" />
                            </div>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <h4>Price</h4>
                            <div className="join">
                                <input className="input input-bordered join-item w-full" placeholder="Price" name="price" />
                            </div>
                        </div>
                    </div>


                    {/* form Rating and Customization row */}
                    <div className="md:flex md:mb-6">
                        <div className="form-control md:w-1/2">
                            <h4>Rating</h4>
                            <div className="join">
                                <input className="input input-bordered join-item w-full" placeholder="Rating" name="rating" />
                            </div>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <h4>Customization</h4>
                            <div className="join">
                                <input className="input input-bordered join-item w-full" placeholder="Customization" name="customization" />
                            </div>
                        </div>
                    </div>



                    {/* form processing_time and  stock Status row */}
                    <div className="md:flex md:mb-6">
                        <div className="form-control md:w-1/2">
                            <h4>Processing Time</h4>
                            <div className="join">
                                <input className="input input-bordered join-item w-full" placeholder="Processing Time" name="time" />
                            </div>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <h4> Stock Status</h4>
                            <div className="join">
                                <input className="input input-bordered join-item w-full" placeholder="Stock Status" name="stock" />
                            </div>
                        </div>
                    </div>


                    {/* form User Email and  User Name row */}
                    <div className="md:flex md:mb-6">
                        <div className="form-control md:w-1/2">
                            <h4>User Name</h4>
                            <div className="join">
                                <input className="input input-bordered join-item w-full" placeholder="User Name" name="user" />
                            </div>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <h4>User Email</h4>
                            <div className="join">
                                <input className="input input-bordered join-item w-full" placeholder="User Email" name="email" />
                            </div>
                        </div>
                    </div>


                    {/* form Photo url row */}
                    <div className="mb-6">
                        <div className="form-control w-full">
                            <h4>Photo URL</h4>
                            <div className="join">
                                <input className="input input-bordered join-item w-full" placeholder="Photo URL" name="photo" />
                            </div>
                        </div>
                    </div>

                    <input className="btn btn-block bg-[#e09045] text-white uppercase" type="submit" value="Add Craft" />

                </form>
            </div>
        </div>
    );
};

export default AddItem;