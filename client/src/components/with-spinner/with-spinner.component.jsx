import React from 'styled-components';

import Spinner from '../spinner/spinner.component';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
        return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
};

export default WithSpinner;
