(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n.p+"static/media/powered-by-foursquare-grey.cdd335d8.png"},15:function(e,t,n){e.exports=n(40)},20:function(e,t,n){},31:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(9),o=n.n(r),i=(n(20),n(2)),u=n(3),s=n(5),l=n(4),m=n(6),d=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={query:""},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"search-bar"},c.a.createElement("input",{value:this.state.query,onChange:function(t){return e.onInputChange(t.target.value)}}))}},{key:"onInputChange",value:function(e){this.setState({query:e}),this.props.onSearchQueryChange(e)}}]),t}(a.Component),v=function(e){var t=e.venue,n=e.onVenueSelect,a=t.photo?"".concat(t.photo.prefix,"200x200").concat(t.photo.suffix):"https://source.unsplash.com/random/200x200",r="https://foursquare.com/v/".concat(t.venue.id),o=t.venue.location.formattedAddress[0],i=t.venue.rating;return c.a.createElement("li",{onClick:function(){return n(t)},className:"list-group-item"},c.a.createElement("div",{className:"venue-list media"},c.a.createElement("div",{className:"media-left"},c.a.createElement("img",{className:"media-object",src:a})),c.a.createElement("div",{className:"media-body"},c.a.createElement("div",{className:"media-heading"},c.a.createElement("a",{href:r,target:"_blank"},t.venue.name)),c.a.createElement("div",null,o),c.a.createElement("div",{className:"rating"},i))))},h=function(e){var t=e.venues.map(function(t){return c.a.createElement(v,{key:t.id,venue:t,onVenueSelect:e.onVenueSelect})});return c.a.createElement("ul",{className:"col-md-6 list-group"},t)},p=n(7),f=n(14),b=n.n(f),y=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"col-md-6"},c.a.createElement("img",{className:"attribution",src:b.a}))}}]),t}(c.a.Component),E=Object(p.d)({accessToken:"pk.eyJ1IjoiY3dhbmcyNDIyIiwiYSI6ImNqa3d4Z2F2cjAycG4zdXBnZTZid2J2bmMifQ.BFrd_zsyMxGq6zTyiPMH2A"}),g=function(e){var t=[],n=[],a=[-122.4194,37.7749];e.coordinates.forEach(function(r){var o=r.venue.location.lng,i=r.venue.location.lat,u=r.id,s=r.venue.name;t.push(c.a.createElement(p.a,{key:u,coordinates:[o,i]})),n.push(c.a.createElement(p.c,{key:u,coordinates:[o,i],anchor:"bottom",className:e.selectedVenue==u?"selected-popup":"popup",onClick:function(){return window.open(r.venue.url)}},c.a.createElement("p",null,s))),r.id==e.selectedVenue&&(a=[r.venue.location.lng,r.venue.location.lat])});return c.a.createElement("div",{className:"col-md-6"},c.a.createElement(E,{style:"mapbox://styles/mapbox/streets-v8",containerStyle:{height:"400px",width:"100%"},center:a,zoom:[15]},c.a.createElement(p.b,{type:"symbol",id:"marker",layout:{"icon-image":"marker-15"}},t),n),c.a.createElement(y,null))},N=(n(31),n(33)({clientID:"TSQSZARZBQHF00L4C2ILSDCZETKWHT41ZXOKRJNJ3TN0N0BT",clientSecret:"ODFB344IIV311HQBFHLNYZSHIVBAEGNU5K2YGQ3LLBJYQNLM"})),j=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={venues:[],selectedVenue:void 0},n.venueSearch("coffee"),n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"venueSearch",value:function(e){var t=this;N.venues.recommendations({ll:"37.7749,-122.4194",query:e,limit:10}).then(function(e){return e.response.group.results.sort(function(e,t){return t.venue.rating-e.venue.rating})}).then(function(e){return t.setState({selectedVenue:null,venues:e})})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"intro-text"},"Find me the best..."),c.a.createElement(d,{onSearchQueryChange:function(t){return e.venueSearch(t)}}),c.a.createElement(g,{coordinates:this.state.venues,selectedVenue:this.state.selectedVenue}),c.a.createElement(h,{onVenueSelect:function(t){return e.setState({selectedVenue:t.id})},venues:this.state.venues}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,2,1]]]);
//# sourceMappingURL=main.fcd48ef1.chunk.js.map