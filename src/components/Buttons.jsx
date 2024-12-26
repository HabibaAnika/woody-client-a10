
const Buttons = ({ menuItems, filterItems }) => {
    return (
        <div>
            <div className="flex justify-center gap-4">
                {
                  menuItems.map(p => (
                    <button key={p.id} className="btn" onClick={() => filterItems(p)}>
                        {p}
                    </button>
                  ))
                }
            </div>
        </div>
    );
};

export default Buttons;