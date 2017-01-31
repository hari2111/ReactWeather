var React=require('react');
var ReactDOM=require('react-dom');
var ReactDOMServer=require('react-dom/server');
var Errormodal=React.createClass({
  propTypes:{
    errormessage:React.PropTypes.string.isRequired
  },
  componentDidMount:function(){
    var {errormessage}=this.props;
    var modalmarkup=(
      <div className="reveal tiny text-center" id="error-modal" data-reveal="">
        <h4>There is an error</h4>
        <p>{errormessage}</p>
        <p>
          <button className="button hollow" data-close=''>Ok</button>
        </p>
      </div>
    );

  var $modal=$(ReactDOMServer.renderToString(modalmarkup));
  $(ReactDOM.findDOMNode(this)).html($modal);

    var modal= new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render:function(){
    return(
      <div>
      </div>
    );
}
});

module.exports=Errormodal;
