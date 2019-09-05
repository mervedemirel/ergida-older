import React from 'react';

import {withTranslation, Link} from "../../../i18n";

const Button = (props) => {
    return (
        <Link href="/">
        <button type="button" className="btn btn-success px-4 rounded button-green align-self-baseline">{props.t(props.translateText)}</button>
        </Link>
    );
};

// export default Button;
export default withTranslation('common')(Button);
