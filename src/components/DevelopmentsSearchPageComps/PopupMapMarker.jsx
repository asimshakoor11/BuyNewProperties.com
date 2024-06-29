import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const PopupMapMarker = ({ position, onClose, image, title, location, price, beds }) => {
    return (
        <>
            <div className='custom-popup' style={{ position: 'absolute', zIndex: 100, background: 'white', padding: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.3)', borderRadius: '5px', minWidth: '200px' }}>
                <button onClick={onClose} style={{ position: 'absolute', top: '5px', right: '5px', background: 'none', border: 'none', cursor: 'pointer' }}>Close</button>
                <img src={image} alt='Property' style={{ width: '100%', marginBottom: '10px' }} />
                <h2 style={{ fontSize: '18px', margin: '0 0 5px' }}>{title}</h2>
                <p style={{ margin: '0 0 5px', fontSize: '14px', color: '#666' }}>{location}</p>
                <p style={{ margin: '0 0 5px', fontSize: '16px', fontWeight: 'bold' }}>{price}</p>
                <p style={{ margin: '0', fontSize: '14px' }}>{beds}</p>
            </div>

        </>
    )
}

export default PopupMapMarker