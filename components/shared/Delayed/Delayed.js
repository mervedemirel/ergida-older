import React from 'react';
import PropTypes from 'prop-types';
import { FaWindows } from 'react-icons/fa';

class Delayed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hidden : true};
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({hidden: false});
        // }, this.props.waitBeforeShow);
        // if (window.pageYOffset > 500) {
        //     this.setState({hidden: false});
        //     console.log("asaaaadaasdadsadsad")
        // }

        window.addEventListener('scroll', () => {
            if (window.scrollY > this.props.waitBeforeShow) {
                this.setState({hidden: false})
            }
        }, {passive: true})
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    // handleScroll(event) {
    //     if (typeof this.props.waitBeforeShow !== 'undefined') {
            // if (window.scrollY > this.props.waitBeforeShow) {
            //     this.setState({hidden: false})
            // }
    //     }
    // }

    render() {
        return this.state.hidden ? '' : this.props.children;
    }
}

Delayed.propTypes = {
    waitBeforeShow: PropTypes.number.isRequired
};

export default Delayed;
