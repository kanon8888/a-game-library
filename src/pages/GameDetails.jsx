

import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const GameDetails = () => {
    const game = useLoaderData();
    if (!game) return <p className="text-center mt-10">Game not found</p>;

    return (
        <div className="max-w-3xl mx-auto my-10 p-4 border rounded-xl shadow bg-white">
            <img src={game.coverPhoto} alt={game.title} className="w-full h-64 object-cover rounded-xl mb-4" />
            <h2 className="text-3xl font-bold mb-2">{game.title}</h2>
            <p className="text-gray-600 mb-1">{game.category}</p>
            <p className="text-gray-500 mb-2">{game.developer}</p>
            <p className="text-yellow-500 font-semibold mb-4">⭐ {game.ratings}</p>
            <p className="text-gray-700 mb-4">{game.description}</p>

            <a href={game.downloadLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Download
            </a>

            <div className="mt-4">
                <Link to="/games" className="text-blue-500 hover:underline">← Back to all games</Link>
            </div>
        </div>
    );
};

export default GameDetails;
