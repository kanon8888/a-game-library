import React from "react";
import { useLoaderData } from "react-router-dom";

const MoreGame = () => {
    const games = useLoaderData() || []; // loader থেকে ডেটা নাও
    console.log(games); // এটা চেক করো data আসছে কি না

    return (
        <div className="container mx-auto px-4 my-10">
            <h2 className="text-3xl font-bold mb-6 text-center">All Games</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {games.map((game) => (
                    <div key={game.id} className="border rounded-xl p-4 shadow hover:shadow-lg transition">
                        <img
                            src={game.coverPhoto}
                            alt={game.title}
                            className="w-full h-48 object-cover rounded-xl mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
                        <p className="text-gray-600 mb-1">{game.category}</p>
                        <p className="text-sm text-gray-500 mb-2">{game.developer}</p>
                        <p className="text-yellow-500 font-semibold">⭐ {game.ratings}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoreGame;

