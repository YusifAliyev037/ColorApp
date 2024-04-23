import{c as q,f as N,b as O,o as A,d as P,j as o,e as D,r as n,g as b,h as w,i as H,u as T,a as U,k as W,s as _,l as J,m as K,R as Q}from"./index-DizXHgz4.js";import{m as B,B as m,u as V,H as X,T as R,a as G}from"./useTitle-BV9dZ3J9.js";var[Y,Z]=q({name:"FormControlStylesContext",errorMessage:`useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `}),[ee,E]=q({strict:!1,name:"FormControlContext"});function oe(a){const{id:l,isRequired:t,isInvalid:s,isDisabled:e,isReadOnly:r,...u}=a,h=n.useId(),i=l||`field-${h}`,v=`${i}-label`,C=`${i}-feedback`,g=`${i}-helptext`,[F,p]=n.useState(!1),[y,j]=n.useState(!1),[x,I]=n.useState(!1),c=n.useCallback((d={},f=null)=>({id:g,...d,ref:B(f,S=>{S&&j(!0)})}),[g]),M=n.useCallback((d={},f=null)=>({...d,ref:f,"data-focus":b(x),"data-disabled":b(e),"data-invalid":b(s),"data-readonly":b(r),id:d.id!==void 0?d.id:v,htmlFor:d.htmlFor!==void 0?d.htmlFor:i}),[i,e,x,s,r,v]),$=n.useCallback((d={},f=null)=>({id:C,...d,ref:B(f,S=>{S&&p(!0)}),"aria-live":"polite"}),[C]),z=n.useCallback((d={},f=null)=>({...d,...u,ref:f,role:"group","data-focus":b(x),"data-disabled":b(e),"data-invalid":b(s),"data-readonly":b(r)}),[u,e,x,s,r]),L=n.useCallback((d={},f=null)=>({...d,ref:f,role:"presentation","aria-hidden":!0,children:d.children||"*"}),[]);return{isRequired:!!t,isInvalid:!!s,isReadOnly:!!r,isDisabled:!!e,isFocused:!!x,onFocus:()=>I(!0),onBlur:()=>I(!1),hasFeedbackText:F,setHasFeedbackText:p,hasHelpText:y,setHasHelpText:j,id:i,labelId:v,feedbackId:C,helpTextId:g,htmlProps:u,getHelpTextProps:c,getErrorMessageProps:$,getRootProps:z,getLabelProps:M,getRequiredIndicatorProps:L}}var le=N(function(l,t){const s=O("Form",l),e=A(l),{getRootProps:r,htmlProps:u,...h}=oe(e),i=P("chakra-form-control",l.className);return o.jsx(ee,{value:h,children:o.jsx(Y,{value:s,children:o.jsx(D.div,{...r({},t),className:i,__css:s.container})})})});le.displayName="FormControl";var se=N(function(l,t){const s=E(),e=Z(),r=P("chakra-form__helper-text",l.className);return o.jsx(D.div,{...s==null?void 0:s.getHelpTextProps(l,t),__css:e.helperText,className:r})});se.displayName="FormHelperText";function te(a){const{isDisabled:l,isInvalid:t,isReadOnly:s,isRequired:e,...r}=re(a);return{...r,disabled:l,readOnly:s,required:e,"aria-invalid":w(t),"aria-required":w(e),"aria-readonly":w(s)}}function re(a){var l,t,s;const e=E(),{id:r,disabled:u,readOnly:h,required:i,isRequired:v,isInvalid:C,isReadOnly:g,isDisabled:F,onFocus:p,onBlur:y,...j}=a,x=a["aria-describedby"]?[a["aria-describedby"]]:[];return e!=null&&e.hasFeedbackText&&(e!=null&&e.isInvalid)&&x.push(e.feedbackId),e!=null&&e.hasHelpText&&x.push(e.helpTextId),{...j,"aria-describedby":x.join(" ")||void 0,id:r??(e==null?void 0:e.id),isDisabled:(l=u??F)!=null?l:e==null?void 0:e.isDisabled,isReadOnly:(t=h??g)!=null?t:e==null?void 0:e.isReadOnly,isRequired:(s=i??v)!=null?s:e==null?void 0:e.isRequired,isInvalid:C??(e==null?void 0:e.isInvalid),onFocus:H(e==null?void 0:e.onFocus,p),onBlur:H(e==null?void 0:e.onBlur,y)}}var k=N(function(l,t){const{htmlSize:s,...e}=l,r=O("Input",e),u=A(e),h=te(u),i=P("chakra-input",l.className);return o.jsx(D.input,{size:s,...h,__css:r.field,ref:t,className:i})});k.displayName="Input";k.id="Input";function ae(){const a=T(l=>l.color.colorGroup);return o.jsx(m,{display:"flex",w:"400px",flexWrap:"wrap",children:a.map((l,t)=>o.jsx(m,{bg:l.code,border:"1px solid",height:"70px",w:"150px",p:4,color:"white",children:l.name},t))})}function de(){V("Setting");const[a,l]=n.useState(""),[t,s]=n.useState(""),[e,r]=n.useState(""),[u,h]=n.useState(0),[i,v]=n.useState(!1),[C,g]=n.useState(!0),F=U(),p=W(),y=T(c=>c.color.colorGroup),j=T(c=>c.color.colorHome);console.log(j),console.log("colorGroup",y),n.useEffect(()=>{p(_(y))},[y,p]);function x(){if(t.trim()===""){console.log("Color name cannot be empty");return}p(J({name:t,code:e})),h(c=>c+1),u>=5&&(v(!0),g(!1))}function I(){if(a.trim()===""){console.log("Color name cannot be empty");return}p(_({name:a,home:j})),p(K()),F(Q.HOME)}return o.jsxs(m,{backgroundColor:"#051650",height:"100vh",children:[o.jsx(X,{}),o.jsx(m,{p:8,textAlign:"center",children:o.jsx(R,{as:"b",color:"white",fontSize:"4xl",children:"Create Color Group"})}),o.jsxs(m,{p:8,display:"flex",justifyContent:"space-between",children:[o.jsxs(m,{display:"flex",gap:4,flexDirection:"column",children:[o.jsxs(m,{children:[o.jsx(R,{color:"white",children:"Color Name"}),o.jsx(k,{value:t,onChange:c=>s(c.target.value),backgroundColor:"white",width:"200px"})]}),o.jsxs(m,{children:[o.jsx(R,{color:"white",children:"Color Code"}),o.jsx(k,{value:e,onChange:c=>r(c.target.value),backgroundColor:"white",width:"200px"})]}),o.jsx(m,{children:o.jsx(G,{onClick:x,backgroundColor:"#40b708",isDisabled:i,children:"Add Color"})})]}),o.jsxs(m,{display:"flex",gap:4,flexDirection:"column",children:[o.jsx(ae,{}),o.jsxs(m,{display:"flex",gap:6,flexDirection:"column",children:[o.jsx(R,{color:"white",children:"Group Name"}),o.jsx(k,{value:a,onChange:c=>l(c.target.value),backgroundColor:"white",width:"400px"}),o.jsx(G,{onClick:I,isDisabled:C,backgroundColor:"#40b708",children:"   Add Name"})]})]})]})]})}export{de as default};