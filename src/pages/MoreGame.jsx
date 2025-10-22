import React from "react";
import { useLoaderData } from "react-router-dom";

const MoreGame = () => {
    const games = useLoaderData() || [];

    
    const topGames = [...games]
        .sort((a, b) => b.ratings - a.ratings)
        .slice(0, 3);

    return (
        <div className="container mx-auto px-4 my-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Top Rated Games</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topGames.map((game) => {
                    
                    let ratingColor = "text-gray-400";
                    if (game.ratings >= 4) ratingColor = "text-yellow-500";
                    else if (game.ratings >= 3) ratingColor = "text-orange-400";

                    return (
                        <div
                            key={game.id}
                            className="border rounded-xl p-4 shadow hover:shadow-lg transition"
                        >
                            <img
                                src={game.coverPhoto}
                                alt={game.title}
                                className="w-full h-48 object-cover rounded-xl mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
                            <p className="text-gray-600 mb-1">{game.category}</p>
                            <p className="text-sm text-gray-500 mb-2">{game.developer}</p>
                            <p className={`${ratingColor} font-semibold`}>⭐ {game.ratings}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MoreGame;


