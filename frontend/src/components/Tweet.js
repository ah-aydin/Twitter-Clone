import React from 'react';
import { connect } from 'react-redux';

const Tweet = ({ content, owner_username, owner_url }) => {
    return(
        <div className="container p-0">
            <div className="row justify-content-md-center p-0">
                <div className="card col col-lg-6 text-white bg-primary mb-3 p-0">
                    <div className="card-header"><a href={owner_url} className="text-white">{owner_username}</a></div>
                    <div className="card-body">
                        <h5 className="card-title">{content}</h5>
                    </div>
                    <div className="row mx-1 mb-2">
                        <div className="col-lg-5">
                            <button type="button" className="btn btn-danger" style={{marginRight: 4}}>L</button>
                            <button type="button" className="btn btn-danger">R</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
};

const mapStateToProps = (state) => ({
    
});

export default connect(mapStateToProps, { })(Tweet);