import React from 'react';
import { Link } from 'react-router-dom';
import { GoCheck } from 'react-icons/go';
function ThankYouPage() {
    return (
        <div className='tnx'>
            <div className="tnx__content">
                <h1>THANK YOU</h1>
                <GoCheck className='checkIcon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores et minus, facilis fugit repudiandae molestias, possimus aspernatur quibusdam velit culpa in error fugiat! Nulla numquam laborum a fugiat corporis? Modi nemo saepe asperiores excepturi numquam explicabo natus ipsam aliquam earum suscipit quasi velit, unde atque libero illo magni similique voluptatum.</p>
                <Link to='/' className='link tnxLink'>Go back to landing page</Link>
            </div>
        </div>
    );
}

export default ThankYouPage;
