(this["webpackJsonpquan-ly-cong-viec"]=this["webpackJsonpquan-ly-cong-viec"]||[]).push([[0],{15:function(t,e,s){},19:function(t,e,s){"use strict";s.r(e);var n=s(8),a=s.n(n),c=s(10),i=s(2),r=s(3),o=s(5),l=s(4),d=s(1),u=s.n(d),j=(s(15),s(6)),h=s(0),b=function(t){Object(o.a)(s,t);var e=Object(l.a)(s);function s(t){var n;return Object(i.a)(this,s),(n=e.call(this,t)).closeForm=function(){n.props.closeForm()},n.handleChange=function(t){var e=t.target,s=e.name,a=e.value;"status"===s&&(a="true"===e.value),n.setState(Object(j.a)({},s,a))},n.handleClearForm=function(){n.setState({id:"",name:"",status:!0})},n.handleSubmit=function(t){t.preventDefault(),n.props.submit(n.state),n.handleClearForm()},n.state={id:"",name:"",status:!0},n}return Object(r.a)(s,[{key:"UNSAFE_componentWillMount",value:function(){this.props.taskEditing&&this.setState({id:this.props.taskEditing.id,name:this.props.taskEditing.name,status:this.props.taskEditing.status})}},{key:"UNSAFE_componentWillReceiveProps",value:function(t){t&&t.taskEditing?this.setState({id:t.taskEditing.id,name:t.taskEditing.name,status:t.taskEditing.status}):t.taskEditing||this.handleClearForm()}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"panel",children:[Object(h.jsxs)("div",{className:"panel-heading",children:[Object(h.jsx)("h4",{children:""!==this.state.id?"S\u1eeda C\xf4ng Vi\u1ec7c":"Th\xeam C\xf4ng Vi\u1ec7c"}),Object(h.jsx)("i",{className:"far fa-times-circle",onClick:this.closeForm})]}),Object(h.jsx)("div",{className:"panel-body",children:Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"T\xean:"}),Object(h.jsx)("input",{type:"text",name:"name",className:"form-control",value:this.state.name,onChange:this.handleChange,required:!0})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Tr\u1ea1ng Th\xe1i:"}),Object(h.jsxs)("select",{className:"form-control",name:"status",value:this.state.status,onChange:this.handleChange,children:[Object(h.jsx)("option",{value:!0,children:"K\xedch ho\u1ea1t"}),Object(h.jsx)("option",{value:!1,children:"\u1ea8n"})]})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"text-center",children:[Object(h.jsxs)("button",{type:"submit",className:"btn btn-success",children:[Object(h.jsx)("i",{className:"fas fa-plus"}),"\xa0 L\u01b0u L\u1ea1i"]}),"\xa0",Object(h.jsxs)("button",{type:"button",className:"btn btn-danger",onClick:this.handleClearForm,children:[Object(h.jsx)("i",{className:"fas fa-times"}),"\xa0 H\u1ee7y B\u1ecf"]})]})]})})]})}}]),s}(u.a.Component),m=function(t){Object(o.a)(s,t);var e=Object(l.a)(s);function s(t){var n;return Object(i.a)(this,s),(n=e.call(this,t)).onChange=function(t){var e=t.target,s=e.name,a=e.value;n.setState(Object(j.a)({},s,a))},n.onSearch=function(){n.props.onSearch(n.state.keyword)},n.state={keyword:""},n}return Object(r.a)(s,[{key:"render",value:function(){var t=this.state.keyword;return Object(h.jsx)("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6",children:Object(h.jsxs)("div",{className:"input-group",children:[Object(h.jsx)("input",{type:"text",className:"form-control",placeholder:"Nh\u1eadp t\u1eeb kh\xf3a",name:"keyword",value:t,onChange:this.onChange}),Object(h.jsxs)("button",{type:"button",className:"btn btn-primary",onClick:this.onSearch,children:[Object(h.jsx)("i",{className:"fas fa-search"}),"\xa0 T\xecm"]})]})})}}]),s}(u.a.Component),p=function(t){Object(o.a)(s,t);var e=Object(l.a)(s);function s(t){var n;return Object(i.a)(this,s),(n=e.call(this,t)).onSortClick=function(t,e){n.setState({by:t,value:e},(function(){n.props.onSortClick(n.state)}))},n.state={by:"name",value:1},n}return Object(r.a)(s,[{key:"render",value:function(){var t=this,e=this.state,s=e.by,n=e.value;return Object(h.jsx)("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6",children:Object(h.jsx)("div",{className:"dropdown",children:Object(h.jsxs)("button",{className:"btn btn-primary dropdown-toggle",type:"button",children:["S\u1eafp x\u1ebfp",Object(h.jsxs)("ul",{className:"dropdown-menu",children:[Object(h.jsx)("li",{onClick:function(){return t.onSortClick("name",1)},children:Object(h.jsxs)("p",{role:"button",className:"name"===s&&1===n?"dropdown-item sort_selected":"dropdown-item",children:[Object(h.jsx)("i",{className:"fas fa-sort-alpha-down"}),"\xa0 T\xean A-Z"]})}),Object(h.jsx)("li",{onClick:function(){return t.onSortClick("name",-1)},children:Object(h.jsxs)("p",{role:"button",className:"name"===s&&-1===n?"dropdown-item sort_selected":"dropdown-item",children:[Object(h.jsx)("i",{className:"fas fa-sort-alpha-up"}),"\xa0 T\xean Z-A"]})}),Object(h.jsx)("li",{role:"separator",className:"divider"}),Object(h.jsx)("li",{onClick:function(){return t.onSortClick("status",1)},children:Object(h.jsx)("p",{role:"button",className:"status"===s&&1===n?"dropdown-item sort_selected":"dropdown-item",children:"Tr\u1ea1ng Th\xe1i K\xedch Ho\u1ea1t"})}),Object(h.jsx)("li",{onClick:function(){return t.onSortClick("status",-1)},children:Object(h.jsx)("p",{role:"button",className:"status"===s&&-1===n?"dropdown-item sort_selected":"dropdown-item",children:"Tr\u1ea1ng Th\xe1i \u1ea8n"})})]})]})})})}}]),s}(u.a.Component),O=function(t){Object(o.a)(s,t);var e=Object(l.a)(s);function s(){return Object(i.a)(this,s),e.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"row mt-20",children:[Object(h.jsx)(m,{onSearch:this.props.onSearch}),Object(h.jsx)(p,{onSortClick:this.props.onSortClick})]})}}]),s}(u.a.Component),f=function(t){Object(o.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(i.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).onUpdateStatus=function(){t.props.onUpdateStatus(t.props.task.id)},t.onDelete=function(){t.props.onDelete(t.props.task.id)},t.onUpdate=function(){t.props.onUpdate(t.props.task.id)},t}return Object(r.a)(s,[{key:"render",value:function(){var t=this.props,e=t.task,s=t.index;return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:s+1}),Object(h.jsx)("td",{children:e.name}),Object(h.jsx)("td",{className:"text-center",children:Object(h.jsx)("span",{className:e.status?"label label-success":"label label-danger",onClick:this.onUpdateStatus,children:e.status?"K\xedch Ho\u1ea1t":"\u1ea8n"})}),Object(h.jsxs)("td",{className:"text-center",children:[Object(h.jsxs)("button",{type:"button",className:"btn btn-warning",onClick:this.onUpdate,children:[Object(h.jsx)("i",{className:"far fa-edit"}),"\xa0 S\u1eeda"]}),"\xa0",Object(h.jsxs)("button",{type:"button",className:"btn btn-danger",onClick:this.onDelete,children:[Object(h.jsx)("i",{className:"fas fa-trash"}),"\xa0 X\xf3a"]})]})]})}}]),s}(u.a.Component),x=function(t){Object(o.a)(s,t);var e=Object(l.a)(s);function s(t){var n;return Object(i.a)(this,s),(n=e.call(this,t)).onChange=function(t){var e=t.target,s=e.name,a=e.value;n.props.onFilter("filterName"===s?a:n.state.filterName,"filterStatus"===s?a:n.state.filterStatus),n.setState(Object(j.a)({},s,a))},n.state={filterName:"",filterStatus:-1},n}return Object(r.a)(s,[{key:"render",value:function(){var t=this,e=this.props.tasks.map((function(e,s){return Object(h.jsx)(f,{index:s,task:e,onUpdateStatus:t.props.onUpdateStatus,onDelete:t.props.onDelete,onUpdate:t.props.onUpdate},e.id)}));return Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"STT"}),Object(h.jsx)("th",{children:"T\xean"}),Object(h.jsx)("th",{children:"Tr\u1ea1ng Th\xe1i"}),Object(h.jsx)("th",{children:"H\xe0nh \u0110\u1ed9ng"})]})}),Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",className:"form-control",name:"filterName",value:this.state.filterName,onChange:this.onChange})}),Object(h.jsx)("td",{children:Object(h.jsxs)("select",{className:"form-control",name:"filterStatus",value:this.state.filterStatus,onChange:this.onChange,children:[Object(h.jsx)("option",{value:-1,children:"T\u1ea5t C\u1ea3"}),Object(h.jsx)("option",{value:0,children:"\u1ea8n"}),Object(h.jsx)("option",{value:1,children:"K\xedch Ho\u1ea1t"})]})}),Object(h.jsx)("td",{})]}),e]})]})}}]),s}(u.a.Component),v=s(9),k=s.n(v),g=function(t){Object(o.a)(s,t);var e=Object(l.a)(s);function s(t){var n;return Object(i.a)(this,s),(n=e.call(this,t)).toggleForm=function(){null!==n.state.taskEditing?n.setState({isDisplayForm:!0,taskEditing:null}):n.setState({isDisplayForm:!n.state.isDisplayForm,taskEditing:null})},n.closeForm=function(){n.setState({isDisplayForm:!1})},n.handleSubmit=function(t){var e=n.state.tasks;""===t.id?(t.id=n.generateId(),e.push(t)):e[n.findIndex(t.id)]=t;n.setState({tasks:e,taskEditing:null}),localStorage.setItem("tasks",JSON.stringify(e)),n.closeForm()},n.findIndex=function(t){var e=n.state.tasks,s=-1;return e.forEach((function(e,n){e.id===t&&(s=n)})),s},n.onUpdateStatus=function(t){var e=n.state.tasks,s=k.a.findIndex(e,(function(e){return e.id===t}));-1!==s&&(e[s].status=!e[s].status,n.setState({tasks:e}),localStorage.setItem("tasks",JSON.stringify(e)))},n.onDelete=function(t){var e=n.state.tasks,s=n.findIndex(t);if(-1!==s){var a=Object(c.a)(e);a.splice(s,1),n.setState({tasks:a}),localStorage.setItem("tasks",JSON.stringify(a))}},n.onUpdate=function(t){var e=n.state.tasks,s=n.findIndex(t);-1!==s&&n.setState({isDisplayForm:!0,taskEditing:e[s]})},n.onFilter=function(t,e){e=parseInt(e,10),n.setState({filter:{name:t.toLowerCase(),status:e}})},n.onSearch=function(t){n.setState({keyword:t})},n.onSortClick=function(t){t&&n.setState({sort:{by:t.by,value:t.value}})},n.state={tasks:[],isDisplayForm:!1,taskEditing:null,filter:{name:"",status:-1},keyword:"",sort:{by:"name",value:1}},n}return Object(r.a)(s,[{key:"UNSAFE_componentWillMount",value:function(){if(localStorage.getItem("tasks")){var t=JSON.parse(localStorage.getItem("tasks"));this.setState({tasks:t})}}},{key:"s4",value:function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}},{key:"generateId",value:function(){return this.s4()+this.s4()+"-"+this.s4()+this.s4()+"-"+this.s4()+this.s4()+this.s4()+this.s4()+"-"+this.s4()+this.s4()+this.s4()+this.s4()+"-"+this.s4()+this.s4()}},{key:"render",value:function(){var t=this.state,e=t.tasks,s=t.isDisplayForm,n=t.taskEditing,a=t.filter,c=t.keyword,i=t.sort;a&&(a.name&&(e=e.filter((function(t){return-1!==t.name.toLowerCase().indexOf(a.name)}))),e=e.filter((function(t){return-1===a.status?t:t.status===(1===a.status)}))),c&&(e=e.filter((function(t){return-1!==t.name.toLowerCase().indexOf(c)}))),"name"===i.by?e.sort((function(t,e){return t.name>e.name?i.value:t.name<e.name?-i.value:0})):e.sort((function(t,e){return t.status<e.status?i.value:t.status>e.status?-i.value:0}));var r=s?Object(h.jsx)(b,{closeForm:this.closeForm,submit:this.handleSubmit,onUpdate:this.onUpdate,taskEditing:n}):"";return Object(h.jsxs)("div",{className:"container mt-20",children:[Object(h.jsx)("div",{className:"text-center",children:Object(h.jsx)("h1",{children:"Qu\u1ea3n L\xfd C\xf4ng Vi\u1ec7c"})}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-xs-4 col-sm-4 col-md-4 col-lg-4",children:r}),Object(h.jsxs)("div",{className:s?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:[Object(h.jsxs)("button",{type:"button",className:"btn btn-primary",onClick:this.toggleForm,children:[Object(h.jsx)("i",{className:"fas fa-plus"}),"\xa0 Th\xeam C\xf4ng Vi\u1ec7c"]}),"\xa0",Object(h.jsx)("br",{}),Object(h.jsx)(O,{onSearch:this.onSearch,onSortClick:this.onSortClick}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:Object(h.jsx)(x,{tasks:e,onUpdateStatus:this.onUpdateStatus,onDelete:this.onDelete,onUpdate:this.onUpdate,onFilter:this.onFilter})})})]})]})]})}}]),s}(u.a.Component);a.a.render(Object(h.jsx)(g,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.919e0529.chunk.js.map