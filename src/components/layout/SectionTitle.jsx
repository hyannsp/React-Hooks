import './SectionTitle.css'
import React from 'react'

const SectionTitle = ({ title }) => {
    return (
        <div className="SectionTitle">
            <h3>{title}</h3>
        </div>
    )
};

export default SectionTitle;