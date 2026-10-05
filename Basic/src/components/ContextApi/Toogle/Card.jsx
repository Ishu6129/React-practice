export default function Card() {
    return (
        <article className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 p-5">
            <img
                className="h-52 w-full object-cover"
                src="https://images.unsplash.com/photo-1788790989714-7c89ab5ea54b?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Sunset over the ocean framed by palm leaves"
            />
            <div className="p-5">
                <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                    Sunset by the Sea
                </h2>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    Enjoy the warm colors of the evening sky as the sun sets over the ocean.
                </p>
            </div>
        </article>
    );
}
