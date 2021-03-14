import React from 'react';

interface Props {
    setPage: (page: 'planets' | 'people') => void;
}

const Navbar: React.FC<Props> = ({setPage}) => {
    return (
        <nav>
            <button onClick={() => setPage('planets')}>Planets</button>
            <button onClick={() => setPage('people')}>People</button>
        </nav>
    );
};

export default Navbar;
