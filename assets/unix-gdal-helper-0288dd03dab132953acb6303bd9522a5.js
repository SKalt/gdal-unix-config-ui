"use strict"
define("unix-gdal-helper/app",["exports","unix-gdal-helper/resolver","ember-load-initializers","unix-gdal-helper/config/environment"],function(e,t,n,i){Object.defineProperty(e,"__esModule",{value:!0})
var l=Ember.Application.extend({modulePrefix:i.default.modulePrefix,podModulePrefix:i.default.podModulePrefix,Resolver:t.default});(0,n.default)(l,i.default.modulePrefix),e.default=l}),define("unix-gdal-helper/components/copy-button",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.Component
e.default=t.extend({classNames:["copy-button"],click:function(){var e=document.createElement("textarea")
document.querySelector("body").appendChild(e),e.value=document.querySelector("pre.script").textContent,e.select(),document.execCommand("copy"),e.remove(),e=null}})}),define("unix-gdal-helper/components/gdal-config-option",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.Component
Ember.computed
e.default=t.extend({tagName:"pre",classNames:["option"],attributeBindings:["title"],title:"Remove this option",click:function(){this.get("removeSelf")(this.option)}})}),define("unix-gdal-helper/components/gdal-config-options",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.Component,n=Ember.computed
e.default=t.extend({tagName:"pre",classNames:["script"],anyOptions:n("excluded","included",function(){return alert(this.get("included")),[].concat(this.get("included"),this.get("excluded")).filter(function(e){return e}).length}),actions:{remove:function(){this.get("remove").apply(void 0,arguments)}}})}),define("unix-gdal-helper/components/generic-selector",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.Component
e.default=t.extend({actions:{select:function(e){this.get("onSelect")(e.target.value),e.target.value=""}}})}),define("unix-gdal-helper/controllers/application",["exports"],function(e){function t(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t]
return n}return Array.from(e)}Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Controller
e.default=n.extend({queryParams:{include:{type:"array",refreshModel:!0,replaceState:!0},exclude:{type:"array",refreshModel:!0,replaceState:!0}},include:[],exclude:[],actions:{unsetOption:function(e){this.include.indexOf(e)>=0?this.set("include",this.include.filter(function(t){return t!=e})):this.exclude.indexOf(e)>=0&&this.set("exclude",this.exclude.filter(function(t){return t!=e}))},includeOption:function(e){this.set("include",[].concat(t(new Set([].concat(t(this.include),[e])))).filter(function(e){return e}))
var n=new Set(this.exclude)
n.delete(e),console.log(n),this.set("exclude",[].concat(t(n)).filter(function(e){return e}))},excludeOption:function(e){this.set("exclude",[].concat(t(new Set([].concat(t(this.exclude),[e])))).filter(function(e){return e}))
var n=new Set(this.include)
n.delete(e),this.set("include",[].concat(t(n)).filter(function(e){return e}))}}})}),define("unix-gdal-helper/helpers/app-version",["exports","unix-gdal-helper/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,n){function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return t.hideSha?l.match(n.versionRegExp)[0]:t.hideVersion?l.match(n.shaRegExp)[0]:l}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=i
var l=t.default.APP.version
e.default=Ember.Helper.helper(i)}),define("unix-gdal-helper/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("unix-gdal-helper/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("unix-gdal-helper/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","unix-gdal-helper/config/environment"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0})
var i=n.default.APP,l=i.name,o=i.version
e.default={name:"App Version",initialize:(0,t.default)(l,o)}}),define("unix-gdal-helper/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("unix-gdal-helper/initializers/data-adapter",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"data-adapter",before:"store",initialize:function(){}}}),define("unix-gdal-helper/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("unix-gdal-helper/initializers/export-application-global",["exports","unix-gdal-helper/config/environment"],function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var i,l=t.default.exportApplicationGlobal
i="string"==typeof l?l:Ember.String.classify(t.default.modulePrefix),n[i]||(n[i]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[i]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("unix-gdal-helper/initializers/injectStore",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"injectStore",before:"store",initialize:function(){}}}),define("unix-gdal-helper/initializers/store",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"store",after:"ember-data",initialize:function(){}}}),define("unix-gdal-helper/initializers/transforms",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"transforms",before:"store",initialize:function(){}}}),define("unix-gdal-helper/instance-initializers/ember-data",["exports","ember-data/instance-initializers/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("unix-gdal-helper/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("unix-gdal-helper/router",["exports","unix-gdal-helper/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){}),e.default=n}),define("unix-gdal-helper/routes/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.Route
e.default=t.extend({model:function(e){var t=["local","libtool","grib","disable-rpath","sqlite3","mrf","enable-fast-install","jvm-lib","xerces-lib","mdb","bindir","silent","sysconfdir","xerces-inc","gnm","macosx-framework","libexecdir","srcdir","podofo-extra-lib-for-test","docdir","cache-file","pdfium-extra-lib-for-test","dvidir","no-create","datarootdir","teigha-plt","boost-lib-path","prefix","host","perl","ld-shared","xml2","gnu-ld","bsb","cpp11","localstatedir","sharedstatedir","libdir","kakadu","htmldir","oci-include","gdal-ver","localedir","oldincludedir","infodir","sbindir","datadir","build","geos","sfcgal","includedir","config-cache","libkml-lib","opencl-lib","disable-option-checking","libjson-c","podofo-lib","enable-shared","expat-lib","psdir","sysroot","pdfdir","mandir","pic","enable-static","version","jpeg12","php","expat-inc","help","runstatedir","oci-lib","libkml-inc","curl","pdfium-lib","teigha","libiconv-prefix","kea","oci","exec-prefix"],n=[].concat(t,["libtool","libiconv-prefix","grib","pam","mrf","jpeg12","ld-shared","bsb","cpp11"])
return Object.assign({inclusionOptions:t,exclusionOptions:n},e)}})}),define("unix-gdal-helper/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("unix-gdal-helper/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"shl0D5vR",block:'{"symbols":[],"statements":[[6,"div"],[9,"class","container"],[7],[0,"\\n  "],[1,[25,"generic-selector",null,[["onSelect","placeholder","listId","options"],[[25,"action",[[19,0,[]],"includeOption"],null],"add option","include",[20,["model","inclusionOptions"]]]]],false],[0,"\\n  "],[1,[25,"generic-selector",null,[["onSelect","placeholder","listId","options"],[[25,"action",[[19,0,[]],"excludeOption"],null],"remove option","exclude",[20,["model","exclusionOptions"]]]]],false],[0,"\\n  "],[1,[25,"gdal-config-options",null,[["include","exclude","remove"],[[20,["include"]],[20,["exclude"]],[25,"action",[[19,0,[]],"unsetOption"],null]]]],false],[0,"\\n  "],[1,[18,"copy-button"],false],[0,"\\n  "],[1,[18,"outlet"],false],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"unix-gdal-helper/templates/application.hbs"}})}),define("unix-gdal-helper/templates/components/copy-button",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"qLBYdyUL",block:'{"symbols":[],"statements":[[6,"button"],[9,"data-clipboard-target","pre.script"],[7],[0," Copy Script "],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"unix-gdal-helper/templates/components/copy-button.hbs"}})}),define("unix-gdal-helper/templates/components/gdal-config-option",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"ONsye4+b",block:'{"symbols":[],"statements":[[0,"    --with"],[4,"if",[[20,["isExcluded"]]],null,{"statements":[[0,"out"]],"parameters":[]},null],[0,"-"],[1,[18,"option"],false],[0,"  "]],"hasEval":false}',meta:{moduleName:"unix-gdal-helper/templates/components/gdal-config-option.hbs"}})}),define("unix-gdal-helper/templates/components/gdal-config-options",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"GwRvbNJ/",block:'{"symbols":["excluded","included"],"statements":[[0,"# cd to gdal directory\\n./configure "],[4,"each",[[20,["include"]]],null,{"statements":[[0,"\\\\\\n"],[1,[25,"gdal-config-option",null,[["option","isExcluded","removeSelf","action"],[[19,2,[]],false,[25,"action",[[19,0,[]],"remove"],null],[25,"action",[[19,0,[]],"remove"],null]]]],false]],"parameters":[2]},null],[4,"each",[[20,["exclude"]]],null,{"statements":[[0,"\\\\\\n"],[1,[25,"gdal-config-option",null,[["option","isExcluded","removeSelf"],[[19,1,[]],true,[25,"action",[[19,0,[]],"remove"],null]]]],false]],"parameters":[1]},null],[0,"\\nmake\\nsudo make install"]],"hasEval":false}',meta:{moduleName:"unix-gdal-helper/templates/components/gdal-config-options.hbs"}})}),define("unix-gdal-helper/templates/components/generic-selector",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"i28tklzK",block:'{"symbols":["option","&default"],"statements":[[6,"input"],[10,"onselect",[25,"action",[[19,0,[]],"select"],null],null],[10,"list",[26,[[18,"listId"]]]],[10,"placeholder",[26,[[18,"placeholder"]]]],[10,"title",[26,[[18,"placeholder"]]]],[7],[8],[0,"\\n"],[6,"datalist"],[10,"id",[18,"listId"],null],[7],[0,"\\n"],[4,"each",[[20,["options"]]],null,{"statements":[[0,"    "],[6,"option"],[10,"value",[19,1,[]],null],[10,"onclick",[25,"action",[[19,0,[]],"select"],null],null],[7],[0,"\\n      "],[1,[19,1,[]],false],[0,"\\n    "],[8],[0,"\\n"]],"parameters":[1]},null],[8],[0,"\\n"],[11,2],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"unix-gdal-helper/templates/components/generic-selector.hbs"}})}),define("unix-gdal-helper/config/environment",[],function(){try{var e="unix-gdal-helper/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(unescape(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("unix-gdal-helper/app").default.create({name:"unix-gdal-helper",version:"0.0.0+7a415735"})
