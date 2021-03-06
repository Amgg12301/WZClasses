import React from 'react';

function Toggle({isToggled, onToggle}){
    return (
        <div className="toggle" id="toggle-button">
            <label className="toggle-switch">
                <input type="checkbox" checked={isToggled} onChange={onToggle}/>
                <span className="switch" />
            </label>
        </div>
    )
}

export default Toggle;