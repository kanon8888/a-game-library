import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const MoreGame = () => {
    const games = useLoaderData() || [];

    
    const topGames = [...games].sort((a, b) => b.ratings - a.ratings).slice(0, 3);

    return (
        <div className="container mx-auto px-4 my-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Top 3 Games</h2>

            {topGames.length === 0 ? (
                <p className="text-center">No games available</p>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {topGames.map((game) => (
                        <div key={game.id} className="border rounded-xl p-4 shadow hover:shadow-lg transition bg-white flex flex-col">
                            <img src={game.coverPhoto} alt={game.title} className="w-full h-48 object-cover rounded-xl mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
                            <p className="text-gray-600 mb-1">{game.category}</p>
                            <p className="text-sm text-gray-500 mb-2">{game.developer}</p>
                            <p className="text-yellow-500 font-semibold mb-4">⭐ {game.ratings}</p>

                           
                            <Link to={`/game/${game.id}`}>
                                <button className="mt-auto w-full px-4 py-2 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MoreGame;



