import React from 'react';

const CurrentYear = new Date().getFullYear();

function Footer() {
    return (
        <footer>
            <p>
                Copyright &#169; {CurrentYear}
            </p>
        </footer>
    );
}

export default Footer;