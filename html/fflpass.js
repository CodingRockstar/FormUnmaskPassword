/**
 * Class UnmaskPassword
 *
 * @copyright  Stephan Jahrling 2011
 * @author     Stephan Jahrling <http://www.jahrling-software.de>
 * @license    http://opensource.org/licenses/lgpl-3.0.html
 */

var UnmaskPassword=new Class({Implements:Options,options:{cbLabel:'Show password',inputClass:'unmaskpassword',focusInput:true},initialize:function(a){this.setOptions(a);this.addCheckbox()},addCheckbox:function(){var f=this.options.cbLabel;var g=this.options.focusInput;$$('.'+this.options.inputClass).each(function(c){var d=new Element('input',{'type':'checkbox','name':'unmaskpassword','id':'ctrl_unmaskpassword',events:{click:function(){var a=$(this).getPrevious('input');var b=new Element('input',{'name':a.get('name'),'class':a.get('class'),'id':a.get('id'),'value':a.get('value')});if(a.getProperty('type')=='password')b.setProperty('type','text');else b.setProperty('type','password');b.replaces(a);if(g)b.focus()}}});var e=new Element('label',{'for':'ctrl_unmaskpassword','html':f});d.injectAfter(c);e.injectAfter(d)})}});