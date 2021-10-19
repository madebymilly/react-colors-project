(this["webpackJsonpreact-colors-project"]=this["webpackJsonpreact-colors-project"]||[]).push([[0],{111:function(e,o,a){},131:function(e,o,a){},135:function(e,o,a){},210:function(e,o,a){},214:function(e,o,a){"use strict";a.r(o);var r=a(0),n=a(19),c=a.n(n),l=a(41),t=(a(131),a(59)),i=a(15),s=a(268),m=a(29),d=a(30),h=a(25),u=a(37),b=a(36),p=a(112),j=(a(135),a(2)),f=function(e){Object(u.a)(a,e);var o=Object(b.a)(a);function a(e){var r;return Object(m.a)(this,a),(r=o.call(this,e)).state={value:"",copied:!1},r.handleCopy=r.handleCopy.bind(Object(h.a)(r)),r.handleClick=r.handleClick.bind(Object(h.a)(r)),r}return Object(d.a)(a,[{key:"handleCopy",value:function(){var e=this;this.setState({value:this.props.background,copied:!0},(function(){setTimeout((function(){return e.setState({copied:!1})}),2e3)}))}},{key:"handleClick",value:function(e){e.stopPropagation()}},{key:"render",value:function(){var e=this.props,o=e.background,a=e.name,r=e.paletteID,n=e.id,c=e.showLink,t=this.state.copied;return Object(j.jsxs)("div",{style:{background:o},className:"ColorBox",children:[Object(j.jsx)("div",{style:{background:o},className:"ColorBox__copy-overlay ".concat(t&&"ColorBox__copy-overlay--show")}),Object(j.jsxs)("div",{className:"ColorBox__copy-overlay-info ".concat(t&&"ColorBox__copy-overlay-info--show"),children:[Object(j.jsx)("h1",{children:"copied!"}),Object(j.jsx)("p",{children:o})]}),Object(j.jsxs)("div",{className:"ColorBox__container",children:[Object(j.jsx)("div",{className:"ColorBox__content",children:Object(j.jsx)("span",{children:a})}),Object(j.jsx)(p.CopyToClipboard,{text:o,onCopy:this.handleCopy,children:Object(j.jsx)("button",{className:"ColorBox__button",children:"Copy"})})]}),c&&Object(j.jsx)(l.b,{exact:!0,to:"/palette/".concat(r,"/").concat(n),onClick:this.handleClick,className:"ColorBox__more",children:"More"})]})}}]),a}(r.Component),g=a(118),v=a(273),O=a(267),C=a(270),x=a(271),y=a(117),B=a.n(y),F=a(275),k=(a(209),a(210),function(e){Object(u.a)(a,e);var o=Object(b.a)(a);function a(e){var r;return Object(m.a)(this,a),(r=o.call(this,e)).state={format:"hex",open:!1},r.handleChange=r.handleChange.bind(Object(h.a)(r)),r.closeSnackbar=r.closeSnackbar.bind(Object(h.a)(r)),r}return Object(d.a)(a,[{key:"handleChange",value:function(e){var o=e.target.value;this.setState({format:o,open:!0}),this.props.handleChange(o)}},{key:"closeSnackbar",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props,o=e.level,a=e.changeLevel,r=e.isSingleColor,n=this.state.format;return Object(j.jsxs)("header",{className:"NavBar",children:[Object(j.jsx)("div",{className:"NavBar__logo",children:Object(j.jsx)(l.b,{to:"/react-colors-project/",children:"react colorpicker"})}),!r&&Object(j.jsxs)("div",{className:"NavBar__slider-container",children:[Object(j.jsxs)("span",{children:["Level: ",o]}),Object(j.jsx)("div",{className:"NavBar__slider",children:Object(j.jsx)(g.a,{defaultValue:o,min:100,max:900,step:100,onAfterChange:a})})]}),Object(j.jsx)("div",{className:"NavBar__select-container",children:Object(j.jsx)(v.a,{variant:"standard",children:Object(j.jsxs)(O.a,{value:n,onChange:this.handleChange,children:[Object(j.jsx)(C.a,{value:"hex",children:"HEX - #ffffff"}),Object(j.jsx)(C.a,{value:"rgb",children:"RGB - rgb(255, 255, 255)"}),Object(j.jsx)(C.a,{value:"rgba",children:"RGBA - rgba(255, 255, 255, 0.1)"})]})})}),Object(j.jsx)(x.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:3e3,message:Object(j.jsxs)("span",{id:"message-id",children:["Format Changed to ",n.toUpperCase()]}),ContentProps:{"aria-describedby":"message-id"},onClose:this.closeSnackbar,action:[Object(j.jsx)(F.a,{onClick:this.closeSnackbar,color:"inherit","aria-label":"close",children:Object(j.jsx)(B.a,{})},"close")]})]})}}]),a}(r.Component));var N=Object(s.a)({root:{backgroundColor:"white",height:"5vh",display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:"bold"},emoji:{fontSize:"1.5rem",margin:"0 1rem"}})((function(e){var o=e.classes,a=e.name,r=e.emoji;return Object(j.jsxs)("footer",{className:o.root,children:[a,Object(j.jsx)("span",{className:o.emoji,children:r})]})})),S=(a(111),function(e){Object(u.a)(a,e);var o=Object(b.a)(a);function a(e){var r;return Object(m.a)(this,a),(r=o.call(this,e)).state={level:500,format:"hex"},r.changeLevel=r.changeLevel.bind(Object(h.a)(r)),r.changeFormat=r.changeFormat.bind(Object(h.a)(r)),r}return Object(d.a)(a,[{key:"changeLevel",value:function(e){this.setState({level:e})}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.props.palette,o=e.colors,a=e.paletteName,r=e.emoji,n=e.id,c=this.state,l=c.level,t=c.format,i=o[l].map((function(e){return Object(j.jsx)(f,{id:e.id,background:e[t],name:e.name,paletteID:n,showLink:!0},e.id)}));return Object(j.jsxs)("div",{className:"Palette",children:[Object(j.jsx)(k,{level:l,changeLevel:this.changeLevel,handleChange:this.changeFormat,isSingleColor:!1}),Object(j.jsx)("div",{className:"Palette__colors",children:i}),Object(j.jsx)(N,{paletteName:a,emoji:r})]})}}]),a}(r.Component)),P=function(e){Object(u.a)(a,e);var o=Object(b.a)(a);function a(e){var r;return Object(m.a)(this,a),(r=o.call(this,e))._shades=r.gatherShades(r.props.palette,r.props.colorID),r.state={format:"hex"},r.changeFormat=r.changeFormat.bind(Object(h.a)(r)),r.gatherShades=r.gatherShades.bind(Object(h.a)(r)),r}return Object(d.a)(a,[{key:"gatherShades",value:function(e,o){var a=[],r=e.colors;for(var n in r)a=a.concat(r[n].filter((function(e){return e.id===o})));return a.slice(1)}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){console.log(this.props);var e=this.props.palette,o=e.paletteName,a=e.emoji,r=e.id,n=this.state.format,c=this._shades.map((function(e,o){return Object(j.jsx)(f,{id:e.name,background:e[n],name:e.name,showLink:!1},o)}));return Object(j.jsxs)("div",{className:"SingleColorPalette Palette",children:[Object(j.jsx)(k,{level:!1,handleChange:this.changeFormat,isSingleColor:!0}),Object(j.jsxs)("div",{className:"Palette__colors",children:[c,Object(j.jsx)("div",{className:"ColorBox ColorBox--back",children:Object(j.jsx)(l.b,{to:"/palette/".concat(r),className:"ColorBox__button",children:"Go Back"})})]}),Object(j.jsx)(N,{paletteName:o,emoji:a})]})}}]),a}(r.Component);var D=Object(s.a)({root:{backgroundColor:"white",borderRadius:"5px",padding:"0.5rem",position:"relative",marginBottom:"1rem",height:"200px",overflow:"hidden","&:hover":{cursor:"pointer"}},colors:{backgroundColor:"white",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden"},box:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-3.5px"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"}})((function(e){var o=e.classes,a=e.colors,r=e.emoji,n=e.paletteName,c=e.goToPalette,l=a.map((function(e){return Object(j.jsx)("div",{className:o.box,style:{backgroundColor:e.color}},e.id)}));return Object(j.jsxs)("div",{className:o.root,onClick:c,children:[Object(j.jsx)("div",{className:o.colors,children:l}),Object(j.jsxs)("h5",{className:o.title,children:[n,Object(j.jsx)("span",{className:o.emoji,children:r})]})]})})),w=function(e){Object(u.a)(a,e);var o=Object(b.a)(a);function a(){return Object(m.a)(this,a),o.apply(this,arguments)}return Object(d.a)(a,[{key:"goToPalette",value:function(e){this.props.history.push("/palette/".concat(e))}},{key:"render",value:function(){var e=this,o=this.props,a=o.classes,r=o.palettes;return Object(j.jsx)("div",{className:a.root,children:Object(j.jsxs)("div",{className:a.container,children:[Object(j.jsxs)("nav",{className:a.nav,children:[Object(j.jsx)("h1",{children:"React Colors"}),Object(j.jsx)("a",{href:"/",children:"create palette"})]}),Object(j.jsx)("div",{className:a.palettes,children:r.map((function(o){return Object(j.jsx)(D,Object(t.a)(Object(t.a)({},o),{},{goToPalette:function(){return e.goToPalette(o.id)}}),o.id)}))})]})})}}]),a}(r.Component),A=Object(s.a)({root:{backgroundColor:"blue",height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center"},container:{width:"60%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},nav:{display:"flex",width:"100%",justifyContent:"space-between",color:"white"},palettes:{boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 30%)",gridGap:"5%"}})(w),_=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],E=a(93),G=a(63),I=a.n(G),L=[50,100,200,300,400,500,600,700,800,900];function R(e){var o,a={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},r=Object(E.a)(L);try{for(r.s();!(o=r.n()).done;){var n=o.value;a.colors[n]=[]}}catch(h){r.e(h)}finally{r.f()}var c,l,t,i=Object(E.a)(e.colors);try{for(i.s();!(c=i.n()).done;){var s=c.value,m=(l=s.color,t=10,I.a.scale(function(e){var o="#fff";return[I()(e).darken(1.4).hex(),e,o]}(l)).mode("lab").colors(t)).reverse();for(var d in m)a.colors[L[d]].push({name:"".concat(s.name," ").concat(L[d]),id:s.name.toLowerCase().replace(/ /g,"-"),hex:m[d],rgb:I()(m[d]).css(),rgba:I()(m[d]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(h){i.e(h)}finally{i.f()}return a}var M=function(e){return _.find((function(o){return o.id===e}))};var T=Object(s.a)({app:{}})((function(e){var o=e.classes;return Object(j.jsx)("div",{className:o.app,children:Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/react-colors-project/",render:function(e){return Object(j.jsx)(A,Object(t.a)({palettes:_},e))}}),Object(j.jsx)(i.a,{exact:!0,path:"/palette/:id",render:function(e){return Object(j.jsx)(S,{palette:R(M(e.match.params.id))})}}),Object(j.jsx)(i.a,{exact:!0,path:"/palette/:paletteID/:colorID",render:function(e){return Object(j.jsx)(P,{palette:R(M(e.match.params.paletteID)),colorID:e.match.params.colorID})}})]})})}));c.a.render(Object(j.jsx)(l.a,{children:Object(j.jsx)(T,{})}),document.getElementById("root"))}},[[214,1,2]]]);
//# sourceMappingURL=main.da1d8b7b.chunk.js.map