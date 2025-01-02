import { Dispatch, SetStateAction, useEffect, useState } from "react";

type cartItem = {
  name: string;
  price: number;
  count: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

type CardProps = {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
  setCart: Dispatch<SetStateAction<cartItem[]>>;
  cart: cartItem[];
  desktop: boolean
};

export default function Card({
  image,
  name,
  category,
  price,
  setCart,
  cart,
  desktop
}: CardProps) {
  const formattedPrice = price.toFixed(2);

  const [count, setCount] = useState<number>(0);

  const addItem = function (
    name: string,
    price: number,
    image: {
      thumbnail: string;
      mobile: string;
      tablet: string;
      desktop: string;
    }
  ) {
    const product = {
      name,
      price,
      count: 1,
      image,
    };
    const revisedCart = [...cart, product];
    setCart(revisedCart);
  };

  const modifiedItem = function (name: string) {
    const getCart = [...cart];
    getCart.map((data, index) => {
      if (data.name == name) {
        {
          count == 0 ? getCart.splice(index, 1) : (data.count = count);
        }
      }
    });
    setCart(getCart);
  };

  const checkCartCount = (name: string) => {
    const item = cart.find((data) => data.name === name);
    if (!item) {
      setCount(0);
    }
  };

  

  useEffect(() => {
    modifiedItem(name);
  }, [count]);

  useEffect(() => {
    checkCartCount(name);
  }, [cart]);

  return (
    <div className="w-full ">
      <div className="my-8 relative">
        <img
          className={`rounded-xl ${
            count != 0 ? "border-2 border-red-700" : null
          }`}
          src={desktop ? image.desktop : image.mobile}
          alt={name}
        />
        {count === 0 ? (
          <button
            className={`border border-solid border-black rounded-full  px-4 py-3 w-40 flex items-center justify-center absolute  font-semibold bg-white hover:text-red-700 hover:border-red-700
         ${desktop ? "left-3 -bottom-6" : "left-1/4 -bottom-5"}`}
            onClick={() => {
              setCount(1);
              addItem(name, price, image);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              fill="none"
              viewBox="0 0 21 20"
              className="mr-3"
            >
              <g fill="#C73B0F" clip-path="url(#a)">
                <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
                <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M.333 0h20v20h-20z" />
                </clipPath>
              </defs>
            </svg>
            Add to Cart
          </button>
        ) : (
          <button
            className={`border border-solid border-rose-900 rounded-full  px-4 py-3 w-40 flex items-center justify-center absolute font-semibold bg-red-700 text-white 
              ${desktop ? "left-3 -bottom-6" : "left-1/4 -bottom-5"
            }`}
          >
            <div className="w-full flex flex-row justify-between items-center">
              <button
                onClick={(event) => {
                  const minus = count - 1;
                  setCount(minus);
                  event.stopPropagation();
                }}
              >
                <div
                  className="border rounded-full w-5
                  h-5 flex items-center justify-center"
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="2"
                    fill="none"
                    viewBox="0 0 10 2"
                  >
                    <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
                  </svg>
                </div>
              </button>
              {count}
              <button
                onClick={(event) => {
                  const plus = count + 1;
                  setCount(plus);
                  event.stopPropagation();
                }}
              >
                <div
                  className="border rounded-full w-5
                  h-5 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="none"
                    viewBox="0 0 10 10"
                  >
                    <path
                      fill="#fff"
                      d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </button>
        )}
      </div>
      <div className="font-light text-rose-950">{category}</div>
      <div className="font-semibold text-rose-950">{name}</div>
      <div className="text-red-600">${formattedPrice}</div>
    </div>
  );
}
