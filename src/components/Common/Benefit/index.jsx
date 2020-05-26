import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Benefit.css';
class Benefit extends PureComponent {
    render() {
        return (
            <>
    <div className="benefit">
		<div className="container">
			<div className="row benefit_row">
				<div className="col-lg-3 benefit_col">
					<div className="benefit_item d-flex flex-row align-items-center">
						<div className="benefit_icon"><i className="fa fa-truck" aria-hidden="true"></i></div>
						<div className="benefit_content">
							<h6>free shipping</h6>
							<p>Suffered Alteration in Some Form</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 benefit_col">
					<div className="benefit_item d-flex flex-row align-items-center">
						<div className="benefit_icon"><i className="far fa-money-bill-alt" aria-hidden="true"></i></div>
						<div className="benefit_content">
							<h6>cach on delivery</h6>
							<p>The Internet Tend To Repeat</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 benefit_col">
					<div className="benefit_item d-flex flex-row align-items-center">
						<div className="benefit_icon"><i className="fa fa-undo" aria-hidden="true"></i></div>
						<div className="benefit_content">
							<h6>45 days return</h6>
							<p>Making it Look Like Readable</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 benefit_col">
					<div className="benefit_item d-flex flex-row align-items-center">
						<div className="benefit_icon"><i className="far fa-clock" aria-hidden="true"></i></div>
						<div className="benefit_content">
							<h6>opening all week</h6>
							<p>8AM - 09PM</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

            </>
        );
    }
}

Benefit.propTypes = {

};

export default Benefit;