(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),i=n.n(o),s=(n(14),n(1)),c=n(2),u=n(4),l=n(3),d=n(5),h=(n(16),n(18),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"cardinfo"},r.a.createElement("section",{className:"userid"},this.props.user.userId),r.a.createElement("section",{className:"content"},r.a.createElement("h2",null,this.props.user.title),r.a.createElement("p",null,this.props.user.body)))}}]),t}(a.Component)),p=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={data:[],filter:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!0],postId:0},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts").then(function(e){return e.json()}).then(function(t){return e.setState({data:t})})}},{key:"updatePostId",value:function(e){console.log(typeof Number(e.target.value)),this.setState({postId:Number(e.target.value)})}},{key:"handleClick",value:function(e){var t=this.state.filter;t[e.target.firstChild.nodeValue-1]=!t[e.target.firstChild.nodeValue-1],this.setState(function(e){return{filter:t}})}},{key:"render",value:function(){for(var e=this,t=this.state.data.map(function(t){if(e.state.filter[t.userId-1]||e.state.postId===t.id)return r.a.createElement(h,{key:t.id,user:t})}),n=[],a=1;a<11;a++)n.push(r.a.createElement("button",{key:a,onClick:function(t){return e.handleClick(t)}},a));var o=[];o.push(r.a.createElement("option",{key:"default",value:"default"},"post ID"));for(var i=0;i<this.state.data.length;i++)o.push(r.a.createElement("option",{key:this.state.data[i].id,value:this.state.data[i].id},this.state.data[i].id));return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("div",{className:"btn-group"},r.a.createElement("select",{onChange:function(t){return e.updatePostId(t)}},o),n)),t)}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(20)}},[[8,2,1]]]);
//# sourceMappingURL=main.084ef1a2.chunk.js.map