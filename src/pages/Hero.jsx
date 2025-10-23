import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const Hero = () => {
    const games = useLoaderData() || [];

    return (
        <div className="container mx-auto px-4 my-10">
            <h2 className="text-3xl font-bold mb-6 text-center">🎮 Popular Games</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {games.map(game => (
                    <div key={game.id} className="border rounded-xl p-4 shadow hover:shadow-lg transition bg-white">
                        <img src={game.coverPhoto} alt={game.title} className="w-full h-48 object-cover rounded-xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
                        <p className="text-gray-600 mb-2">{game.category}</p>
                        <p className="text-sm text-gray-500 mb-2">{game.developer}</p>
                        <div className="flex justify-between items-center mt-2">
                            <p className="text-yellow-500 font-semibold">⭐ {game.ratings}</p>
                            <a href={game.downloadLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                Download
                            </a>
                        </div>

                        
                        <Link to={`/game/${game.id}`}>
                            <button className="mt-5 w-full px-4 py-2 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700">
                                View Details
                            </button>
                        </Link>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-8">
                <Link to="/games">
                    <button className="px-6 py-2 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 transition">
                        Explore More Games
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Hero;







