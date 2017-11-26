import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllArticles } from '../actions/articles';
import {Link} from 'react-router-dom';

class Articles extends Component {
  constructor(props) {
    super(props)
}

componentDidMount() {
    this.props.fetchAllArticles()
}

render() {
    return (
        <div className="body">

        <div className="title">
        <ul>
            <li><i className="fa fa-heart"></i></li> 
            <li><h1>All articles</h1></li>
            <li><i className="fa fa-heart"></i></li> 
        </ul>    
        </div>

            {this.props.articles.map((article, i) => {
                    return (
                        <div key={i} className="article">
                            <ul>
                                <li> <span> Article ID:</span> <Link to={`/Articles/${article._id}`}>{article._id}</Link></li>
                                <li> <span>Article Title:</span> {article.title}</li>
                                <li> <span>Created By: </span>{article.created_by}</li> <br />
                                <li> {article.body}</li>
                            </ul>
                        </div>
                    )
                }
            )}
        </div>
    );
}
}

function mapStateToProps(state) {
return {
    loading: state.articles.loading,
    error: state.articles.error,
    articles: state.articles.payload
};
}
function mapDispatchToProps(dispatch) {
return {
    fetchAllArticles: (data) => {
        dispatch(fetchAllArticles());
    }
};
}

            
export default connect(mapStateToProps,mapDispatchToProps)(Articles);
