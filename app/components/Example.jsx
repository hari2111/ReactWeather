var React=require('react');
var {Link}=require('react-router');

var Example=(props)=>{
  return(
    <div>
      <h2 className="text-center page-title">Example</h2>
      <p>Here are few examples to try out </p>
      <ol>
        <li>     <Link to='/?location=Austin'>Austin</Link>  </li>
        <li>        <Link to='/?location=Bangalore'>Bangalore</Link> </li>

      </ol>
      </div>
  )
}
module.exports=Example;
