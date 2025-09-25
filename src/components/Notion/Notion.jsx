import React from 'react'
import './Notion.css'
import NotionBackground from './image-notion/notion.png'
import LetterN from './image-notion/N.png'
import NotionLastCadr from './image-notion/last-cadr.png'

function Notion() {
    return (
        <div className="Notion-container-1">
            <div className="Notion-container-2">
                
                <div className="notion-block">
                    <img className='notion-background' src={NotionBackground} alt="notion-background" />
                    <img className='notion-letter-N' src={LetterN} alt="letter-N" />
                </div>

                <div className="notion-block-2">
                    <img className='notion-last-cadr' src={NotionLastCadr} alt="notion-background" />
                    
                </div>
            </div>
        </div>
    )
}

export default Notion
