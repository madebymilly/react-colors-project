(this["webpackJsonpreact-colors-project"]=this["webpackJsonpreact-colors-project"]||[]).push([[0],{210:function(e,o,a){},340:function(e,o,a){"use strict";a.r(o);var n=a(0),r=a(21),t=a.n(r),c=a(40),l=(a(210),a(42)),i=a(17),s=a(399),m=a(35),d=a(36),h=a(31),u=a(48),p=a(47),b={Palette:{height:"100vh",display:"flex",flexDirection:"column"},colorBoxes:{height:"90%"},goBack:{background:"black",width:"20%",height:"50%",margin:"0 auto",display:"inline-block",position:"relative",marginBottom:"-3.5px"},goBackButton:{opacity:1,width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",color:"white",textTransform:"uppercase",border:"none",cursor:"pointer",textDecoration:"none"}},j=a(170),f=a(50),g=a.n(f),x={ColorBox:{width:"20%",height:function(e){return e.showingFullPalette?"25%":"50%"},margin:"0 auto",display:"inline-block",position:"relative",marginBottom:"-3.5px","&:hover button":{opacity:"1",transition:"0.5s"}},content:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:"black",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px"},copyText:{color:function(e){return g()(e.background).luminance()>=.6?"black":"white"}},colorName:{color:function(e){return g()(e.background).luminance()<=.09?"white":"black"}},seeMore:{background:"rgba(255, 255, 255, 0.3)",position:"absolute",border:"none",right:"0px",bottom:"0px",color:function(e){return g()(e.background).luminance()>=.6?"black":"white"},width:"60px",height:"30px",textAlign:"center",lineHeight:"30px",textTransform:"uppercase",cursor:"pointer",textDecoration:"none",fontSize:"0.9rem"},copyButton:{width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",color:function(e){return g()(e.background).luminance()>=.6?"black":"white"},textTransform:"uppercase",border:"none",opacity:"0",cursor:"pointer",textDecoration:"none"},copyOverlay:{opacity:0,zIndex:0,width:"100%",height:"100%",transform:"scale(0.1)"},showOverlay:{opacity:1,zIndex:10,transform:"scale(50)",position:"absolute",transition:"transform 0.5s ease-in-out"},copyOverlayInfo:{position:"fixed",left:0,right:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",fontSize:"4rem",transform:"scale(0.1)",opacity:0,color:"white","& h1":{fontWeight:400,textShadow:"1px 2px rgba(0,0,0,0.5)",backgroundColor:"rgba(255, 255, 255, 0.2)",width:"100%",textAlign:"center",marginBottom:0,padding:"1rem",textTransform:"uppercase"},"& p":{fontSize:"2rem",fontWeight:100}},showOverlayInfo:{opacity:1,zIndex:25,transform:"scale(1)",transition:"transform 0.4s ease-in-out",transitionDelay:"0.3s"}},O=a(2),v=function(e){Object(u.a)(a,e);var o=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=o.call(this,e)).state={value:"",copied:!1},n.handleCopy=n.handleCopy.bind(Object(h.a)(n)),n.handleClick=n.handleClick.bind(Object(h.a)(n)),n}return Object(d.a)(a,[{key:"handleCopy",value:function(){var e=this;this.setState({value:this.props.background,copied:!0},(function(){setTimeout((function(){return e.setState({copied:!1})}),2e3)}))}},{key:"handleClick",value:function(e){e.stopPropagation()}},{key:"render",value:function(){var e=this.props,o=e.classes,a=e.background,n=e.name,r=e.paletteID,t=e.id,l=e.showingFullPalette,i=this.state.copied;return Object(O.jsxs)("div",{style:{background:a},className:o.ColorBox,children:[Object(O.jsx)("div",{style:{background:a},className:"".concat(o.copyOverlay," ").concat(i&&o.showOverlay)}),Object(O.jsxs)("div",{className:"".concat(o.copyOverlayInfo," ").concat(i&&o.showOverlayInfo),children:[Object(O.jsx)("h1",{children:"copied!"}),Object(O.jsx)("p",{className:o.copyText,children:a})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:o.content,children:Object(O.jsx)("span",{className:o.colorName,children:n})}),Object(O.jsx)(j.CopyToClipboard,{text:a,onCopy:this.handleCopy,children:Object(O.jsx)("button",{className:o.copyButton,children:"Copy"})})]}),l&&Object(O.jsx)(c.b,{exact:!0,to:"/palette/".concat(r,"/").concat(t),onClick:this.handleClick,className:o.seeMore,children:"More"})]})}}]),a}(n.Component),C=Object(s.a)(x)(v),y=a(185),k=a(415),F=a(400),B=a(404),S=a(403),w=a(176),N=a.n(w),P=a(408),D={NavBar:{display:"flex",alignItems:"center",justifyContent:"flex-start",height:"6vh"},logo:{marginRight:"15px",padding:"0 13px",fontSize:"22px",backgroundColor:"#eceff1",fontFamily:"Roboto",height:"100%",display:"flex",alignItems:"center","& a":{textDecoration:"none",color:"black"}},slider:{width:"340px",margin:"0 10px",display:"inline-block","& .rc-slider-track":{backgroundColor:"transparent"},"& .rc-slider-rail":{height:"8px"},"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover":{backgroundColor:"green",outline:"none",border:"2px solid green",boxShadow:"none",width:"13px",height:"13px",marginLeft:"-7px",marginTop:"-3px"}},selectContainer:{marginLeft:"auto",marginRight:"1rem"}},A=(a(269),function(e){Object(u.a)(a,e);var o=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=o.call(this,e)).state={format:"hex",open:!1},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.closeSnackbar=n.closeSnackbar.bind(Object(h.a)(n)),n}return Object(d.a)(a,[{key:"handleChange",value:function(e){var o=e.target.value;this.setState({format:o,open:!0}),this.props.handleChange(o)}},{key:"closeSnackbar",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props,o=e.classes,a=e.level,n=e.changeLevel,r=e.isSingleColor,t=this.state.format;return Object(O.jsxs)("header",{className:o.NavBar,children:[Object(O.jsx)("div",{className:o.logo,children:Object(O.jsx)(c.b,{to:"/react-colors-project/",children:"react colorpicker"})}),!r&&Object(O.jsxs)("div",{children:[Object(O.jsxs)("span",{children:["Level: ",a]}),Object(O.jsx)("div",{className:o.slider,children:Object(O.jsx)(y.a,{defaultValue:a,min:100,max:900,step:100,onAfterChange:n})})]}),Object(O.jsx)("div",{className:o.selectContainer,children:Object(O.jsx)(k.a,{variant:"standard",children:Object(O.jsxs)(F.a,{value:t,onChange:this.handleChange,children:[Object(O.jsx)(B.a,{value:"hex",children:"HEX - #ffffff"}),Object(O.jsx)(B.a,{value:"rgb",children:"RGB - rgb(255, 255, 255)"}),Object(O.jsx)(B.a,{value:"rgba",children:"RGBA - rgba(255, 255, 255, 0.1)"})]})})}),Object(O.jsx)(S.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:3e3,message:Object(O.jsxs)("span",{id:"message-id",children:["Format Changed to ",t.toUpperCase()]}),ContentProps:{"aria-describedby":"message-id"},onClose:this.closeSnackbar,action:[Object(O.jsx)(P.a,{onClick:this.closeSnackbar,color:"inherit","aria-label":"close",children:Object(O.jsx)(N.a,{})},"close")]})]})}}]),a}(n.Component)),I=Object(s.a)(D)(A),E={root:{backgroundColor:"white",height:"5vh",display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:"bold"},emoji:{fontSize:"1.5rem",margin:"0 1rem"}};var G=Object(s.a)(E)((function(e){var o=e.classes,a=e.paletteName,n=e.emoji;return Object(O.jsxs)("footer",{className:o.root,children:[a,Object(O.jsx)("span",{className:o.emoji,children:n})]})})),L=function(e){Object(u.a)(a,e);var o=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=o.call(this,e)).state={level:500,format:"hex"},n.changeLevel=n.changeLevel.bind(Object(h.a)(n)),n.changeFormat=n.changeFormat.bind(Object(h.a)(n)),n}return Object(d.a)(a,[{key:"changeLevel",value:function(e){this.setState({level:e})}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.props.classes,o=this.props.palette,a=o.colors,n=o.paletteName,r=o.emoji,t=o.id,c=this.state,l=c.level,i=c.format,s=a[l].map((function(e){return Object(O.jsx)(C,{id:e.id,background:e[i],name:e.name,paletteID:t,showingFullPalette:!0},e.id)}));return Object(O.jsxs)("div",{className:e.Palette,children:[Object(O.jsx)(I,{level:l,changeLevel:this.changeLevel,handleChange:this.changeFormat,isSingleColor:!1}),Object(O.jsx)("div",{className:e.colorBoxes,children:s}),Object(O.jsx)(G,{paletteName:n,emoji:r})]})}}]),a}(n.Component),T=Object(s.a)(b)(L),R=function(e){Object(u.a)(a,e);var o=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=o.call(this,e))._shades=n.gatherShades(n.props.palette,n.props.colorID),n.state={format:"hex"},n.changeFormat=n.changeFormat.bind(Object(h.a)(n)),n.gatherShades=n.gatherShades.bind(Object(h.a)(n)),n}return Object(d.a)(a,[{key:"gatherShades",value:function(e,o){var a=[],n=e.colors;for(var r in n)a=a.concat(n[r].filter((function(e){return e.id===o})));return a.slice(1)}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.props.classes,o=this.props.palette,a=o.paletteName,n=o.emoji,r=o.id,t=this.state.format,l=this._shades.map((function(e,o){return Object(O.jsx)(C,{id:e.name,background:e[t],name:e.name,showingFullPalette:!1},o)}));return Object(O.jsxs)("div",{className:e.Palette,children:[Object(O.jsx)(I,{level:!1,handleChange:this.changeFormat,isSingleColor:!0}),Object(O.jsxs)("div",{className:e.colorBoxes,children:[l,Object(O.jsx)("div",{className:e.goBack,children:Object(O.jsx)(c.b,{to:"/palette/".concat(r),className:e.goBackButton,children:"Go Back"})})]}),Object(O.jsx)(G,{paletteName:a,emoji:n})]})}}]),a}(n.Component),z=Object(s.a)(b)(R),M={root:{backgroundColor:"blue",height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center"},container:{width:"60%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},nav:{display:"flex",width:"100%",justifyContent:"space-between",color:"white",alignItems:"center","& a":{color:"white","&:hover":{color:"lightgrey"}}},palettes:{boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 30%)",gridGap:"5%"}},U={root:{backgroundColor:"white",borderRadius:"5px",padding:"0.5rem",position:"relative",marginBottom:"1rem",height:"200px",overflow:"hidden","&:hover":{cursor:"pointer"}},colors:{backgroundColor:"white",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden"},box:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-3.5px"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"}};var H=Object(s.a)(U)((function(e){var o=e.classes,a=e.colors,n=e.emoji,r=e.paletteName,t=e.goToPalette,c=a.map((function(e){return Object(O.jsx)("div",{className:o.box,style:{backgroundColor:e.color}},e.id)}));return Object(O.jsxs)("div",{className:o.root,onClick:t,children:[Object(O.jsx)("div",{className:o.colors,children:c}),Object(O.jsxs)("h5",{className:o.title,children:[r,Object(O.jsx)("span",{className:o.emoji,children:n})]})]})})),W=function(e){Object(u.a)(a,e);var o=Object(p.a)(a);function a(){return Object(m.a)(this,a),o.apply(this,arguments)}return Object(d.a)(a,[{key:"goToPalette",value:function(e){this.props.history.push("/palette/".concat(e))}},{key:"render",value:function(){var e=this,o=this.props,a=o.classes,n=o.palettes;return Object(O.jsx)("div",{className:a.root,children:Object(O.jsxs)("div",{className:a.container,children:[Object(O.jsxs)("nav",{className:a.nav,children:[Object(O.jsx)("h1",{children:"React Colors"}),Object(O.jsx)(c.b,{to:"/palette/new/",children:"create palette"})]}),Object(O.jsx)("div",{className:a.palettes,children:n.map((function(o){return Object(O.jsx)(H,Object(l.a)(Object(l.a)({},o),{},{goToPalette:function(){return e.goToPalette(o.id)}}),o.id)}))})]})})}}]),a}(n.Component),V=Object(s.a)(M)(W),q=a(22),J=a(14),Y=a(184),K=a(81),_=a(6),Q=a(410),X=a(406),Z=a(397),$=a(409),ee=a(411),oe=a(412),ae=a(398),ne=a(182),re=a.n(ne),te=a(183),ce=a.n(te),le=a(413);var ie=Object(s.a)({root:{width:"20%",height:"25%",margin:"0 auto",display:"inline-block",position:"relative"}})((function(e){return Object(O.jsx)("div",{className:e.classes.root,style:{backgroundColor:e.color},children:e.name})})),se=320,me=Object(_.a)("main",{shouldForwardProp:function(e){return"open"!==e}})((function(e){var o=e.theme,a=e.open;return Object(l.a)({flexGrow:1,height:"calc(100vh - 64px)",transition:o.transitions.create("margin",{easing:o.transitions.easing.sharp,duration:o.transitions.duration.leavingScreen}),marginLeft:"-".concat(se,"px")},a&&{transition:o.transitions.create("margin",{easing:o.transitions.easing.easeOut,duration:o.transitions.duration.enteringScreen}),marginLeft:0})})),de=Object(_.a)($.a,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var o=e.theme,a=e.open;return Object(l.a)({transition:o.transitions.create(["margin","width"],{easing:o.transitions.easing.sharp,duration:o.transitions.duration.leavingScreen})},a&&{width:"calc(100% - ".concat(se,"px)"),marginLeft:"".concat(se,"px"),transition:o.transitions.create(["margin","width"],{easing:o.transitions.easing.easeOut,duration:o.transitions.duration.enteringScreen})})})),he=Object(_.a)("div")((function(e){var o=e.theme;return Object(l.a)(Object(l.a)({display:"flex",alignItems:"center",padding:o.spacing(0,1)},o.mixins.toolbar),{},{justifyContent:"flex-end"})}));var ue=function(){var e=Object(n.useState)(!1),o=Object(J.a)(e,2),a=o[0],r=o[1],t=Object(n.useState)("#FFFFFF"),c=Object(J.a)(t,2),i=c[0],s=c[1],m=Object(n.useState)([]),d=Object(J.a)(m,2),h=d[0],u=d[1],p=Object(n.useState)(""),b=Object(J.a)(p,2),j=b[0],f=b[1];return Object(n.useEffect)((function(){K.ValidatorForm.addValidationRule("isNameUnique",(function(e){return h.every((function(o){return o.name.toLowerCase()!==e.toLowerCase()}))})),K.ValidatorForm.addValidationRule("isColorUnique",(function(e){return h.every((function(e){return e.color!==i}))}))})),Object(O.jsxs)(Q.a,{sx:{display:"flex"},children:[Object(O.jsx)(Z.a,{}),Object(O.jsx)(de,{position:"fixed",open:a,children:Object(O.jsxs)(ee.a,{children:[Object(O.jsx)(P.a,{color:"inherit","aria-label":"open drawer",onClick:function(){r(!0)},edge:"start",sx:Object(l.a)({mr:2},a&&{display:"none"}),children:Object(O.jsx)(re.a,{})}),Object(O.jsx)(oe.a,{variant:"h6",noWrap:!0,component:"div",children:"Persistent drawer"})]})}),Object(O.jsxs)(X.a,{sx:{width:se,flexShrink:0,"& .MuiDrawer-paper":{width:se,boxSizing:"border-box"}},variant:"persistent",anchor:"left",open:a,children:[Object(O.jsx)(he,{children:Object(O.jsx)(P.a,{onClick:function(){r(!1)},children:Object(O.jsx)(ce.a,{})})}),Object(O.jsx)(ae.a,{}),Object(O.jsx)(oe.a,{variant:"h4",children:"Design Your Palette"}),Object(O.jsxs)("div",{children:[Object(O.jsx)(le.a,{variant:"contained",color:"secondary",children:"Clear Palette"}),Object(O.jsx)(le.a,{variant:"contained",color:"primary",children:"Random Color"})]}),Object(O.jsx)(Y.a,{color:i,onChangeComplete:function(e){s(e.hex)}}),Object(O.jsxs)(K.ValidatorForm,{onSubmit:function(){var e={color:i,name:j};u([].concat(Object(q.a)(h),[e])),f("")},children:[Object(O.jsx)(K.TextValidator,{value:j,onChange:function(e){return f(e.target.value)},validators:["required","isNameUnique","isColorUnique"],errorMessages:"Color already added."}),Object(O.jsx)(le.a,{variant:"contained",type:"submit",color:"primary",children:"Add Color"})]})]}),Object(O.jsxs)(me,{open:a,children:[Object(O.jsx)(he,{}),h.map((function(e,o){return Object(O.jsx)(ie,{color:e.color,name:e.name},o)}))]})]})},pe=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],be=a(136),je=[50,100,200,300,400,500,600,700,800,900];function fe(e){var o,a={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},n=Object(be.a)(je);try{for(n.s();!(o=n.n()).done;){var r=o.value;a.colors[r]=[]}}catch(h){n.e(h)}finally{n.f()}var t,c,l,i=Object(be.a)(e.colors);try{for(i.s();!(t=i.n()).done;){var s=t.value,m=(c=s.color,l=10,g.a.scale(function(e){var o="#fff";return[g()(e).darken(1.4).hex(),e,o]}(c)).mode("lab").colors(l)).reverse();for(var d in m)a.colors[je[d]].push({name:"".concat(s.name," ").concat(je[d]),id:s.name.toLowerCase().replace(/ /g,"-"),hex:m[d],rgb:g()(m[d]).css(),rgba:g()(m[d]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(h){i.e(h)}finally{i.f()}return a}var ge=function(e){return pe.find((function(o){return o.id===e}))};var xe=Object(s.a)({app:{}})((function(e){var o=e.classes;return Object(O.jsx)("div",{className:o.app,children:Object(O.jsxs)(i.c,{children:[Object(O.jsx)(i.a,{exact:!0,path:"/palette/new/",render:function(){return Object(O.jsx)(ue,{})}}),Object(O.jsx)(i.a,{exact:!0,path:"/react-colors-project/",render:function(e){return Object(O.jsx)(V,Object(l.a)({palettes:pe},e))}}),Object(O.jsx)(i.a,{exact:!0,path:"/palette/:id",render:function(e){return Object(O.jsx)(T,{palette:fe(ge(e.match.params.id))})}}),Object(O.jsx)(i.a,{exact:!0,path:"/palette/:paletteID/:colorID",render:function(e){return Object(O.jsx)(z,{palette:fe(ge(e.match.params.paletteID)),colorID:e.match.params.colorID})}})]})})}));t.a.render(Object(O.jsx)(c.a,{children:Object(O.jsx)(xe,{})}),document.getElementById("root"))}},[[340,1,2]]]);
//# sourceMappingURL=main.4f991296.chunk.js.map