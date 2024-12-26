

const Contact = () => {
    return (
        <div className="max-w-[300px] mx-auto mt-40 mb-48">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/P6Y1gQh/top-view-blue-monday-concept-composition-with-telephone.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Contact Us
                        <div className="badge badge-info text-white">NOW!</div>
                    </h2>
                    <p><span className="text-lg font-semibold">Phone : </span>01999-34-56-32</p>
                    <p><span className="text-lg font-semibold">Email : </span>woody79@gmail.com</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Phone</div>
                        <div className="badge badge-outline">Email</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;