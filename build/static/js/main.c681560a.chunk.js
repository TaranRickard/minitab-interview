(this["webpackJsonpinterview-taran-rickard"]=this["webpackJsonpinterview-taran-rickard"]||[]).push([[0],{25:function(e,t,s){},26:function(e,t,s){},31:function(e,t,s){"use strict";s.r(t);var a=s(2),r=s(0),n=s.n(r),i=s(9),o=s.n(i),c=(s(25),s(10)),h=s(11),d=s(13),l=s(12),m=(s(26),s(15)),u=s(7),j=function(e){Object(d.a)(s,e);var t=Object(l.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).resetInputs=function(e){a.setState({n:"",mu:"",sigma:"",muPrime:"",Hypothesis:!1,formError:[!1,!1,!1,!1]})},a.handleCheck=function(e){if(a.setState({Hypothesis:e.target.checked}),!e.target.checked){var t=a.state.formError;t[3]=!1,a.setState({muPrime:"",formError:t})}},a.handleSubmit=function(e){e.preventDefault();var t=!0,s=a.state.formErrorMessages,r=[!1,!1,!1,!1];""===a.state.n&&(r[0]=!0,s[0]="Enter a Sample Size",t=!1),""===a.state.mu&&(r[1]=!0,s[1]="Enter a Sample Mean",t=!1),""===a.state.sigma&&(r[2]=!0,s[2]="Enter a Standard Deviation",t=!1),a.state.Hypothesis&&""===a.state.muPrime&&(r[3]=!0,s[3]="Enter a Hypothesized Mean",t=!1);var n=Number(a.state.n),i=Number(a.state.mu),o=Number(a.state.sigma),c=Number(a.state.muPrime);Number.isInteger(n)||r[0]?n<2&&!r[0]&&(t=!1,s[0]="Sample size needs to be greater than or equal to 2",r[0]=!0):(t=!1,s[0]="Sample size needs to be a whole number",r[0]=!0),Number.isNaN(i)&&!r[1]&&(t=!1,s[1]="Sample mean must be a number",r[1]=!0),Number.isNaN(o)&&!r[2]?(t=!1,s[2]="Standard Deviation must be a number",r[2]=!0):o<=0&&!r[2]&&(t=!1,s[2]="Standard Deviation must be greater than 0",r[2]=!0),a.state.Hypothesis&&!r[3]&&Number.isNaN(c)&&(t=!1,s[3]="Hypothesized mean must be a number",r[3]=!0),a.setState({formError:r,formErrorMessages:s}),t&&(console.log("form is valid"),a.props.showModalFunc({n:n,mu:i,sigma:o,muPrime:c},a.state.Hypothesis))},a.state={Hypothesis:!1,formErrorMessages:["value must be a number","value must be a number","value must be a number","value must be a number"],formError:[!1,!1,!1,!1],n:"",mu:"",sigma:"",muPrime:""},a}return Object(h.a)(s,[{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)("div",{className:"w-50 mx-auto pt-5 text-left",children:Object(a.jsxs)(u.a,{onSubmit:this.handleSubmit,children:[Object(a.jsxs)(u.a.Group,{controlId:"formSampleSize",children:[Object(a.jsx)(u.a.Label,{as:"h5",children:"Sample size:"}),Object(a.jsx)(u.a.Control,{type:"text",value:this.state.n,onChange:function(t){return e.setState({n:t.target.value})}}),Object(a.jsx)(u.a.Text,{className:"text-danger",hidden:!this.state.formError[0],children:this.state.formErrorMessages[0]})]}),Object(a.jsxs)(u.a.Group,{controlId:"formSampleMean",children:[Object(a.jsx)(u.a.Label,{as:"h5",children:"Sample mean:"}),Object(a.jsx)(u.a.Control,{type:"text",value:this.state.mu,onChange:function(t){return e.setState({mu:t.target.value})}}),Object(a.jsx)(u.a.Text,{className:"text-danger",hidden:!this.state.formError[1],children:this.state.formErrorMessages[1]})]}),Object(a.jsxs)(u.a.Group,{controlId:"formStandardDeviation",children:[Object(a.jsx)(u.a.Label,{as:"h5",children:"Standard Deviation:"}),Object(a.jsx)(u.a.Control,{type:"text",value:this.state.sigma,onChange:function(t){return e.setState({sigma:t.target.value})}}),Object(a.jsx)(u.a.Text,{className:"text-danger",hidden:!this.state.formError[2],children:this.state.formErrorMessages[2]})]}),Object(a.jsx)(u.a.Group,{controlId:"formHypothesis",children:Object(a.jsx)(u.a.Check,{type:"checkbox",label:"Perform hypothesis test",checked:this.state.Hypothesis,onChange:this.handleCheck})}),Object(a.jsxs)(u.a.Group,{controlId:"formHypothesizedMean",children:[Object(a.jsx)(u.a.Label,{as:"h5",children:"Hypothesized mean:"}),Object(a.jsx)(u.a.Control,{disabled:!this.state.Hypothesis,type:"text",value:this.state.muPrime,onChange:function(t){return e.setState({muPrime:t.target.value})}}),Object(a.jsx)(u.a.Text,{className:"text-danger",hidden:!this.state.formError[3],children:this.state.formErrorMessages[3]})]}),Object(a.jsxs)("div",{className:"d-flex justify-content-end",children:[Object(a.jsx)("div",{className:"px-2 form-btn",children:Object(a.jsx)(m.a,{block:!0,variant:"primary",type:"submit",children:"OK"})}),Object(a.jsx)("div",{className:"px-2 form-btn",children:Object(a.jsx)(m.a,{block:!0,variant:"outline-secondary",onClick:this.resetInputs,children:"Reset"})})]})]})})})}}]),s}(n.a.Component),b=s(14),p=s(19),x=function(e){Object(d.a)(s,e);var t=Object(l.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).state={},a}return Object(h.a)(s,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(b.a,{show:this.props.showModal,onHide:this.props.hideModalFunc,children:[Object(a.jsx)(b.a.Header,{closeButton:!0,children:Object(a.jsx)(b.a.Title,{children:"Values Entered"})}),Object(a.jsx)(b.a.Body,{children:Object(a.jsxs)(p.a,{striped:!0,bordered:!0,hover:!0,children:[Object(a.jsxs)("thead",{children:[Object(a.jsx)("th",{children:"Sample size"}),Object(a.jsx)("th",{children:"Sample mean"}),Object(a.jsx)("th",{children:"Standard Deviation"}),this.props.hypTest&&Object(a.jsx)("th",{children:" Hypothesized Mean"})]}),Object(a.jsxs)("tbody",{children:[Object(a.jsx)("td",{children:this.props.statVars.n}),Object(a.jsx)("td",{children:this.props.statVars.mu}),Object(a.jsx)("td",{children:this.props.statVars.sigma}),this.props.hypTest&&Object(a.jsx)("td",{children:this.props.statVars.muPrime})]})]})}),Object(a.jsx)(b.a.Footer,{children:Object(a.jsx)(m.a,{variant:"primary",onClick:this.props.hideModalFunc,children:"Close"})})]})})}}]),s}(n.a.Component),O=function(e){Object(d.a)(s,e);var t=Object(l.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).hideModalFunc=function(e){a.setState({showModal:!1})},a.showModalFunc=function(e,t){a.setState({showModal:!0,statVars:e,hypTest:t})},a.state={showModal:!1,statVars:{n:"",mu:"",sigma:"",muPrime:""}},a}return Object(h.a)(s,[{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(j,{showModalFunc:this.showModalFunc}),Object(a.jsx)(x,{showModal:this.state.showModal,hideModalFunc:this.hideModalFunc,statVars:this.state.statVars,hypTest:this.state.hypTest})]})}}]),s}(n.a.Component),f=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,33)).then((function(t){var s=t.getCLS,a=t.getFID,r=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),r(e),n(e),i(e)}))};s(30);o.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),f()}},[[31,1,2]]]);
//# sourceMappingURL=main.c681560a.chunk.js.map