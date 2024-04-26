// Copyright (c) 2024, osama and contributors
// For license information, please see license.txt

frappe.ui.form.on('Demo', {
	refresh: function(frm) {
		frm.set_query('property',()=>{
			return {
				query: 'estate_app.estate_app.doctype.property.api.check_property_type',
				args: {
					'property_type': 'An apartment'
				},
				
			}
		} )
	}
});
