/* jce - 2.6.1 | 2016-12-01 | http://www.joomlacontenteditor.net | Copyright (C) 2006 - 2016 Ryan Demmer. All rights reserved | GNU/GPL Version 2 or later - http://www.gnu.org/licenses/gpl-2.0.html */
WFAggregator.add("vine",{params:{type:"simple",size:600},setup:function(){$("#vine_size").change(function(){$("#width, #height").val(this.value).change()})},getTitle:function(){return this.title||this.name},getType:function(){return"iframe"},isSupported:function(v){return"object"==typeof v&&(v=v.src||v.data||""),!!/vine\.co\/(.+)/.test(v)&&"vine"},getValues:function(src){var data={},args={},id=(this.getType(),"");$.extend(args,Wf.String.query(src)),$("input, select","#vine_options").each(function(){var k=$(this).attr("id"),v=$(this).val();k=k.substr(k.indexOf("_")+1),$(this).is(":checkbox")&&(v=$(this).is(":checked")?1:0),args[k]=v});var s=/vine\.co\/v\/([a-z0-9A-Z]+)\/?/.exec(src);return s&&s.length>1&&(id=s[1]),src="//vine.co/v/"+id+"/embed/"+(args.type||this.params.type||""),data.src=src,$.extend(data,{frameborder:0,class:"vine-embed",width:args.size||this.params.size,height:args.size||this.params.size}),data},setValues:function(data){var src=data.src||data.data||"",id="";if(!src)return data;var s=/vine\.co\/v\/([a-z0-9A-Z]+)\/?(embed)?\/?(simple|postcard)?/.exec(src);return s&&s.length>1&&(id=s[1],data.type=4==s.length?s[3]:""),data.src="//vine.co/v/"+id+"/embed/",data.size=data.width||data.height||this.params.size,data},getAttributes:function(src){var args={},data=this.setValues({src:src})||{};return $.each(data,function(k,v){"src"!=k&&(args["vine_"+k]=v)}),$.extend(args,{src:data.src||src,width:this.params.size,height:this.params.size}),args},setAttributes:function(){},onSelectFile:function(){},onInsert:function(){}});