(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{325:function(e,t,r){var content=r(335);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(71).default)("fa39bd56",content,!0,{sourceMap:!1})},327:function(e,t,r){var map={"./dance-world.png":328,"./just-dance-now.png":329,"./lovebeat.png":330,"./mstar.png":331,"./parapa.png":332,"./touch.png":333};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=327},328:function(e,t,r){e.exports=r.p+"img/dance-world.e14633a.png"},329:function(e,t,r){e.exports=r.p+"img/just-dance-now.3e7022e.png"},330:function(e,t,r){e.exports=r.p+"img/lovebeat.13bb33a.png"},331:function(e,t,r){e.exports=r.p+"img/mstar.f147f21.png"},332:function(e,t,r){e.exports=r.p+"img/parapa.8a915b2.png"},333:function(e,t,r){e.exports=r.p+"img/touch.2039092.png"},334:function(e,t,r){"use strict";r(325)},335:function(e,t,r){var n=r(70)(!1);n.push([e.i,".game-card[data-v-7e4e7ecd]{height:100%;border-radius:1rem;background:#fff;padding:1.5rem 1.5rem 2rem;display:flex;flex-direction:column;grid-row-gap:.75rem;row-gap:.75rem;color:#000;text-decoration:none;transition:box-shadow .3s ease}.game-card[data-v-7e4e7ecd]:hover{box-shadow:0 4px 16px rgba(0,0,0,.1)}.game-card__image[data-v-7e4e7ecd]{width:6.125rem;height:6.125rem}.game-card__image img[data-v-7e4e7ecd]{height:auto;max-width:100%}.game-card__title[data-v-7e4e7ecd]{font-size:1.5rem;line-height:1.25;font-weight:600;margin-top:.25rem}.game-card__description[data-v-7e4e7ecd]{max-width:20.5rem;color:#8b8b8b;line-height:1.25}",""]),e.exports=n},339:function(e,t,r){"use strict";r.r(t);r(22),r(31),r(36);var n={name:"GameCard",props:{game:{type:Object,required:!0}}},o=(r(334),r(35)),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("nuxt-link",{staticClass:"game-card",attrs:{to:"/games/".concat(e.game.slug)}},[t("div",{staticClass:"game-card__image"},[t("img",{attrs:{src:r(327)("./".concat(e.game.image))}})]),t("div",{staticClass:"game-card__title"},[e._v(e._s(e.game.name))]),t("div",{staticClass:"game-card__description",domProps:{innerHTML:e._s(e.game.description)}})])}),[],!1,null,"7e4e7ecd",null);t.default=component.exports}}]);