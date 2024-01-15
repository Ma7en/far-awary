/* eslint-disable react/prop-types */
import React from "react";

const Stats = ({ items }) => {
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);

    return (
        <>
            <footer className="stats">
                <div className="container">
                    {!items.length ? (
                        <em>Start adding some items to your packing list 🚀</em>
                    ) : (
                        <em>
                            {percentage === 100
                                ? "You got everthing! Ready to go ✈️"
                                : `
                    💼 you have ${numItems} item on your list, and you already
                    packed ${numPacked} (${percentage}%)`}
                        </em>
                    )}
                </div>
            </footer>
        </>
    );
};

export default Stats;
