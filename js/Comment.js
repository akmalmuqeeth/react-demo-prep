import React from 'react'

var Comment = new React.createClass({

	getInitialState : function(){
		return {
			linethrough : false
		}
	},
	toggleApproveClick : function(){
		this.setState({linethrough : !this.state.linethrough})
	},
	render : function(){
		const {author, color,date,comment} = this.props
		return (
			<li className="list-group-item">
				<div className="row">
					<div className="col-xs-2 col-md-1">
						<img src="http://placehold.it/80" className="img-circle img-responsive" alt="" /></div>
					<div className="col-xs-10 col-md-11">
						<div>
							<a href="http://www.jquery2dotnet.com/2013/10/google-style-login-page-desing-usign.html">
								<span style={ this.state.linethrough ? {'text-decoration' : 'line-through'} : {'text-decoration' : 'none'}  }>{this.props.title}</span></a>
							<div className="mic-info">
								By: <a href="#">{author}</a> on {date}
							</div>
						</div>
						<div className="comment-text">
							<span style={  {color : color}  }>{comment}</span>
						</div>
						<div className="action">
							<button type="button" className="btn btn-primary btn-xs" title="Edit">
								<span className="glyphicon glyphicon-pencil"></span>
							</button>
							<button onClick={this.toggleApproveClick} type="button" className="btn btn-success btn-xs" title="Approved">
								<span className="glyphicon glyphicon-ok"></span>
							</button>
							<button onClick={ () => {this.props.handleDelete(this.props.title)} } type="button" className="btn btn-danger btn-xs" title="Delete">
								<span className="glyphicon glyphicon-trash"></span>
							</button>
						</div>
					</div>
				</div>
			</li>
		)
	}
});

export default Comment