(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,a){"use strict";(function(e){a.d(t,"a",function(){return j});var s=a(19),n=a.n(s),r=a(35),o=a(21),i=a(18),l=a(23),c=a(22),u=a(24),m=a(0),h=a.n(m),d=a(312),p=a(315),g=a(78),b=a(12),f=a(317),y=a(168),E=a(316),v=a(318),_=a(135),w=a.n(_),j=(a(51),function(t){function a(t){var s;return Object(o.a)(this,a),(s=Object(l.a)(this,Object(c.a)(a).call(this,t))).handleChange=function(e){console.log(),s.state[e.target.id]=e.target.value,s.setState({reload:!0})},s.fazerLogin=Object(r.a)(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:localStorage.setItem("usuario",new e(s.state.usuario).toString("base64")),localStorage.setItem("senha",new e(s.state.senha).toString("base64")),s.props.nextPage();case 3:case"end":return t.stop()}},t)})),s.state={usuario:"",senha:""},s}return Object(u.a)(a,t),Object(i.a)(a,[{key:"render",value:function(){return h.a.createElement(b.Grid,{fluid:!0,style:{height:"100vh",backgroundColor:"#303030"}},h.a.createElement(b.Row,{center:"xs",middle:"xs",style:{height:"100vh"}},h.a.createElement(b.Col,{lg:3,md:6,xs:11},h.a.createElement(d.a,{elevation:10},h.a.createElement(p.a,null,h.a.createElement(E.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},h.a.createElement(f.a,{alt:"Icon",src:"https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/88/1d/ef/881defdd-4db7-2356-983a-6ba7229560ce/AppIcon-0-1x_U007emarketing-0-0-85-220-10.png/690x0w.jpg",style:{width:"100px",height:"100px",marginBottom:"30px"}}),h.a.createElement(g.a,{variant:"h5"},"Siga Fatec Pocket"),h.a.createElement(y.a,{id:"usuario",label:"Usuario (XXXXXXXXXSP)",defaultValue:this.state.usuario,onChange:this.handleChange,margin:"normal",variant:"outlined",helperText:"O mesmo usu\xe1rio que voc\xea acessa o SIGA",style:{width:"100%"}}),h.a.createElement(y.a,{id:"senha",label:"Senha",defaultValue:this.state.usuario,onChange:this.handleChange,margin:"normal",variant:"outlined",type:"password",style:{width:"100%"}}),h.a.createElement("br",null),h.a.createElement(v.a,{variant:"contained",color:"primary",style:{width:"100%"},onClick:this.fazerLogin},"LOGIN",h.a.createElement(w.a,{style:{marginLeft:"5px"}}))))))))}}]),a}(h.a.Component))}).call(this,a(124).Buffer)},172:function(e,t,a){e.exports=a(311)},177:function(e,t,a){},178:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},179:function(e,t,a){},311:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(11),o=a.n(r),i=(a(177),a(21)),l=a(18),c=a(23),u=a(22),m=a(24),h=(a(178),a(179),a(129)),d=a(165),p=a(366),g=a(19),b=a.n(g),f=a(35),y=a(108),E=a(12),v=a(312),_=a(315),w=a(363),j=a(364),x=a(78),S=a(354),O=a(368),k=a(367),C=a(365),L=a(318),D=a(362),I=a(317),T=a(316),R=function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(T.a,{container:!0,style:{padding:"10px"}},n.a.createElement(E.Row,null,n.a.createElement(I.a,{alt:"Icon",src:this.props.basic_info.img,style:{width:"60px",height:"60px",marginBottom:"30px"}}),n.a.createElement(E.Col,{style:{marginLeft:"10px"},xs:8},n.a.createElement(x.a,{variant:"body1",style:{marginTop:"5px",color:"white"}},this.props.basic_info.nome),n.a.createElement(x.a,{variant:"caption",style:{color:"white"}},this.props.basic_info.ra))),n.a.createElement("br",null))}}]),t}(s.Component),F=a(355),P=a(319),A=a(356),U=function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(F.a,{"aria-label":"Hor\xe1rio das aulas",dense:!0},this.props.class_hours.map(function(e){return n.a.createElement(P.a,null,n.a.createElement(A.a,{primary:n.a.createElement(x.a,{type:"body2",style:{color:"#FFFFFF",fontWeight:"bold"}},e.disciplina),secondary:n.a.createElement(x.a,{type:"body2",style:{color:"#FFFFFF"}},e.horario)}))})))}}]),t}(s.Component),N=a(191).Pie,B=function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(E.Row,{center:"xs"},this.props.miss_classes.map(function(e){return n.a.createElement(E.Col,{xs:6},n.a.createElement(v.a,{style:{backgroundColor:"#303345",padding:"10px"},elevation:0},n.a.createElement(x.a,{variant:"body1",style:{color:"white"}},e.disciplina),n.a.createElement("br",null),n.a.createElement(N,{data:[{value:e.faltas,color:"#F7464A",highlight:"#FF5A5E",label:"Faltas"},{value:100-e.faltas,color:"#46BFBD",highlight:"#5AD3D1",label:"Presen\xe7as"}],options:{legend:{display:!0,labels:{fontColor:"rgb(255, 99, 132)"}},segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,percentageInnerCutout:50,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,tooltipTemplate:"<%= value %>%",legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>'}}),n.a.createElement(x.a,{variant:"body1",style:{color:"white"}},"Presen\xe7as - ",e.presencas),n.a.createElement(x.a,{variant:"body1",style:{color:"white"}},"Faltas - ",e.faltas)))})))}}]),t}(s.Component),J=a(161),W=a.n(J),z=a(76),M=a.n(z),X=a(116),H=a(136),G=a.n(H),Q=a(357),V=a(358),q=a(359),$=a(360),K=a(361),Y=a(137),Z=a.n(Y),ee=function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(Q.a,{size:"small"},n.a.createElement(V.a,null,n.a.createElement(q.a,null,n.a.createElement($.a,{style:{color:"white"}},"Disciplina"),n.a.createElement($.a,{style:{color:"white"}},"Titulo"),n.a.createElement($.a,{style:{color:"white"}},"Download"))),n.a.createElement(K.a,null,this.props.subject_resources.map(function(e){return n.a.createElement(q.a,{key:e.url},n.a.createElement($.a,{style:{color:"white"}},e.disciplina),n.a.createElement($.a,{style:{color:"white"}},e.titulo),n.a.createElement($.a,{style:{color:"white"}},n.a.createElement(D.a,{"aria-label":"download",onClick:function(){window.open(e.url,"_blank")}},n.a.createElement(Z.a,{style:{color:"white"}}))))}))))}}]),t}(s.Component),te=a(139),ae=a.n(te),se=a(138),ne=a.n(se),re=function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{style:{marginTop:"30px",marginLeft:"10px",marginRight:"10px"}},n.a.createElement(ne.a,{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1},Object.keys(this.props.test_results_subjects).map(function(t){return n.a.createElement("div",null,n.a.createElement(E.Row,{center:"xs"},n.a.createElement(x.a,{variant:"body1",style:{color:"white",marginTop:"20px"}},t)),n.a.createElement(E.Row,{center:"xs"},n.a.createElement(E.Col,{xs:6},n.a.createElement(ae.a,{data:[{value:10-e.props.subjects_tests[t][0].nota,color:"#cfcfcf"},{value:e.props.subjects_tests[t][0].nota,color:"#b2ff59"}],lineWidth:30,rounded:!0,animate:!0,style:{marginTop:"20px"}}),n.a.createElement("br",null),n.a.createElement(x.a,{variant:"body1",style:{color:"white",marginTop:"20px"}}," M\xe9dia - ",e.props.subjects_tests[t][0].nota," "),n.a.createElement("br",null))),n.a.createElement(Q.a,{size:"small"},n.a.createElement(V.a,null,n.a.createElement(q.a,null,n.a.createElement($.a,{style:{color:"white"}},"Avalia\xe7\xe3o"),n.a.createElement($.a,{style:{color:"white"}},"Nota"))),n.a.createElement(K.a,null,e.props.subjects_tests[t].map(function(e){return n.a.createElement(q.a,null,n.a.createElement($.a,{style:{color:"white"}},e.avaliacao),n.a.createElement($.a,{style:{color:"white"}},e.nota))}))))})))}}]),t}(s.Component),oe=(a(296),a(57)),ie=(a(301),a(160)),le=a.n(ie),ce=a(163),ue=a.n(ce),me=a(162),he=a.n(me),de=a(164),pe=a.n(de),ge=a(66);function be(){var e=Object(y.a)(["\n  animation: infinite 5s ",";\n"]);return be=function(){return e},e}function fe(){var e=Object(y.a)(["",""]);return fe=function(){return e},e}var ye=Object(X.b)(fe(),G.a),Ee=(X.a.div(be(),ye),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.state[e.target.id]=e.target.value,a.setState({reload:!0})},a.separateTestResults=function(){for(var e=0,t=[],s=[];e<a.state.test_results.length;){var n=a.state.test_results[e];null==t[n.disciplina]?(t[n.disciplina]=!0,s[n.disciplina]=[],s[n.disciplina].push(n)):s[n.disciplina].push(n),e++}a.state.test_results_subjects=t,a.state.subjects_tests=s,a.setState({reload:!0})},a.logout=function(){localStorage.removeItem("basic_info"),localStorage.removeItem("class_hours"),localStorage.removeItem("miss_classes"),localStorage.removeItem("subjects"),localStorage.removeItem("subject_resources"),localStorage.removeItem("test_results"),localStorage.removeItem("usuario"),localStorage.removeItem("senha"),window.location.reload(!0)},a.myUpdateBasicInfo=Object(f.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null==a.state.isLoading.basic_info||0!=a.state.isLoading.basic_info){e.next=15;break}return a.state.isLoading.basic_info=!0,a.setState({reload:!0}),e.next=5,Object(oe.a)();case 5:if(null!=(t=e.sent)&&void 0!=t){e.next=10;break}return window.alert("Login ou senha inv\xe1lidos"),a.logout(),e.abrupt("return");case 10:a.state.basic_info=t,localStorage.setItem("basic_info",JSON.stringify(a.state.basic_info)),a.state.isLoading.basic_info=!1,a.setState({reload:!0}),a.initData();case 15:case"end":return e.stop()}},e)})),a.myUpdateClassHours=Object(f.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null==a.state.isLoading.class_hours||0!=a.state.isLoading.class_hours){e.next=11;break}return a.state.isLoading.class_hours=!0,a.setState({reload:!0}),e.next=5,Object(oe.b)();case 5:t=e.sent,a.state.class_hours=t,localStorage.setItem("class_hours",JSON.stringify(a.state.class_hours)),a.state.isLoading.class_hours=!1,a.setState({reload:!0}),a.initData();case 11:case"end":return e.stop()}},e)})),a.myUpdateMissClasses=Object(f.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null==a.state.isLoading.miss_classes||0!=a.state.isLoading.miss_classes){e.next=11;break}return a.state.isLoading.miss_classes=!0,a.setState({reload:!0}),e.next=5,Object(oe.c)();case 5:t=e.sent,a.state.miss_classes=t,localStorage.setItem("miss_classes",JSON.stringify(a.state.miss_classes)),a.state.isLoading.miss_classes=!1,a.setState({reload:!0}),a.initData();case 11:case"end":return e.stop()}},e)})),a.myUpdateSubjects=Object(f.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null==a.state.isLoading.subjects||0!=a.state.isLoading.subjects){e.next=11;break}return a.state.isLoading.subjects=!0,a.setState({reload:!0}),e.next=5,Object(oe.e)();case 5:t=e.sent,a.state.subjects=t,localStorage.setItem("subjects",JSON.stringify(a.state.subjects)),a.state.isLoading.subjects=!1,a.setState({reload:!0}),a.initData();case 11:case"end":return e.stop()}},e)})),a.myUpdateTestResults=Object(f.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null==a.state.isLoading.test_results||0!=a.state.isLoading.test_results){e.next=11;break}return a.state.isLoading.test_results=!0,a.setState({reload:!0}),e.next=5,Object(oe.f)();case 5:t=e.sent,a.state.test_results=t,localStorage.setItem("test_results",JSON.stringify(a.state.test_results)),a.state.isLoading.test_results=!1,a.setState({reload:!0}),a.initData();case 11:case"end":return e.stop()}},e)})),a.myUpdateSubjectResources=Object(f.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null==a.state.isLoading.subject_resources||0!=a.state.isLoading.subject_resources){e.next=11;break}return a.state.isLoading.subject_resources=!0,a.setState({reload:!0}),e.next=5,Object(oe.d)();case 5:t=e.sent,a.state.subject_resources=t,localStorage.setItem("subject_resources",JSON.stringify(a.state.subject_resources)),a.state.isLoading.subject_resources=!1,a.setState({reload:!0}),a.initData();case 11:case"end":return e.stop()}},e)})),a.state={basic_info:{},subjects:[],class_hours:[],miss_classes:[],test_results:[],subject_resources:[],class_hours_today:[],miss_classes_today:[],subject_resources_today:[],mock:!1,isLoading:[],selectedDay:"",test_results_subjects:[],subjects_tests:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"purpleBar",value:function(){return n.a.createElement(E.Col,{xs:12},n.a.createElement("div",{style:{marginTop:"5px",borderRadius:"5px",backgroundColor:"#a64ed0",height:"5px",width:"100%",marginLeft:"-6px"}}))}},{key:"componentDidMount",value:function(){this.state.isLoading.basic_info=!1,this.state.isLoading.class_hours=!1,this.state.isLoading.miss_classes=!1,this.state.isLoading.subjects=!1,this.state.isLoading.test_results=!1,this.state.isLoading.subject_resources=!1,this.state.selectedDay=(new Date).getDay()+1,console.log(this.state.selectedDay),this.state.mock||this.loadData(),this.initData(),this.separateTestResults()}},{key:"initData",value:function(e){console.log(e),""==e&&(e=(new Date).getDay()+1),void 0!=this.state.class_hours&&this.state.class_hours.length>0&&this.setClassHoursToday(e),void 0!=this.state.miss_classes&&this.state.miss_classes.length>0&&this.setMissClassesToday(),void 0!=this.state.subject_resources&&this.state.subject_resources.length>0&&this.setSubjectResourcesToday()}},{key:"loadData",value:function(){var e=Object(f.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:void 0!=localStorage.getItem("basic_info")?(this.state.basic_info=JSON.parse(localStorage.getItem("basic_info")),this.state.class_hours=JSON.parse(localStorage.getItem("class_hours")),this.state.miss_classes=JSON.parse(localStorage.getItem("miss_classes")),this.state.subjects=JSON.parse(localStorage.getItem("subjects")),this.state.subject_resources=JSON.parse(localStorage.getItem("subject_resources")),this.state.test_results=JSON.parse(localStorage.getItem("test_results")),this.initData()):this.loadDataFromApi();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"loadDataFromApi",value:function(){var e=Object(f.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.myUpdateBasicInfo(),this.myUpdateClassHours(),this.myUpdateMissClasses(),this.myUpdateSubjects(),this.myUpdateTestResults(),this.myUpdateSubjectResources(),this.forceUpdate();case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"setClassHoursToday",value:function(e){for(var t=[],a=e||(new Date).getDay()+1,s=0;s<this.state.class_hours.length;){var n=this.state.class_hours[s];n.dia_semana_number==a&&t.push(n),s++}this.state.class_hours_today=t,this.setState({reload:!0})}},{key:"setMissClassesToday",value:function(){for(var e=[],t=0;t<this.state.miss_classes.length;){var a=this.state.miss_classes[t];-1!=this.state.class_hours_today.map(function(e){return e.sigla}).indexOf(a.sigla)&&e.push(a),t++}this.setState({miss_classes_today:e})}},{key:"setSubjectResourcesToday",value:function(){for(var e=[],t=0;t<this.state.subject_resources.length;){var a=this.state.subject_resources[t];-1!=this.state.class_hours_today.map(function(e){return e.sigla}).indexOf(a.sigla)&&e.push(a),t++}this.setState({subject_resources_today:e})}},{key:"render",value:function(){var e=this;return n.a.createElement(E.Grid,{fluid:!0,style:{height:"100vh",backgroundColor:"#303030"}},n.a.createElement(E.Row,{style:{height:"100vh"}},n.a.createElement(E.Col,{lg:3,md:12,sm:12},n.a.createElement("form",{target:"_blank",action:"https://pagseguro.uol.com.br/checkout/v2/donation.html",method:"post"},n.a.createElement("input",{type:"hidden",name:"currency",value:"BRL"}),n.a.createElement("input",{type:"hidden",name:"receiverEmail",value:"brunoeleodoro96@gmail.com"}),n.a.createElement("input",{type:"hidden",name:"iot",value:"button"}),n.a.createElement("input",{type:"image",src:"https://stc.pagseguro.uol.com.br/public/img/botoes/doacoes/120x53-doar.gif",name:"submit",alt:"Pague com PagSeguro - \xe9 r\xe1pido, gr\xe1tis e seguro!"})),n.a.createElement(ge.Animate,{play:!0,start:{opacity:0,filter:"blur(0)"},end:{opacity:1,filter:"blur(0)"},duration:1},n.a.createElement(v.a,{style:{height:"auto",marginTop:"20px",backgroundColor:"#303345"},elevation:10},n.a.createElement(_.a,null,this.state.isLoading.basic_info?n.a.createElement(E.Row,{center:"xs"},n.a.createElement(w.a,null)):n.a.createElement(R,{basic_info:this.state.basic_info}),n.a.createElement(j.a,{height:"2px",style:{backgroundColor:"white"}}),n.a.createElement("br",null),n.a.createElement(x.a,{variant:"h6",style:{color:"white"}},"Dia da Semana"),n.a.createElement(S.a,{style:{backgroundColor:"white",width:"100%",padding:"5px",borderRadius:"5px"}},n.a.createElement(O.a,{htmlFor:"age-simple"},"Dia"),n.a.createElement(k.a,{value:this.state.selectedDay,defaultChecked:this.state.selectedDay,onChange:function(t){e.setState({selectedDay:t.target.value}),e.initData(t.target.value),e.setState({reload:!0})},inputProps:{name:"dia_semana",id:"dia_semana"}},n.a.createElement(C.a,{value:2},"Segunda"),n.a.createElement(C.a,{value:3},"Ter\xe7a"),n.a.createElement(C.a,{value:4},"Quarta"),n.a.createElement(C.a,{value:5},"Quinta"),n.a.createElement(C.a,{value:6},"Sexta"),n.a.createElement(C.a,{value:7},"S\xe1bado"))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(L.a,{variant:"contained",color:"secondary",onClick:this.logout},"Sair",n.a.createElement(le.a,{style:{marginLeft:"5px"}}))))),n.a.createElement(ge.Animate,{play:!0,duration:1.3,start:{opacity:0,filter:"blur(0)"},end:{opacity:1,filter:"blur(0)"}},n.a.createElement(v.a,{style:{height:"auto",marginTop:"20px",backgroundColor:"#303345"},elevation:10},n.a.createElement(_.a,null,n.a.createElement(E.Row,{between:"xs",middle:"xs"},n.a.createElement(W.a,{style:{margin:"3px 5px 3px 10px",color:"white"}}),n.a.createElement(x.a,{variant:"h5",style:{color:"white"}},"Hor\xe1rio das aulas"),n.a.createElement(D.a,{"aria-label":"Atualizar",onClick:this.myUpdateClassHours},n.a.createElement(M.a,{style:{color:"white"}}))),this.purpleBar(),n.a.createElement("br",null),n.a.createElement("br",null),this.state.isLoading.class_hours?n.a.createElement(E.Row,{center:"xs"},n.a.createElement(w.a,null)):n.a.createElement(U,{class_hours:this.state.class_hours_today}))))),n.a.createElement(E.Col,{lg:6,md:12,sm:12},n.a.createElement(ge.Animate,{play:!0,start:{opacity:0,filter:"blur(0)"},end:{opacity:1,filter:"blur(0)"},duration:1.5},n.a.createElement(v.a,{style:{height:"auto",marginTop:"20px",backgroundColor:"#303345"},elevation:10},n.a.createElement(_.a,null,n.a.createElement(E.Row,{between:"xs",middle:"xs"},n.a.createElement(he.a,{style:{margin:"3px 5px 3px 10px",color:"white"}}),n.a.createElement(x.a,{variant:"h5",style:{color:"white"}},"Faltas"),n.a.createElement(D.a,{"aria-label":"Atualizar",onClick:this.myUpdateMissClasses},n.a.createElement(M.a,{style:{color:"white"}}))),this.purpleBar(),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),this.state.isLoading.miss_classes?n.a.createElement(E.Row,{center:"xs"},n.a.createElement(w.a,null)):n.a.createElement(B,{miss_classes:this.state.miss_classes_today})))),n.a.createElement(ge.Animate,{play:!0,start:{opacity:0,filter:"blur(0)"},end:{opacity:1,filter:"blur(0)"},duration:1.7},n.a.createElement(v.a,{style:{height:"auto",marginTop:"20px",backgroundColor:"#303345"},elevation:10},n.a.createElement(_.a,null,n.a.createElement(E.Row,{between:"xs",middle:"xs"},n.a.createElement(ue.a,{style:{margin:"3px 5px 3px 10px",color:"white"}}),n.a.createElement(x.a,{variant:"h5",style:{color:"white"}},"Material das aulas"),n.a.createElement(D.a,{"aria-label":"Atualizar",onClick:this.myUpdateSubjectResources},n.a.createElement(M.a,{style:{color:"white"}}))),this.purpleBar(),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),this.state.isLoading.subject_resources?n.a.createElement(E.Row,{center:"xs"},n.a.createElement(w.a,null)):n.a.createElement(ee,{subject_resources:this.state.subject_resources_today}))))),n.a.createElement(E.Col,{lg:3,md:12,sm:12},n.a.createElement(ge.Animate,{play:!0,start:{opacity:0,filter:"blur(0)"},end:{opacity:1,filter:"blur(0)"},duration:1.8},n.a.createElement(v.a,{style:{height:"auto",marginTop:"20px",backgroundColor:"#303345"},elevation:10},n.a.createElement(_.a,null,n.a.createElement(E.Row,{between:"xs",middle:"xs"},n.a.createElement(pe.a,{style:{margin:"3px 5px 3px 10px",color:"white"}}),n.a.createElement(x.a,{variant:"h5",style:{color:"white"}},"Notas"),n.a.createElement(D.a,{"aria-label":"Atualizar",onClick:this.myUpdateTestResults},n.a.createElement(M.a,{style:{color:"white"}}))),this.purpleBar(),this.state.isLoading.test_results?n.a.createElement(E.Row,{center:"xs"},n.a.createElement(w.a,null)):n.a.createElement(re,{test_results:this.state.test_results,test_results_subjects:this.state.test_results_subjects,subjects_tests:this.state.subjects_tests}),n.a.createElement("br",null),n.a.createElement("br",null)))))))}}]),t}(s.Component)),ve=Object(d.a)({palette:{primary:{500:"#a64ed0",contrastText:"#fff"},secondary:{main:"#a64ed0"}}}),_e=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).nextPage=function(){e.getDataFromLocalStorage(),e.setState({next:!0})},e.state={usuario:"",senha:"",next:!1},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getDataFromLocalStorage(),this.setState({reload:!0})}},{key:"getDataFromLocalStorage",value:function(){this.state.usuario=localStorage.getItem("usuario"),this.state.senha=localStorage.getItem("senha")}},{key:"render",value:function(){var e="";return e=null==this.state.usuario||0==this.state.usuario.length?n.a.createElement(h.a,{nextPage:this.nextPage}):n.a.createElement(Ee,null),n.a.createElement(p.a,{theme:ve},e)}}]),t}(n.a.Component),we=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function je(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(n.a.createElement(_e,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Siga-Fatec-Pocket",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/Siga-Fatec-Pocket","/service-worker.js");we?(function(e,t){fetch(e).then(function(a){var s=a.headers.get("content-type");404===a.status||null!=s&&-1===s.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):je(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):je(t,e)})}}()},51:function(e,t,a){"use strict";function s(e,t){return new Promise(function(a,s){fetch(e,{crossDomain:!0,method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then(function(e){a(e.json())},function(e){s(e)})})}a.d(t,"a",function(){return s})},57:function(e,t,a){"use strict";(function(e){a.d(t,"a",function(){return o}),a.d(t,"b",function(){return i}),a.d(t,"c",function(){return l}),a.d(t,"e",function(){return c}),a.d(t,"f",function(){return u}),a.d(t,"d",function(){return m});var s=a(51);function n(){return new e.from(localStorage.getItem("usuario"),"base64").toString("ascii")}function r(){return new e.from(localStorage.getItem("senha"),"base64").toString("ascii")}function o(){return new Promise(function(e,t){Object(s.a)("https://basic-info-siga-pocket.brunoeleodoro.now.sh",{usuario:n(),senha:r()}).then(function(t){console.log("result",t),200!=t.status?e(!1):e(t.response)}).catch(function(e){t(!1),console.log("error",e)})})}function i(){return new Promise(function(e,t){Object(s.a)("https://class-hours-siga-pocket.brunoeleodoro.now.sh",{usuario:n(),senha:r()}).then(function(t){e(t.response)}).catch(function(e){t(!1),console.log("error",e)})})}function l(){return new Promise(function(e,t){Object(s.a)("https://miss-classes-siga-pocket.brunoeleodoro.now.sh",{usuario:n(),senha:r()}).then(function(t){e(t.response)}).catch(function(e){t(!1),console.log("error",e)})})}function c(){return new Promise(function(e,t){Object(s.a)("https://subjects-siga-pocket.brunoeleodoro.now.sh",{usuario:n(),senha:r()}).then(function(t){e(t.response)}).catch(function(e){t(!1),console.log("error",e)})})}function u(){return new Promise(function(e,t){Object(s.a)("https://test-results-siga-pocket.brunoeleodoro.now.sh",{usuario:n(),senha:r()}).then(function(t){e(t.response)}).catch(function(e){t(!1),console.log("error",e)})})}function m(){return new Promise(function(e,t){Object(s.a)("https://subject-resources-pocket-siga-pocket.brunoeleodoro.now.sh",{usuario:n(),senha:r()}).then(function(t){e(t.response)}).catch(function(e){t(!1),console.log("error",e)})})}}).call(this,a(124).Buffer)}},[[172,1,2]]]);
//# sourceMappingURL=main.2d78aa34.chunk.js.map