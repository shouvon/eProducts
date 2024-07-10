import React from 'react'
import { LoadingButton } from "@mui/lab";
import PropTypes from 'prop-types'

const MuiButton = (props) => {
    const { variant, loading, ...restProps } = props;
    return (
        <LoadingButton
            {...restProps}
            loading={loading}
            variant={variant}
        />
    )
}

MuiButton.propTypes = {
    variant: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired
}

MuiButton.defaultProps = {
    variant: 'contained',
    loading: false
}

export default MuiButton;
