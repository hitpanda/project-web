(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{20:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var a=n(8),s=n.n(a),r=n(2),c=n(3),i=n(6),o=n(5),l=n(1),u=n.n(l),d=(n(20),n(9)),j=n(4),h="SAVE_TASK",b="TOGGLE_FORM",p="CLOSE_FORM",m="OPEN_FORM",O="UPDATE_TASK_STATUS",f="DELETE_TASK",x="EDIT_TASK",v="FILTER_TABLE",g="SEARCH",k="SORT",y=function(){return{type:m}},T=function(t){return{type:x,task:t}},N=n(0),S=function(t){Object(i.a)(n,t);var e=Object(o.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).handleClearForm=function(){a.setState({id:"",name:"",status:!1})},a.handleCloseForm=function(){a.props.onCloseForm()},a.handleChange=function(t){var e=t.target,n=e.name,s=e.value;"status"===n&&(s="true"===e.value),a.setState(Object(d.a)({},n,s))},a.handleSubmit=function(t){t.preventDefault(),a.props.onSaveTask(a.state),a.handleClearForm(),a.handleCloseForm()},a.state={id:"",name:"",status:!1},a}return Object(c.a)(n,[{key:"UNSAFE_componentWillMount",value:function(){this.props.taskEditing&&this.setState({id:this.props.taskEditing.id,name:this.props.taskEditing.name,status:this.props.taskEditing.status})}},{key:"UNSAFE_componentWillReceiveProps",value:function(t){t&&t.taskEditing?this.setState({id:t.taskEditing.id,name:t.taskEditing.name,status:t.taskEditing.status}):t.taskEditing||this.handleClearForm()}},{key:"render",value:function(){return Object(N.jsxs)("div",{className:"panel",children:[Object(N.jsxs)("div",{className:"panel-heading",children:[Object(N.jsx)("h4",{children:""!==this.state.id?"S\u1eeda C\xf4ng Vi\u1ec7c":"Th\xeam C\xf4ng Vi\u1ec7c"}),Object(N.jsx)("i",{className:"far fa-times-circle",onClick:this.handleCloseForm})]}),Object(N.jsx)("div",{className:"panel-body",children:Object(N.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(N.jsxs)("div",{className:"form-group",children:[Object(N.jsx)("label",{children:"T\xean:"}),Object(N.jsx)("input",{type:"text",name:"name",className:"form-control",value:this.state.name,onChange:this.handleChange,required:!0})]}),Object(N.jsx)("br",{}),Object(N.jsxs)("div",{className:"form-group",children:[Object(N.jsx)("label",{children:"Tr\u1ea1ng Th\xe1i:"}),Object(N.jsxs)("select",{className:"form-control",name:"status",value:this.state.status,onChange:this.handleChange,children:[Object(N.jsx)("option",{value:!0,children:"K\xedch ho\u1ea1t"}),Object(N.jsx)("option",{value:!1,children:"\u1ea8n"})]})]}),Object(N.jsx)("br",{}),Object(N.jsxs)("div",{className:"text-center",children:[Object(N.jsxs)("button",{type:"submit",className:"btn btn-success",children:[Object(N.jsx)("i",{className:"fas fa-plus"}),"\xa0 L\u01b0u L\u1ea1i"]}),"\xa0",Object(N.jsxs)("button",{type:"button",className:"btn btn-danger",onClick:this.handleClearForm,children:[Object(N.jsx)("i",{className:"fas fa-times"}),"\xa0 H\u1ee7y B\u1ecf"]})]})]})})]})}}]),n}(u.a.Component),C=Object(j.b)((function(t){return{taskEditing:t.isEditTask}}),(function(t,e){return{onSaveTask:function(e){t(function(t){return{type:h,task:t}}(e))},onCloseForm:function(){t({type:p})}}}))(S),w=function(t){Object(i.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).handleChange=function(e){t.props.onSearch(e.target.value)},t.handleSearch=function(){t.props.onSearch(t.props.keyword)},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.props.keyword;return Object(N.jsx)("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6",children:Object(N.jsxs)("div",{className:"input-group",children:[Object(N.jsx)("input",{type:"text",className:"form-control",placeholder:"Nh\u1eadp t\u1eeb kh\xf3a",name:"keyword",value:t,onChange:this.handleChange}),Object(N.jsxs)("button",{type:"button",className:"btn btn-primary",onClick:this.handleSearch,children:[Object(N.jsx)("i",{className:"fas fa-search"}),"\xa0 T\xecm"]})]})})}}]),n}(u.a.Component),E=Object(j.b)((function(t){return{keyword:t.searchTask}}),(function(t,e){return{onSearch:function(e){t(function(t){return{type:g,keyword:t}}(e))}}}))(w),F=function(t){Object(i.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).handleSort=function(e,n){t.props.onSort({by:e,value:n})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.props.sort;return Object(N.jsx)("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6",children:Object(N.jsx)("div",{className:"dropdown",children:Object(N.jsxs)("button",{className:"btn btn-primary dropdown-toggle",type:"button",children:["S\u1eafp x\u1ebfp",Object(N.jsxs)("ul",{className:"dropdown-menu",children:[Object(N.jsx)("li",{onClick:function(){return t.handleSort("name",1)},children:Object(N.jsxs)("p",{role:"button",className:"name"===e.by&&1===e.value?"dropdown-item sort_selected":"dropdown-item",children:[Object(N.jsx)("i",{className:"fas fa-sort-alpha-down"}),"\xa0 T\xean A-Z"]})}),Object(N.jsx)("li",{onClick:function(){return t.handleSort("name",-1)},children:Object(N.jsxs)("p",{role:"button",className:"name"===e.by&&-1===e.value?"dropdown-item sort_selected":"dropdown-item",children:[Object(N.jsx)("i",{className:"fas fa-sort-alpha-up"}),"\xa0 T\xean Z-A"]})}),Object(N.jsx)("li",{role:"separator",className:"divider"}),Object(N.jsx)("li",{onClick:function(){return t.handleSort("status",1)},children:Object(N.jsx)("p",{role:"button",className:"status"===e.by&&1===e.value?"dropdown-item sort_selected":"dropdown-item",children:"Tr\u1ea1ng Th\xe1i K\xedch Ho\u1ea1t"})}),Object(N.jsx)("li",{onClick:function(){return t.handleSort("status",-1)},children:Object(N.jsx)("p",{role:"button",className:"status"===e.by&&-1===e.value?"dropdown-item sort_selected":"dropdown-item",children:"Tr\u1ea1ng Th\xe1i \u1ea8n"})})]})]})})})}}]),n}(u.a.Component),_=Object(j.b)((function(t){return{sort:t.sortTask}}),(function(t,e){return{onSort:function(e){t(function(t){return{type:k,sort:t}}(e))}}}))(F),A=function(t){Object(i.a)(n,t);var e=Object(o.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(N.jsxs)("div",{className:"row mt-20",children:[Object(N.jsx)(E,{}),Object(N.jsx)(_,{})]})}}]),n}(u.a.Component),D=function(t){Object(i.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).handleUpdateTaskStatus=function(){t.props.onUpdateTaskStatus(t.props.task.id)},t.handleDeleteTask=function(){t.props.onDeleteTask(t.props.task.id)},t.handleEditTask=function(){t.props.onOpenForm(),t.props.onEditTask(t.props.task)},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.props,e=t.task,n=t.index;return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:n+1}),Object(N.jsx)("td",{children:e.name}),Object(N.jsx)("td",{className:"text-center",children:Object(N.jsx)("span",{className:e.status?"label label-success":"label label-danger",onClick:this.handleUpdateTaskStatus,children:e.status?"K\xedch Ho\u1ea1t":"\u1ea8n"})}),Object(N.jsxs)("td",{className:"text-center",children:[Object(N.jsxs)("button",{type:"button",className:"btn btn-warning",onClick:this.handleEditTask,children:[Object(N.jsx)("i",{className:"far fa-edit"}),"\xa0 S\u1eeda"]}),"\xa0",Object(N.jsxs)("button",{type:"button",className:"btn btn-danger",onClick:this.handleDeleteTask,children:[Object(N.jsx)("i",{className:"fas fa-trash"}),"\xa0 X\xf3a"]})]})]})}}]),n}(u.a.Component),I=Object(j.b)((function(t){return{}}),(function(t,e){return{onUpdateTaskStatus:function(e){t(function(t){return{type:O,id:t}}(e))},onDeleteTask:function(e){t(function(t){return{type:f,id:t}}(e))},onOpenForm:function(){t(y())},onEditTask:function(e){t(T(e))}}}))(D),L=function(t){Object(i.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).handleChange=function(e){var n=e.target,a=n.name,s=n.value,r={name:"filterName"===a?s:t.props.filterTable.name,status:"filterStatus"===a?s:t.props.filterTable.status};t.props.onFilterTable(r)},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.props,e=t.tasks,n=t.filterTable,a=t.keyword,s=t.sort;n&&(n.name&&(e=e.filter((function(t){return-1!==t.name.toLowerCase().indexOf(n.name)}))),e=e.filter((function(t){return-1===n.status?t:t.status===(1===n.status)}))),a&&(e=e.filter((function(t){return-1!==t.name.toLowerCase().indexOf(a)}))),"name"===s.by?e.sort((function(t,e){return t.name>e.name?s.value:t.name<e.name?-s.value:0})):e.sort((function(t,e){return t.status>e.status?-s.value:s.value}));var r=e.map((function(t,e){return Object(N.jsx)(I,{index:e,task:t},t.id)}));return Object(N.jsxs)("table",{className:"table",children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"STT"}),Object(N.jsx)("th",{children:"T\xean"}),Object(N.jsx)("th",{children:"Tr\u1ea1ng Th\xe1i"}),Object(N.jsx)("th",{children:"H\xe0nh \u0110\u1ed9ng"})]})}),Object(N.jsxs)("tbody",{children:[Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{}),Object(N.jsx)("td",{children:Object(N.jsx)("input",{type:"text",className:"form-control",name:"filterName",value:this.props.filterTable.name,onChange:this.handleChange})}),Object(N.jsx)("td",{children:Object(N.jsxs)("select",{className:"form-control",name:"filterStatus",value:this.props.filterTable.status,onChange:this.handleChange,children:[Object(N.jsx)("option",{value:-1,children:"T\u1ea5t C\u1ea3"}),Object(N.jsx)("option",{value:0,children:"\u1ea8n"}),Object(N.jsx)("option",{value:1,children:"K\xedch Ho\u1ea1t"})]})}),Object(N.jsx)("td",{})]}),r]})]})}}]),n}(u.a.Component),U=Object(j.b)((function(t){return{tasks:t.tasks,filterTable:t.filterTable,keyword:t.searchTask,sort:t.sortTask}}),(function(t,e){return{onFilterTable:function(e){t(function(t){return{type:v,filter:t}}(e))}}}))(L),R=function(t){Object(i.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).handleToggleForm=function(){var e=t.props.taskEditing;e&&""!==e.id?t.props.onOpenForm():t.props.onToggleForm(),t.props.onClearTask({id:"",name:"",status:!1})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.props.isDisplayForm,e=t?Object(N.jsx)(C,{}):"";return Object(N.jsxs)("div",{className:"container mt-20",children:[Object(N.jsx)("div",{className:"text-center",children:Object(N.jsx)("h1",{children:"Qu\u1ea3n L\xfd C\xf4ng Vi\u1ec7c"})}),Object(N.jsx)("hr",{}),Object(N.jsxs)("div",{className:"row",children:[Object(N.jsx)("div",{className:"col-xs-4 col-sm-4 col-md-4 col-lg-4",children:e}),Object(N.jsxs)("div",{className:t?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:[Object(N.jsxs)("button",{type:"button",className:"btn btn-primary",onClick:this.handleToggleForm,children:[Object(N.jsx)("i",{className:"fas fa-plus"}),"\xa0 Th\xeam C\xf4ng Vi\u1ec7c"]}),"\xa0",Object(N.jsx)("br",{}),Object(N.jsx)(A,{}),Object(N.jsx)("br",{}),Object(N.jsx)("div",{className:"row",children:Object(N.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:Object(N.jsx)(U,{})})})]})]})]})}}]),n}(u.a.Component),K=Object(j.b)((function(t){return{isDisplayForm:t.isDisplayForm,taskEditing:t.isEditTask}}),(function(t,e){return{onToggleForm:function(){t({type:b})},onClearTask:function(e){t(T(e))},onOpenForm:function(){t(y())}}}))(R),V=n(10),H=n(7),J=n(12),M=n(11),X=n.n(M),B=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)},P=function(){return B()+B()+"-"+B()+B()+"-"+B()+B()+B()+B()+"-"+B()+B()+B()+B()+"-"+B()+B()},G=JSON.parse(localStorage.getItem("tasks")),W=G||[],Z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case h:var n={id:e.task.id,name:e.task.name,status:"true"===e.task.status||!0===e.task.status};if(""===n.id)n.id=P(),t.push(n);else{var a=X.a.findIndex(t,(function(t){return t.id===n.id}));t[a]=n}return localStorage.setItem("tasks",JSON.stringify(t)),Object(J.a)(t);case O:var s=X.a.findIndex(t,(function(t){return t.id===e.id}));return t[s]=Object(H.a)(Object(H.a)({},t[s]),{},{status:!t[s].status}),localStorage.setItem("tasks",JSON.stringify(t)),Object(J.a)(t);case f:var r=X.a.findIndex(t,(function(t){return t.id===e.id}));return t.splice(r,1),localStorage.setItem("tasks",JSON.stringify(t)),Object(J.a)(t);default:return t}},q=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:return!t;case p:return!1;case m:return!0;default:return t}},Q={id:"",name:"",status:!1},z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case x:return t=Object(H.a)({},e.task),Object(H.a)({},t);default:return t}},Y={name:"",status:-1},$=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v:return e.filter.status=parseInt(e.filter.status,10),t=Object(H.a)({},e.filter),Object(H.a)({},t);default:return t}},tt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g:return t=e.keyword;default:return t}},et={by:"name",value:1},nt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case k:return t=Object(H.a)({},e.sort),Object(H.a)({},t);default:return t}},at=Object(V.a)({tasks:Z,isDisplayForm:q,isEditTask:z,filterTable:$,searchTask:tt,sortTask:nt}),st=Object(V.b)(at,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(N.jsx)(j.a,{store:st,children:Object(N.jsx)(K,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.c629fcac.chunk.js.map