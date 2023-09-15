"use client"
const cartItems = [
  
]
const Cart = () => {
  return (
    <>
      {/* {cartItems ?
        cartItems.map((item) => {
          <div className="flex whitespace-nowrap overflow-hidden w-full justify-between">
            return (
            <>
              <div className="mr-1">
                <input
                  type="text"
                  defaultValue="1"
                  className="input input-bordered w-10 max-w-xs"
                />
              </div>
              <div className="w-20 rounded-lg flex mr-2">
                <img src="/assets/items/item1.jpg" className="object-center" />
              </div>
              <div className="w-full my-auto flex flex-col align-middle">
                <div className="text-xl font-light">{item.name}</div>
              </div>
              <div className="my-auto flex flex-col align-middle">
                <div className="text-palette-accent text-xl font-bold">
                  Rs. {item.count * item.cost}
                </div>
              </div>
            </>
            );
          </div>;
        }):
        <div>
          No items in cart. Shop ahead!!
        </div>
        }
      <div className="divider" />
      <div className="flex mb-2 align-middle justify-end">
        <div>
          Total: <span className="ml-2 text-palette-accent text-3xl">900</span>
        </div>
      </div> */}
    </>
  );
};
export default Cart;
