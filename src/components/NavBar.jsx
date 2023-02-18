
export default function NavBar() {
    return (
        <header className="flex justify-between bg-lime-500 h-16 items-center px-5">
            <a href="" className="flex items-center gap-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 -rotate-90"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                </svg>
                <span className="font-bold text-xl">Tu Tienda Virtual</span>
            </a>
            <div className="flex gap-2">
                <div>Audifonos</div>
                <div className="border-l border-gray-300"></div>
                <div>Relojes Inteligentes</div>
                <div className="border-l border-gray-300"></div>
                <div>Drones</div>
                <button className="bg-primary text-white p-1 rounded-full">
                   
                </button>
            </div>

            <div className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>

                <h3>5</h3>

            </div>

        </header>
    );
}
