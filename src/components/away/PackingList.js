/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, onDeleteItem, onToggleItem, onClearList }) => {
    const [sortBy, setSortBy] = useState("input");

    let sortedItems;

    if (sortBy === "input") sortedItems = items;

    if (sortBy === "description")
        sortedItems = items
            .slice()
            .sort((a, b) => a.description.localeCompare(b.description));

    if (sortBy === "packed")
        sortedItems = items
            .slice()
            .sort((a, b) => Number(a.packed) - Number(b.packed));

    return (
        <>
            <div className="list">
                <div className="container">
                    {sortedItems.length === 0 && (
                        <>
                            <div className="no-item">
                                <p>no item</p>
                            </div>
                        </>
                    )}

                    <div className="actions">
                        {sortedItems.length > 0 && (
                            <>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                >
                                    <option value="input">
                                        Sort by input order
                                    </option>

                                    <option value="description">
                                        Sort by description
                                    </option>

                                    <option value="packed">
                                        Sort by packed status
                                    </option>
                                </select>
                            </>
                        )}
                    </div>

                    <ul>
                        {sortedItems.length > 0 && (
                            <>
                                {sortedItems.map((item) => (
                                    <Item
                                        item={item}
                                        onDeleteItem={onDeleteItem}
                                        onToggleItem={onToggleItem}
                                        key={item.id}
                                    />
                                ))}
                            </>
                        )}
                    </ul>

                    {sortedItems.length > 0 && (
                        <>
                            <div className="clear">
                                <button onClick={onClearList}>
                                    Clear List
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default PackingList;
