(this["webpackJsonpreact-inter"]=this["webpackJsonpreact-inter"]||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(9),r=a.n(i),s=(a(16),a(7)),c=a(10),l=a(6),d=a(1),u=a(2),m=a(4),p=a(3),h=a(5),b=(a(17),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={title:"",description:"",priority:"",dueDate:"",currentState:!1,createdAt:null,uniqueId:"",editTodo:{}},a.onEsc=function(e){e.target&&27===e.keyCode&&(a.props.editTodo.length?a.closeEditModal(e):a.closeTodo(e))},a.checkOutsideClick=function(e){e.target.closest(".edit-btn")||e.target.closest(".modal-content")||!a.props.show||e.target.closest(".fixed-button")||(a.props.editTodo.length?a.closeEditModal(e):a.closeTodo(e))},a.getStyles=function(){return{display:a.props.show?"block":"none"}},a.generateUid=function(){return Math.random().toString(36).substr(2,9)+"-"+Math.random().toString(36).substr(2,9)},a.handleChange=function(e){e.target&&e.target.name&&a.setState(Object(s.a)({},e.target.name,e.target.value))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("click",this.checkOutsideClick),window.addEventListener("keydown",this.onEsc)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.checkOutsideClick),window.removeEventListener("keydown",this.onEsc)}},{key:"closeTodo",value:function(e){e&&(this.setState({title:"",description:"",priority:"",dueDate:"",currentState:!1,createdAt:null,uniqueId:""}),this.props.closeTodo())}},{key:"saveTodo",value:function(e){var t=this;if(e&&e.target&&window.confirm("Are you sure you want to create this todo")){var a="".concat((new Date).getTime());this.setState({createdAt:a,uniqueId:this.generateUid()});window.requestAnimationFrame((function(){t.props.createNewTodo(t.state),t.setState({title:"",description:"",priority:"",dueDate:"",currentState:!1,createdAt:null,uniqueId:""})}))}}},{key:"editExistingTodo",value:function(e){e&&e.target&&(window.confirm("Are you sure you update the exisiting todo item ?")&&this.props.saveEditedTodo(e))}},{key:"closeEditModal",value:function(e){e&&e.target&&this.props.closeEditModal(e)}},{key:"onEditTodo",value:function(e){e&&this.props.handleEditTodo({name:e.target.name,value:e.target.value})}},{key:"render",value:function(){var e=this.props.editTodo.length?this.props.editTodo[0]:null;return o.a.createElement("div",{id:"myModal",className:"modal",style:this.getStyles()},o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"modal-header"},o.a.createElement("span",{className:"close",onClick:e?this.closeEditModal.bind(this):this.closeTodo.bind(this)},"\xd7"),o.a.createElement("h2",null,"Add Todo")),o.a.createElement("div",{className:"modal-body"},o.a.createElement("form",null,o.a.createElement("div",null,o.a.createElement("label",null,"Todo Title:"),o.a.createElement("input",{type:"text",name:"title",value:e&&e.title?e.title:this.state.title,minLength:"10",maxLength:"100",placeholder:"Enter title here...",onChange:e?this.onEditTodo.bind(this):this.handleChange})),o.a.createElement("div",null,o.a.createElement("label",null,"Todo Desciption:"),o.a.createElement("textarea",{value:e&&e.description?e.description:this.state.description,rows:"20",cols:"30",name:"description",placeholder:"Enter description",onChange:e?this.onEditTodo.bind(this):this.handleChange})),o.a.createElement("div",{className:"dropdown-date"},o.a.createElement("div",null,o.a.createElement("span",null,"Select Priority:"),o.a.createElement("select",{name:"priority",id:"priority",onChange:e?this.onEditTodo.bind(this):this.handleChange,value:e&&e.priority?e.priority:this.state.priority},o.a.createElement("option",{value:"0",defaultValue:!0,disabled:!0},"None"),o.a.createElement("option",{value:"1"},"Low"),o.a.createElement("option",{value:"2"},"Medium"),o.a.createElement("option",{value:"3"},"High"))),o.a.createElement("div",{className:"date"},o.a.createElement("span",null,"Select Date:"),o.a.createElement("input",{type:"date",id:"start",name:"dueDate",onChange:e?this.onEditTodo.bind(this):this.handleChange,value:e&&e.dueDate?e.dueDate:this.state.dueDate}))))),o.a.createElement("div",{className:"modal-footer"},o.a.createElement("div",{className:"flex-row"},o.a.createElement("button",{className:"btn save-btn",onClick:e?this.editExistingTodo.bind(this):this.saveTodo.bind(this)},"Save"),o.a.createElement("button",{className:"btn cancel-btn",onClick:e?this.closeEditModal.bind(this):this.closeTodo.bind(this)},"Cancel")))))}}]),t}(n.Component)),v=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"add-button"},o.a.createElement("button",{onClick:this.props.toggleModal},o.a.createElement("span",null,"+")))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={},a.getCompletedStyles=function(){return a.props.todo.currentState?"completed":""},a.getDateString=function(e){return"".concat(new Date(parseInt(e)).toDateString()).concat(new Date(parseInt(e)).toLocaleTimeString())},a.getPriority=function(e){var t="";switch(isNaN(parseInt(e))?"":parseInt(e)){case 1:t="Low";break;case 2:t="Medium";break;case 3:t="High";break;default:t="None"}return t},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.title,a=e.priority,n=e.createdAt,i=e.dueDate,r=e.uniqueId;e.currentState;return o.a.createElement("div",{className:"todo-item "+this.getCompletedStyles()},o.a.createElement("div",{className:"todo-section"},o.a.createElement("h3",{className:"todo-label"},"Summary"),o.a.createElement("div",{className:"todo-title main-title"},t)),o.a.createElement("div",{className:"todo-section"},o.a.createElement("h3",{className:"todo-label"},"Priority"),o.a.createElement("div",{className:"todo-title"},this.getPriority(a))),o.a.createElement("div",{className:"todo-section"},o.a.createElement("h3",{className:"todo-label"},"Created On"),o.a.createElement("div",{className:"todo-title"},this.getDateString(n))),o.a.createElement("div",{className:"todo-section"},o.a.createElement("h3",{className:"todo-label"},"Due Date"),o.a.createElement("div",{className:"todo-title"},i)),o.a.createElement("div",{className:"todo-section"},o.a.createElement("h3",{className:"todo-label"},"Actions"),o.a.createElement("div",{className:"todo-title"},o.a.createElement("button",{className:"btn btn-rounded edit-btn",onClick:this.props.todoAction.bind(this,{type:"edit",uniqueId:r})},"\u270e"),o.a.createElement("button",{className:"btn btn-rounded delete-btn",onClick:this.props.todoAction.bind(this,{type:"delete",uniqueId:r})},"\u2702"),o.a.createElement("button",{className:"btn btn-rounded open-close-btn",onClick:this.props.todoAction.bind(this,{type:"complete",uniqueId:r})},"\u2713"))))}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,this.props.todoList.map((function(t){return o.a.createElement(E,{todo:t,key:t.uniqueId,todoAction:e.props.handleTodo})})))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={activeTab:""},a.getStyleClass=function(e){return(a.props.activeTab||"")===e?"active":""},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"tabs-wrapper"},o.a.createElement("h4",null,"Group By:"),o.a.createElement("div",{className:"tabs"},o.a.createElement("button",{className:"tab btn "+this.getStyleClass("all"),onClick:this.props.onTabClick.bind(this,{type:"all"})},"All Tasks"),o.a.createElement("button",{className:"tab btn "+this.getStyleClass("completed"),onClick:this.props.onTabClick.bind(this,{type:"completed"})},"Completed"),o.a.createElement("button",{className:"tab btn "+this.getStyleClass("pending"),onClick:this.props.onTabClick.bind(this,{type:"pending"})},"Pending")))}}]),t}(n.Component),f="summary",T="priority",C="createdon",S="duedate",N="ASC",k=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={activeSortBy:"",isModalActive:!1,todos:[],tempTodoList:[],activeTab:"",searchTerm:"",editTodo:[],tableHeadings:[{id:1,name:"Summary"},{id:2,name:"Priority"},{id:3,name:"Created On"},{id:4,name:"Due Date"}]},a.openCloseModal=function(e){a.setState({isModalActive:!a.state.isModalActive})},a.onTabClick=function(e){var t=e.type,n=a.state.searchTerm,o=JSON.parse(JSON.stringify(a.state.tempTodoList));switch(t){case"all":a.setState({todos:Object(l.a)(o),activeTab:t});break;case"completed":a.setState({todos:Object(l.a)(o.filter((function(e){return n?!!(n&&e.title.toLowerCase().trim().match(n)||n&&e.description.toLowerCase().trim().match(n))&&e.currentState:e.currentState}))),activeTab:t});break;case"pending":a.setState({todos:Object(l.a)(o.filter((function(e){return n?!!(n&&e.title.toLowerCase().trim().match(n)||n&&e.description.toLowerCase().trim().match(n))&&!e.currentState:!e.currentState}))),activeTab:t})}},a.searchTodos=function(e){var t=e.target.value.toLowerCase(),n=JSON.parse(JSON.stringify(a.state.tempTodoList)),o=a.state.activeTab;a.setState({todos:Object(l.a)(n.filter((function(e){return!(!e.title.toLowerCase().trim().match(t)&&!e.description.toLowerCase().trim().match(t))&&("completed"===o?e.currentState:"pending"!==o||!e.currentState)}))),searchTerm:t}),a.highLightText(e.target.value)},a.highLightText=function(e){var t=document.querySelectorAll(".main-title");Array.from(t).forEach((function(t){var a=t.innerText;if(a.match(e)){var n=a.indexOf(e),o=a.indexOf(e)+e.length;-1!==n&&-1!==o&&(t.innerHTML="".concat(a.substring(0,n),"<mark>").concat(a.substring(n,o),"</mark>").concat(a.substring(o,a.length)))}}))},a.createTodo=function(e){a.setState({todos:[].concat(Object(l.a)(a.state.todos),[e]),tempTodoList:[].concat(Object(l.a)(a.state.tempTodoList),[e])}),a.openCloseModal()},a.handleEditTodo=function(e){a.setState({editTodo:[Object(c.a)({},a.state.editTodo[0],Object(s.a)({},e.name,e.value))]})},a.closeEditModal=function(e){e&&(a.openCloseModal(),a.setState({editTodo:[]}))},a.saveEditedTodo=function(e){if(e){a.openCloseModal();var t=a.state.editTodo.length?a.state.editTodo[0]:"";a.setState({todos:Object(l.a)(a.state.todos.map((function(e){return e.uniqueId===t.uniqueId&&(e=t),e}))),tempTodoList:Object(l.a)(a.state.tempTodoList.map((function(e){return e.uniqueId===t.uniqueId&&(e=t),e}))),editTodo:[]})}},a.getHeaderStyles=function(e){return e===a.state.activeSortBy?"active":""},a.handleTodo=function(e){if(e.type&&e.uniqueId){var t=e.type,n=e.uniqueId,o=JSON.parse(JSON.stringify(a.state.tempTodoList));switch(t){case"edit":a.setState({editTodo:o.filter((function(e){return e.uniqueId===n}))}),a.openCloseModal();break;case"delete":a.setState({todos:a.state.todos.filter((function(e){return e.uniqueId!==n})),tempTodoList:o.filter((function(e){return e.uniqueId!==n}))});break;case"complete":a.setState({todos:a.state.todos.map((function(e){return e.uniqueId===n&&(e.currentState=!e.currentState),e})),tempTodoList:o.map((function(e){return e.uniqueId===n&&(e.currentState=!e.currentState),e}))})}}},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"sortTodos",value:function(e){if(e.name&&e.orderBy){var t=e.name.toLowerCase().replace(/ /g,""),a=e.orderBy;this.setState({todos:Object(l.a)(this.state.todos.sort((function(e,n){switch(t){case f:return e.title.toUpperCase()<n.title.toUpperCase()?a===N?-1:1:e.title.toUpperCase()>n.title.toUpperCase()?a===N?1:-1:0;case T:return a===N?parseInt(e.priority)-parseInt(n.priority):parseInt(n.priority)-parseInt(e.priority);case C:return a===N?parseInt(e.createdAt)-parseInt(n.createdAt):parseInt(n.createdAt)-parseInt(e.createdAt);case S:return a===N?new Date(e.dueDate).getTime()-new Date(n.dueDate).getTime():new Date(n.dueDate).getTime()-new Date(e.dueDate).getTime()}}))),activeSortBy:e.name})}}},{key:"render",value:function(){var e=this,t=this;return o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"page-loader"},o.a.createElement("div",{className:"loader"},"Loading...")),o.a.createElement("header",{className:"app-header"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",null,"My Todo Application"))),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"search-box"},o.a.createElement("span",null,"Enter title or description - "),o.a.createElement("input",{type:"text",name:"search",placeholder:"Search...",onChange:this.searchTodos}))),o.a.createElement("div",{className:"container"},o.a.createElement(y,{onTabClick:this.onTabClick,activeTab:this.state.activeTab})),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"sorting-head"},this.state.tableHeadings.map((function(a){return o.a.createElement("div",{className:"sorting-el "+e.getHeaderStyles(a.name),key:a.id},a.name,o.a.createElement("div",null,o.a.createElement("div",{onClick:e.sortTodos.bind(t,{name:a.name,orderBy:"ASC"})},"\u2191"),o.a.createElement("div",{onClick:e.sortTodos.bind(t,{name:a.name,orderBy:"DSC"})},"\u2193")))})),o.a.createElement("div",{className:"sorting-el"},"Actions"))),o.a.createElement("div",{className:"container"},o.a.createElement(g,{todoList:this.state.todos,handleTodo:this.handleTodo})),o.a.createElement(b,{show:this.state.isModalActive,createNewTodo:this.createTodo,closeTodo:this.openCloseModal,handleEditTodo:this.handleEditTodo,editTodo:this.state.editTodo,saveEditedTodo:this.saveEditedTodo,closeEditModal:this.closeEditModal}),o.a.createElement("div",{className:"fixed-button"},o.a.createElement(v,{toggleModal:this.openCloseModal})))}}]),t}(n.Component);r.a.render(o.a.createElement(k,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.71c8ddda.chunk.js.map