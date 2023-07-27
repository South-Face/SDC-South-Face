
import React, { useState } from 'react';
import ColorCircle from './ColorCircle';
import './ProductDetail.css'; 

const colors = [
    { id: 1, colorName: 'Color - Gardenia White/Burnt Coral Metallic', colorValue: ['#FF7F50', '#FDFCF0'] },
    { id: 2, colorName: 'Color - Boysenberry/Burnt Coral Metallic', colorValue: ['#FF7F50', '#873260'] },
    { id: 3, colorName: 'Color - Dark Sage/Burnt Coral Metallic', colorValue: ['#FF7F50', '#598556'] },
    { id: 4, colorName: 'Color TVF Black Heather - Burnt Coral Metallic', colorValue: ['#FF7F50', '#232323'] },
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
            <a href="#" className="size-fit-guide">Size and Fit Guide</a>
        </div>
    );
}
    
export default SelectColor;
