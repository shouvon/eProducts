import React from 'react';
import { Link as MatLink } from '@mui/material';
import { Link } from 'react-router-dom';

export default function MuiLink({ to, children, ...rest }) {
    return (
        <MatLink component={Link} to={to} {...rest}>
            {children}
        </MatLink>
    );
}