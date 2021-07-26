import React from 'react'
import{Link} from 'react-router-dom'
export const MainNAvigations = () => {
    return (
        <div>
            <header>
                <div>
                    <nav>
                        <li><Link to="">All Meetups</Link></li>
                        <li><Link to="Add">New Meetups</Link></li>
                        <li><Link to="Favorates">Favorates</Link></li>
                    </nav>
                    </div>
            </header>
        </div>
    )
}
