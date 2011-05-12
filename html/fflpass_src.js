/**
 * Contao Open Source CMS
 * Copyright (C) 2005-2011 Leo Feyer
 *
 * Formerly known as TYPOlight Open Source CMS.
 *
 * This program is free software: you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation, either
 * version 3 of the License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public
 * License along with this program. If not, please visit the Free
 * Software Foundation website at <http://www.gnu.org/licenses/>.
 *
 *
 * Class UnmaskPassword
 *
 * @copyright  Stephan Jahrling 2011
 * @author     Stephan Jahrling <http://www.jahrling-software.de>
 * @license    http://opensource.org/licenses/lgpl-3.0.html
 */
 

var UnmaskPassword = new Class(
{
  
  Implements: Options,
  options: {
		cbLabel: 	'Show password',
		inputClass:	'unmaskpassword',
		focusInput: true
  },
	
  initialize: function( options )
  {  
    
    this.setOptions( options );
    
    this.addCheckbox( );
  
  },
  
  
  addCheckbox: function( )
  {
  	
  	var strLabelText = this.options.cbLabel;
  	var focusBox     = this.options.focusInput;
  	
  	
  	$$('.' + this.options.inputClass).each(function(el){
  	
  		var passCB = new Element ( 
  			'input' , { 
  				'type' 	: 'checkbox', 
  				'name'	: 'unmaskpassword',
  				'id'	: 'ctrl_unmaskpassword',
  				events	: { 
  					click: function(){ 
  						
  						var objOldInput = $(this).getPrevious('input');
  	 					var objNewInput = new Element (
  	 						'input' , {
  	 							'name'	: objOldInput.get('name'),
  	 							'class'	: objOldInput.get('class'),
  	 							'id'	: objOldInput.get('id'),
  	 							'value'	: objOldInput.get('value')
  	 						}
  	 					);
  	 	
  	 					if( objOldInput.getProperty('type') == 'password' )
  	 						objNewInput.setProperty('type', 'text');
  	 					else
  	 						objNewInput.setProperty('type', 'password');
  	 	
  	 		
  	 					objNewInput.replaces( objOldInput );
  	 					
  	 					if( focusBox )
  	 						objNewInput.focus();
  	 	
  					} 
  				}
   			}
  		);
  		var labelCB = new Element ( 'label' , { 'for' : 'ctrl_unmaskpassword' , 'html' : strLabelText } );
  	
  		passCB.injectAfter( el );
  		labelCB.injectAfter( passCB );
  	
  	});
  	
  }

});
