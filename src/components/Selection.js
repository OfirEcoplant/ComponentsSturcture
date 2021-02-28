import React from 'react';
import SelectionOption from "./SelectionOption";

function Selection({title, selectionOptions}) {
    return (
        <div className="collection-sort">
            <label>{title} by:</label>
            <select>
                {selectionOptions.map((text) => (
                <SelectionOption key={text} optionText={text}/>
                ))}
            </select>
        </div>
    );

}

export default Selection;