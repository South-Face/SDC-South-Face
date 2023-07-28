
import React, { useState } from 'react';
import ColorCircle from './ColorCircle';
import { LuRuler } from "react-icons/lu"; 
import './ProductDetail.css'; 

const colors = [
    { id: 1, colorName: 'Color - Gardenia White/Burnt Coral Metallic', colorValue: ['rgb(237,137,126)', 'rgb(240,232,222)'] },
    { id: 2, colorName: 'Color - Boysenberry/Burnt Coral Metallic', colorValue: ['rgb(237,137,126)', 'rgb(94,40,65)'] },
    { id: 3, colorName: 'Color - Dark Sage/Burnt Coral Metallic', colorValue: ['rgb(237,137,126)', 'rgb(87,112,107)'] },
    { id: 4, colorName: 'Color TVF Black Heather - Burnt Coral Metallic', colorValue: ['rgb(237,137,126)', 'rgb(38,37,39)'] },
];

const SelectColor = () => {
    const [selectedColor, setSelectedColor] = useState(colors[0].colorName);
    const [hoverColor, setHoverColor] = useState(null);
    
    const handleColorChange = (colorName) => {
        setSelectedColor(colorName);
    }

    return (
        <div>
            <h1 id="color-description">{hoverColor || selectedColor}</h1>
            <div className="color-selection">
                {colors.map(color => (
                    <ColorCircle 
                      key={color.id} 
                      colors={color.colorValue} 
                      clickHandler={() => handleColorChange(color.colorName)} 
                      onHover={() => setHoverColor(color.colorName)} 
                      onHoverEnd={() => setHoverColor(null)} 
                      isSelected={selectedColor === color.colorName}
                    />
                ))}
            </div>
            <div className="size-and-fit">
                <LuRuler className="ruler" /><a href="#" className="size-fit-guide">Size and Fit Guide</a>
            </div>
        </div>
    );
}
    
export default SelectColor;
